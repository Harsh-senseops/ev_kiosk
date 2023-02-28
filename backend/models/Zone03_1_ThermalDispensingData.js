const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Zone03_1_ThermalDispensingData', {
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
    ComponentAServoSpeed: {
      type: DataTypes.REAL,
      allowNull: true
    },
    ComponentADrumPressMotorSpeed: {
      type: DataTypes.REAL,
      allowNull: true
    },
    ComponentADrumPressLinePressure: {
      type: DataTypes.REAL,
      allowNull: true
    },
    ComponentAServoInletPressure: {
      type: DataTypes.REAL,
      allowNull: true
    },
    ComponentAServoOutletPressure: {
      type: DataTypes.REAL,
      allowNull: true
    },
    ComponentBServoSpeed: {
      type: DataTypes.REAL,
      allowNull: true
    },
    ComponentBDrumPressMotorSpeed: {
      type: DataTypes.REAL,
      allowNull: true
    },
    ComponentBDrumPressLinePressure: {
      type: DataTypes.REAL,
      allowNull: true
    },
    ComponentBServoInletPressure: {
      type: DataTypes.REAL,
      allowNull: true
    },
    ComponentBServoOutletPressure: {
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
    },
    Spare11: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Spare12: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Spare13: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Spare14: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Spare15: {
      type: DataTypes.REAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Zone03_1_ThermalDispensingData',
    schema: 'dbo',
    timestamps: false
  });
};
