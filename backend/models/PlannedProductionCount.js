const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PlannedProductionCount', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    },
    Zone: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ZoneNames',
        key: 'ZoneId'
      }
    },
    Shift: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    ProductionCount: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PlannedProductionCount',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Planned",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
