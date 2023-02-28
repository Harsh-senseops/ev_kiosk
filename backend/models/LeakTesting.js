const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LeakTesting', {
    DateTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    UserName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    OperationalShift: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    BatteryPackBarcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PressureCurrentValue: {
      type: DataTypes.REAL,
      allowNull: true
    },
    LeakSetValue: {
      type: DataTypes.REAL,
      allowNull: true
    },
    LeakCurrentValue: {
      type: DataTypes.REAL,
      allowNull: true
    },
    LeakTestResult: {
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
    }
  }, {
    sequelize,
    tableName: 'LeakTesting',
    schema: 'dbo',
    timestamps: false
  });
};
