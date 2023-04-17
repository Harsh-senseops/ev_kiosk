const {
  ZoneNames,
  PlannedProductionCount,
  machine,
  p_phenomena,
  users,
  action_taken_schema,
  p_phenomena_records,
  user_roles,
  rejection_p_phenomena_records,
  r_physical_phenomena,
  r_action_taken_schema,
  glue_loss_weight,
  cost_of_loss_data,
} = require("../models");
const fetch = require("node-fetch");
const { PubSub } = require("graphql-subscriptions");
const jwt = require("jsonwebtoken");
var sequelize = require("../models/index");
const pubsub = new PubSub();
const { QueryTypes } = require("sequelize");

const Query = {
  
  getAllZonesDetails: async (parent, args, contextValue, info) => {
    console.log(contextValue.isAuth);
    try {
      const zoneNames = await ZoneNames.findAll();
      return zoneNames;
    } catch (err) {
      return err;
    }
  },
  getAllProductionDetails: async () => {
    try {
      const prodDetails = await PlannedProductionCount.findAll();
      return prodDetails;
    } catch (err) {
      return err;
    }
  },
  getTodayProductionCount: async () => {
    try {
      const prodDetails = await sequelize.sequelize.query(
        "SELECT * from dbo.PlannedProductionCount where convert(varchar(10), Date, 102) = convert(varchar(10), getdate(), 102)",
        { type: QueryTypes.SELECT }
      );
      return prodDetails;
    } catch (err) {
      return err;
    }
  },
  findProductionByShift: async (_, { Shift }) => {
    try {
      const details = await sequelize.sequelize.query(
        "SELECT * from dbo.PlannedProductionCount where convert(varchar(10), Date, 102) = convert(varchar(10), getdate(), 102) AND Shift = :Shift",
        {
          replacements: { Shift: Shift },
          type: QueryTypes.SELECT,
        }
      );
      return details;
    } catch (err) {
      return err;
    }
  },
  getAllMachines: async (_, {}) => {
    try {
      const machines = await machine.findAll();
      return machines;
    } catch (err) {
      return err;
    }
  },
  getAllMachineData: async (_, {}) => {
    try {
      let tempID = "";
      let arr = [];
      let i = 0;
      let id = 0;
      let ppno = 0;
      const machineData = await sequelize.sequelize.query(
        "select * from machine inner join p_phenomena on machine.machine_id = p_phenomena.p_machine_id left join action_taken on action_taken.p_action_taken_id = p_phenomena.phenomena_no",
        { type: QueryTypes.SELECT }
      );
      machineData.sort((a, b) => a.machine_id - b.machine_id);
      machineData.map((val) => {
        if (tempID === val.machine_id) {
          if (ppno === val.phenomena_no) {
            arr[i - 1].physicalPhenomena[id].action_taken.push(
              val.action_taken
            );
            return;
          }
          id++;
          arr[i - 1].physicalPhenomena.push({
            phenomena_no: val.phenomena_no,
            phenomena_name: val.phenomena_name,
            action_taken: [],
          });
          arr[i - 1].physicalPhenomena[id].action_taken.push(val.action_taken);

          ppno = val.phenomena_no;
        } else {
          ppno = val.phenomena_no;
          id = 0;
          arr[i] = {
            machine_id: val.machine_id,
            machine_name: val.machine_name,
            physicalPhenomena: [],
            value: {
              name: "",
              id: 0,
            },
            action_taken_value: "",
            battery_pack_id: "",
          };
          arr[i].physicalPhenomena.push({
            phenomena_no: val.phenomena_no,
            phenomena_name: val.phenomena_name,
            action_taken: [],
          });
          arr[i].physicalPhenomena[id].action_taken.push(val.action_taken);
          tempID = val.machine_id;
          i++;
        }
      });
      return arr;
    } catch (err) {
      return err;
    }
  },
  // validateUser: async (_, { userName }) => {
  //   try {
  //     const users = await sequelize.sequelize.query(
  //       `select * from users inner join user_roles on users.user_id = user_roles.user_id where users.user_name = '${userName}'`,
  //       { type: QueryTypes.SELECT }
  //     );
  //     return users;
  //   } catch (err) {
  //     return err;
  //   }
  // },
  getAllActionTaken: async (_, {}) => {
    try {
      const allActionTaken = await action_taken_schema.findAll();
      return allActionTaken;
    } catch (err) {
      return err;
    }
  },
  getPhysicalPhenomenaLength: async (_, {}) => {
    try {
      const physicalPhenomena = await p_phenomena.findAll();
      return physicalPhenomena;
    } catch (err) {
      return err;
    }
  },
  getRPhysicalPhenomenaLength: async (_, {}) => {
    try {
      const rphysicalPhenomena = await r_physical_phenomena.findAll();
      return rphysicalPhenomena;
    } catch (err) {
      return err;
    }
  },
  getTodaysPhysicalPhenomena: async (_, {}) => {
    try {
      const todaysPPRecords = await sequelize.sequelize.query(
        "SELECT * from dbo.p_phenomena_records where convert(varchar(10), date, 102) = convert(varchar(10), getdate(), 102)",
        { type: QueryTypes.SELECT }
      );
      return todaysPPRecords;
    } catch (err) {
      return err;
    }
  },
  getPhysicalPhenomenaBasedOnDate: async (_, { date }) => {
    try {
      const recordsBasedOnDate = await sequelize.sequelize.query(
        `SELECT *
	FROM p_phenomena_records
	WHERE date between('${date} 0:0:0') and ('${date} 23:59:59')`,
        {
          type: QueryTypes.SELECT,
        }
      );
      return recordsBasedOnDate;
    } catch (err) {
      return err;
    }
  },
  getAllRejectionWorkMachineData: async (parent, args, contextValue, info) => {
    console.log(contextValue.isAuth)
    try {
      let tempID = 0;
      let arr = [];
      let machineIDs = [2, 4, 5, 7, 10];
      let i = 0;
      let id = 0;
      let ppno = 0;
      const machineData = await sequelize.sequelize.query(
        "select * from rejection_machine inner join r_physical_phenomena on rejection_machine.r_machine_id = r_physical_phenomena.rp_machine_id left join r_action_taken on r_action_taken.rp_action_taken_id = r_physical_phenomena.r_phenomena_no",
        { type: QueryTypes.SELECT }
      );
      machineData.sort((a, b) => a.r_machine_id - b.r_machine_id);
      machineData.map((val) => {
        if (tempID === val.r_machine_id) {
          if (ppno === val.r_phenomena_no) {
            arr[i - 1].physicalPhenomena[id].action_taken.push(
              val.r_action_taken
            );
            return;
          }
          id++;
          arr[i - 1].physicalPhenomena.push({
            phenomena_no: val.r_phenomena_no,
            phenomena_name: val.r_phenomena_name,
            action_taken: [],
          });
          arr[i - 1].physicalPhenomena[id].action_taken.push(
            val.r_action_taken
          );
          ppno = val.r_phenomena_no;
        } else {
          ppno = val.r_phenomena_no;
          id = 0;
          arr[i] = {
            machine_id: val.r_machine_id,
            machine_name: val.r_machine_name,
            physicalPhenomena: [],
            value: {
              name: "",
              id: 0,
            },
            action_taken_value: "",
            battery_pack_id: "",
          };
          arr[i].physicalPhenomena.push({
            phenomena_no: val.r_phenomena_no,
            phenomena_name: val.r_phenomena_name,
            action_taken: [],
          });
          arr[i].physicalPhenomena[id].action_taken.push(val.r_action_taken);
          tempID = val.r_machine_id;
          i++;
        }
      });
      return arr;
    } catch (err) {
      return err;
    }
  },
  validateUser: async (parent, { user_name, user_password }, contextValue, info) => {
    let userObj = { machineId: [] };
    const user = await sequelize.sequelize.query(
      `select * from users inner join user_roles on users.user_id = user_roles.user_id where users.user_name = '${user_name}' and user_password = '${user_password}'`,
      { type: QueryTypes.SELECT }
    );
    if (!user) {
      throw new Error("User does not exist");
    }

    user.map((val) => {
      userObj.id = val.user_id;
      userObj.name = val.user_name;
      userObj.password = val.user_password;
      userObj.role = val.user_roles_role;
      userObj.machineId.push(val.user_machine_id);
    });
    const token = jwt.sign(
      {
        userId: userObj.id,
        userName: userObj.name,
        userRole: userObj.role,
        machineId: userObj.machineId,
      },
      'H11Z%h<<M8}h.4<',
      { expiresIn: "1h" }
    );
    fetch('http://localhost:4000/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': token
  },
  body: JSON.stringify({ query: '{ hello }' }),
})
.then(res => res.json())
.then(res => "");
    return { userId: userObj.id, token, tokenExpiration: 1 };
  },
};

const Mutation = {
  createProductionCount: async (
    parent,
    { Date, Zone, Shift, ProductionCount },
    contextValue,
    info
  ) => {
    // console.log(info)
    try {
      var current =
        (await PlannedProductionCount) &&
        PlannedProductionCount.create({
          Date,
          Zone,
          Shift,
          ProductionCount,
        });
      pubsub.publish("COUNT_CREATED", {
        newProductionCountAdded: {
          Date: Date,
          Zone: Zone,
          Shift: Shift,
          ProductionCount: ProductionCount,
        },
      });
      return current;
    } catch (error) {
      return error;
    }
  },
  updateProductionCount: async (_, { Id, ProductionCount }) => {
    try {
      const project = await PlannedProductionCount.findByPk(Id);
      if (!project) return "Not Found";
      project.update({
        ProductionCount: ProductionCount,
      });
      pubsub.publish("UPDATED_PRODUCTION_COUNT", {
        updatedProductionCount: {
          Date: Date,
          ProductionCount: ProductionCount,
        },
      });
      return project;
    } catch (error) {
      return error;
    }
  },
  addPhysicalPhenomena: async (
    _,
    { p_machine_id, phenomena_no, phenomena_name }
  ) => {
    try {
      const addPhysicalPhenomena =
        (await p_phenomena) &&
        p_phenomena.create({
          p_machine_id,
          phenomena_no,
          phenomena_name,
        });
      return addPhysicalPhenomena;
    } catch (err) {
      return err;
    }
  },
  addActionTaken: async (_, { p_action_taken_id, action_taken }) => {
    try {
      const addActionTaken =
        (await action_taken_schema) &&
        action_taken_schema.create({
          p_action_taken_id,
          action_taken,
        });
      return addActionTaken;
    } catch (err) {
      return err;
    }
  },
  addRActionTaken: async (_, { rp_action_taken_id, r_action_taken }) => {
    try {
      const addRactionTaken =
        (await r_action_taken_schema) &&
        r_action_taken_schema.create({
          rp_action_taken_id,
          r_action_taken,
        });
      return addRactionTaken;
    } catch (err) {
      return err;
    }
  },
  addPhysicalPhenomenaRecords: async (
    _,
    { machine, p_phenomena, phenomena_no, action_taken, battery_pack_id }
  ) => {
    try {
      const addRecords =
        (await p_phenomena_records) &&
        p_phenomena_records.create({
          machine,
          p_phenomena,
          phenomena_no,
          action_taken,
          battery_pack_id,
        });
      return addRecords;
    } catch (err) {
      return err;
    }
  },
  addRPhysicalPhenomena: async (
    _,
    { rp_machine_id, r_phenomena_no, r_phenomena_name }
  ) => {
    try {
      const addRPhysicalPhenomna =
        (await r_physical_phenomena) &&
        r_physical_phenomena.create({
          rp_machine_id,
          r_phenomena_no,
          r_phenomena_name,
        });
      return addRPhysicalPhenomna;
    } catch (err) {
      return err;
    }
  },
  addRejectionppRecords: async (
    _,
    {
      r_machine,
      r_p_phenomena,
      r_phenomena_no,
      r_action_taken,
      r_battery_pack_id,
    }
  ) => {
    try {
      const addrpRecords =
        (await rejection_p_phenomena_records) &&
        rejection_p_phenomena_records.create({
          r_machine,
          r_p_phenomena,
          r_phenomena_no,
          r_action_taken,
          r_battery_pack_id,
        });
      return addrpRecords;
    } catch (err) {
      return err;
    }
  },
  addUser: async (
    _,
    { user_name, user_password, user_roles_role, user_machine_id }
  ) => {
    try {
      let x = Math.floor(Math.random() * 10000 + 1);
      let user_id = `${x}SH00H`;

      const adduser =
        (await users) &&
        users.create({
          user_id,
          user_name,
          user_password,
        });
      const addUserRoles =
        (await user_roles) &&
        user_roles.create({
          user_id,
          user_roles_role,
          user_machine_id,
        });
      console.log(await addUserRoles);
      return adduser;
    } catch (err) {
      console.log(err);
      return err;
    }
  },
  addGlueLossData: async (_, { g_machine_name, glue_loss, g_shift }) => {
    try {
      // glue_loss + 0.1
      const glueData =
        (await glue_loss_weight) &&
        glue_loss_weight.create({
          g_machine_name,
          glue_loss,
          g_shift,
        });
      // console.log(await glueData)
      return glueData;
    } catch (err) {
      return err;
    }
  },
  addCostOfLossData: async (_, { c_machine_name, loss_data, c_shift }) => {
    try {
      const costOfLossData =
        (await cost_of_loss_data) &&
        cost_of_loss_data.create({
          c_machine_name,
          loss_data,
          c_shift,
        });
      return costOfLossData;
    } catch (err) {
      return err;
    }
  },
};

const Subscription = {
  newProductionCountAdded: {
    subscribe: () => pubsub.asyncIterator(["COUNT_CREATED"]),
  },
  updatedProductionCount: {
    subscribe: () => pubsub.asyncIterator(["UPDATED_PRODUCTION_COUNT"]),
  },
};
module.exports = { Query, Mutation, Subscription };
