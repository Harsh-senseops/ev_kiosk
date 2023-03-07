var DataTypes = require("sequelize").DataTypes;
var _Machine = require("./Machine");
var _MachineData = require("./MachineData");
var _PlannedProductionCount = require("./PlannedProductionCount");
var _ROLES = require("./ROLES");
var _USERS = require("./USERS");
var _ZoneNames = require("./ZoneNames");

function initModels(sequelize) {
  var Machine = _Machine(sequelize, DataTypes);
  var MachineData = _MachineData(sequelize, DataTypes);
  var PlannedProductionCount = _PlannedProductionCount(sequelize, DataTypes);
  var ROLES = _ROLES(sequelize, DataTypes);
  var USERS = _USERS(sequelize, DataTypes);
  var ZoneNames = _ZoneNames(sequelize, DataTypes);

  MachineData.belongsTo(Machine, { as: "Machine", foreignKey: "MachineId"});
  Machine.hasMany(MachineData, { as: "MachineData", foreignKey: "MachineId"});
  USERS.belongsTo(ROLES, { as: "user_role_ROLE", foreignKey: "user_role"});
  ROLES.hasMany(USERS, { as: "USERs", foreignKey: "user_role"});
  PlannedProductionCount.belongsTo(ZoneNames, { as: "Zone_ZoneName", foreignKey: "Zone"});
  ZoneNames.hasMany(PlannedProductionCount, { as: "PlannedProductionCounts", foreignKey: "Zone"});

  return {
    Machine,
    MachineData,
    PlannedProductionCount,
    ROLES,
    USERS,
    ZoneNames,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
