const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Z_FixationData', {
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
    ZfixationBarcodeData: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    LineNumber: {
      type: DataTypes.REAL,
      allowNull: true
    },
    TemperatureData: {
      type: DataTypes.REAL,
      allowNull: true
    },
    TempSetValue: {
      type: DataTypes.REAL,
      allowNull: true
    },
    TempMinSetValue: {
      type: DataTypes.REAL,
      allowNull: true
    },
    TempMaxSetValue: {
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
    }
  }, {
    sequelize,
    tableName: 'Z_FixationData',
    schema: 'dbo',
    timestamps: false
  });
};
