const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZoneNames', {
    ZoneId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ZoneName: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ZoneNames',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_ZoneNames",
        unique: true,
        fields: [
          { name: "ZoneId" },
        ]
      },
    ]
  });
};
