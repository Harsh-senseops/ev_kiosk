const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OP180_RWeldingParameter_Report1', {
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
    StackBarcodeData: {
      type: DataTypes.CHAR(12),
      allowNull: true
    },
    Z_FixationBarcode: {
      type: DataTypes.CHAR(12),
      allowNull: true
    },
    StackLayer: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    BatteryWeldType: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    Cell01_Weld_Current: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell01_Weld_Voltage: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell01_Weld_Power: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell01_Weld_Time: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell01_Weld_Force: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell02_Weld_Current: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell02_Weld_Voltage: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell02_Weld_Power: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell02_Weld_Time: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell02_Weld_Force: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell03_Weld_Current: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell03_Weld_Voltage: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell03_Weld_Power: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell03_Weld_Time: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell03_Weld_Force: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell04_Weld_Current: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell04_Weld_Voltage: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell04_Weld_Power: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell04_Weld_Time: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell04_Weld_Force: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell05_Weld_Current: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell05_Weld_Voltage: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell05_Weld_Power: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell05_Weld_Time: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell05_Weld_Force: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell06_Weld_Current: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell06_Weld_Voltage: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell06_Weld_Power: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell06_Weld_Time: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell06_Weld_Force: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell07_Weld_Current: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell07_Weld_Voltage: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell07_Weld_Power: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell07_Weld_Time: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell07_Weld_Force: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell08_Weld_Current: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell08_Weld_Voltage: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell08_Weld_Power: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell08_Weld_Time: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell08_Weld_Force: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell09_Weld_Current: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell09_Weld_Voltage: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell09_Weld_Power: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell09_Weld_Time: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell09_Weld_Force: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell10_Weld_Current: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell10_Weld_Voltage: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell10_Weld_Power: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell10_Weld_Time: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell10_Weld_Force: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell11_Weld_Current: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell11_Weld_Voltage: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell11_Weld_Power: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell11_Weld_Time: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell11_Weld_Force: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell12_Weld_Current: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell12_Weld_Voltage: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell12_Weld_Power: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell12_Weld_Time: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell12_Weld_Force: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell13_Weld_Current: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell13_Weld_Voltage: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell13_Weld_Power: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell13_Weld_Time: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell13_Weld_Force: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell14_Weld_Current: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell14_Weld_Voltage: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell14_Weld_Power: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell14_Weld_Time: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell14_Weld_Force: {
      type: DataTypes.REAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'OP180_RWeldingParameter_Report1',
    schema: 'dbo',
    timestamps: false
  });
};
