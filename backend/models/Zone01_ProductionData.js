const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Zone01_ProductionData', {
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
    NoofCellIn: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NoofOKCellOut: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OCVNotOkCount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ACIRNotOkCount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    BarcodeDataNotOkCount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NoOfDummyCellOut: {
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
    },
    Spare06: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Zone01_ProductionData',
    schema: 'dbo',
    timestamps: false
  });
};
