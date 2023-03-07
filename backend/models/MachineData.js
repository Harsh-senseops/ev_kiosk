const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MachineData', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    MachineId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Machine',
        key: 'Id'
      }
    },
    PhysicalPhenomena: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    PhenomenonNo: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ActionTaken: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'MachineData',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Machine_Data",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
