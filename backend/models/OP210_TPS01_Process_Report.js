const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OP210_TPS01_Process_Report', {
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
    InputPressure01: {
      type: DataTypes.REAL,
      allowNull: true
    },
    InputPressure02: {
      type: DataTypes.REAL,
      allowNull: true
    },
    OutputtPressure01: {
      type: DataTypes.REAL,
      allowNull: true
    },
    OutputPressure02: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Servo01_Speed: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Servo02_Speed: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DPM01_Speed: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DPM02_Speed: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DespensedWeight: {
      type: DataTypes.REAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'OP210_TPS01_Process_Report',
    schema: 'dbo',
    timestamps: false
  });
};
