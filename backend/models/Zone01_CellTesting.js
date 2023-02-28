const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Zone01_CellTesting', {
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
    CellBarcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ACIRActualValue: {
      type: DataTypes.REAL,
      allowNull: true
    },
    ACIRMinValue: {
      type: DataTypes.REAL,
      allowNull: true
    },
    ACIRMaxValue: {
      type: DataTypes.REAL,
      allowNull: true
    },
    DCIRActualValue: {
      type: DataTypes.REAL,
      allowNull: true
    },
    DCIRMinValue: {
      type: DataTypes.REAL,
      allowNull: true
    },
    DCIRMaxValue: {
      type: DataTypes.REAL,
      allowNull: true
    },
    OCVActualValue: {
      type: DataTypes.REAL,
      allowNull: true
    },
    OCVMinValue: {
      type: DataTypes.REAL,
      allowNull: true
    },
    OCVMaxValue: {
      type: DataTypes.REAL,
      allowNull: true
    },
    DataOk_Nok: {
      type: DataTypes.REAL,
      allowNull: true
    },
    MeasurementStatus: {
      type: DataTypes.REAL,
      allowNull: true
    },
    CellBoxBarcode: {
      type: DataTypes.REAL,
      allowNull: true
    },
    CellPositionNumber: {
      type: DataTypes.REAL,
      allowNull: true
    },
    ProbeCounter: {
      type: DataTypes.REAL,
      allowNull: true
    },
    ProbeCountSetValue: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Spare01: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Spare02: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Spare03: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Spare04: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Spare05: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Spare06: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Spare07: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Spare08: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Spare09: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Spare10: {
      type: DataTypes.REAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Zone01_CellTesting',
    schema: 'dbo',
    timestamps: false
  });
};
