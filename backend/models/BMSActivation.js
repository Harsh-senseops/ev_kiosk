const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('BMSActivation', {
    SlNo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DateTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    BatteryID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    BMSID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    BatteryPackNumber: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CurrentVal: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Voltage: {
      type: DataTypes.REAL,
      allowNull: true
    },
    TotalEnergy: {
      type: DataTypes.REAL,
      allowNull: true
    },
    SOH: {
      type: DataTypes.REAL,
      allowNull: true
    },
    SOC: {
      type: DataTypes.REAL,
      allowNull: true
    },
    SOE: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Temperature: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell0: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell1: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell2: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell3: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell4: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell5: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell6: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell7: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell8: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell9: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell10: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell11: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell12: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell13: {
      type: DataTypes.REAL,
      allowNull: true
    },
    ErrorCode01: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ErrorCode02: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ErrorCode03: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ErrorCode04: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ErrorCode05: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ErrorCode06: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ErrorCode07: {
      type: DataTypes.STRING(50),
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
    tableName: 'BMSActivation',
    schema: 'dbo',
    timestamps: false
  });
};
