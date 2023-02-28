const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OP220_LeakTest_Process_Report', {
    DateTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    User: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    OperationalShift: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    BatteryPackBarcodeData: {
      type: DataTypes.CHAR(12),
      allowNull: true
    },
    PressureCurrentValue: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LeakSetValue: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LeakCurrentValue: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LeakTestStatus: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    BreatherProcessOK: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'OP220_LeakTest_Process_Report',
    schema: 'dbo',
    timestamps: false
  });
};
