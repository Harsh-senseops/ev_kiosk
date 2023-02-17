var DataTypes = require("sequelize").DataTypes;
var _Planned = require("./Planned");
var _ZoneNames = require("./ZoneNames");
var _users = require("./users");

function initModels(sequelize) {
  var Planned = _Planned(sequelize, DataTypes);
  var ZoneNames = _ZoneNames(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  Planned.belongsTo(ZoneNames, { as: "Zone_ZoneName", foreignKey: "Zone"});
  ZoneNames.hasMany(Planned, { as: "Planneds", foreignKey: "Zone"});

  return {
    Planned,
    ZoneNames,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
