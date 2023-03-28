var DataTypes = require("sequelize").DataTypes;
var _PlannedProductionCount = require("./PlannedProductionCount");
var _ZoneNames = require("./ZoneNames");
var _action_taken = require("./action_taken");
var _machine = require("./machine");
var _p_phenomena = require("./p_phenomena");
var _p_phenomena_records = require("./p_phenomena_records");
var _r_action_taken = require("./r_action_taken");
var _r_physical_phenomena = require("./r_physical_phenomena");
var _rejection_machine = require("./rejection_machine");
var _rejection_p_phenomena_records = require("./rejection_p_phenomena_records");
var _roles = require("./roles");
var _user_roles = require("./user_roles");
var _users = require("./users");

function initModels(sequelize) {
  var PlannedProductionCount = _PlannedProductionCount(sequelize, DataTypes);
  var ZoneNames = _ZoneNames(sequelize, DataTypes);
  var action_taken = _action_taken(sequelize, DataTypes);
  var machine = _machine(sequelize, DataTypes);
  var p_phenomena = _p_phenomena(sequelize, DataTypes);
  var p_phenomena_records = _p_phenomena_records(sequelize, DataTypes);
  var r_action_taken = _r_action_taken(sequelize, DataTypes);
  var r_physical_phenomena = _r_physical_phenomena(sequelize, DataTypes);
  var rejection_machine = _rejection_machine(sequelize, DataTypes);
  var rejection_p_phenomena_records = _rejection_p_phenomena_records(sequelize, DataTypes);
  var roles = _roles(sequelize, DataTypes);
  var user_roles = _user_roles(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  PlannedProductionCount.belongsTo(ZoneNames, { as: "Zone_ZoneName", foreignKey: "Zone"});
  ZoneNames.hasMany(PlannedProductionCount, { as: "PlannedProductionCounts", foreignKey: "Zone"});
  p_phenomena.belongsTo(machine, { as: "p_machine", foreignKey: "p_machine_id"});
  machine.hasMany(p_phenomena, { as: "p_phenomenas", foreignKey: "p_machine_id"});
  user_roles.belongsTo(machine, { as: "user_machine", foreignKey: "user_machine_id"});
  machine.hasMany(user_roles, { as: "user_roles", foreignKey: "user_machine_id"});
  action_taken.belongsTo(p_phenomena, { as: "p_action_taken", foreignKey: "p_action_taken_id"});
  p_phenomena.hasMany(action_taken, { as: "action_takens", foreignKey: "p_action_taken_id"});
  r_action_taken.belongsTo(r_physical_phenomena, { as: "rp_action_taken", foreignKey: "rp_action_taken_id"});
  r_physical_phenomena.hasMany(r_action_taken, { as: "r_action_takens", foreignKey: "rp_action_taken_id"});
  r_physical_phenomena.belongsTo(rejection_machine, { as: "rp_machine", foreignKey: "rp_machine_id"});
  rejection_machine.hasMany(r_physical_phenomena, { as: "r_physical_phenomenas", foreignKey: "rp_machine_id"});
  user_roles.belongsTo(roles, { as: "user_roles_role_role", foreignKey: "user_roles_role"});
  roles.hasMany(user_roles, { as: "user_roles", foreignKey: "user_roles_role"});
  user_roles.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(user_roles, { as: "user_roles", foreignKey: "user_id"});

  return {
    PlannedProductionCount,
    ZoneNames,
    action_taken,
    machine,
    p_phenomena,
    p_phenomena_records,
    r_action_taken,
    r_physical_phenomena,
    rejection_machine,
    rejection_p_phenomena_records,
    roles,
    user_roles,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
