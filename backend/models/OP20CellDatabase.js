const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OP20CellDatabase', {
    DateTime: {
      type: DataTypes.DATE,
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
    User: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DataOk_Nok: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    OperationalShift: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MeasurementStatus: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    CellBoxBarcode: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    CellPositionNumber: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SpareString01: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    SpareString02: {
      type: DataTypes.STRING(32),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'OP20CellDatabase',
    schema: 'dbo',
    timestamps: false
  });
};
