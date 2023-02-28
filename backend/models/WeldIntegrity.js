const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('WeldIntegrity', {
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
    StackBarcodeData: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    BatteryStackLayerNumber: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    OP190_WIC_Paramerters_Report_1: {
      type: DataTypes.REAL,
      allowNull: true
    },
    OP190_WIC_Paramerters_Report_2: {
      type: DataTypes.REAL,
      allowNull: true
    },
    OP190_WIC_Paramerters_Report_3: {
      type: DataTypes.REAL,
      allowNull: true
    },
    OP190_WIC_Paramerters_Report_4: {
      type: DataTypes.REAL,
      allowNull: true
    },
    OP190_WIC_Paramerters_Report_5: {
      type: DataTypes.REAL,
      allowNull: true
    },
    OP190_WIC_Paramerters_Report_6: {
      type: DataTypes.REAL,
      allowNull: true
    },
    OP190_WIC_Paramerters_Report_7: {
      type: DataTypes.REAL,
      allowNull: true
    },
    OP190_WIC_Paramerters_Report_8: {
      type: DataTypes.REAL,
      allowNull: true
    },
    OP190_WIC_Paramerters_Report_9: {
      type: DataTypes.REAL,
      allowNull: true
    },
    OP190_WIC_Paramerters_Report_10: {
      type: DataTypes.REAL,
      allowNull: true
    },
    OP190_WIC_Paramerters_Report_11: {
      type: DataTypes.REAL,
      allowNull: true
    },
    OP190_WIC_Paramerters_Report_12: {
      type: DataTypes.REAL,
      allowNull: true
    },
    OP190_WIC_Paramerters_Report_13: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell01_Weld_X_Coordinate: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell01_Weld_Y_Coordinate: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell02_Weld_X_Coordinate: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell02_Weld_Y_Coordinate: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell03_Weld_X_Coordinate: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell03_Weld_Y_Coordinate: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell04_Weld_X_Coordinate: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell04_Weld_Y_Coordinate: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell05_Weld_X_Coordinate: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell05_Weld_Y_Coordinate: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell06_Weld_X_Coordinate: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell07_Weld_Y_Coordinate: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell08_Weld_X_Coordinate: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell08_Weld_Y_Coordinate: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell09_Weld_X_Coordinate: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell09_Weld_Y_Coordinate: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell10_Weld_X_Coordinate: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell10_Weld_Y_Coordinate: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell11_Weld_X_Coordinate: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell11_Weld_Y_Coordinate: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell12_Weld_X_Coordinate: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell12_Weld_Y_Coordinate: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell13_Weld_X_Coordinate: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell13_Weld_Y_Coordinate: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell14_Weld_X_Coordinate: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell14_Weld_Y_Coordinate: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Spare1: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Spare2: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Spare3: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Spare4: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Spare5: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Spare6: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Spare7: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Spare8: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Spare9: {
      type: DataTypes.REAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'WeldIntegrity',
    schema: 'dbo',
    timestamps: false
  });
};
