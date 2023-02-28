const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OP190_Weld_Intigrity_Report', {
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
    BatteryStackLayerNumber: {
      type: DataTypes.CHAR(30),
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
    OP190_WIC_Paramerters_Report_14: {
      type: DataTypes.REAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'OP190_Weld_Intigrity_Report',
    schema: 'dbo',
    timestamps: false
  });
};
