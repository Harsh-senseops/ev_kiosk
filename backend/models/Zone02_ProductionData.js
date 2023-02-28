const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Zone02_ProductionData', {
    SlNo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DateTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    UserName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    OperationalShift: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    NoOfStackProduce: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NoOfStackReject: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Spare01: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Spare02: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Spare03: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Spare04: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Spare05: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Zone02_ProductionData',
    schema: 'dbo',
    timestamps: false
  });
};
