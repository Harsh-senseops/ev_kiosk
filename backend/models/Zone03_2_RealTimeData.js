const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Zone03_2_RealTimeData', {
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
    Z_FixationStatus: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Welding01StationStatus: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Welding02StationStatus: {
      type: DataTypes.REAL,
      allowNull: true
    },
    WeldintegrityStationStatus: {
      type: DataTypes.REAL,
      allowNull: true
    },
    FoamstationStatus: {
      type: DataTypes.REAL,
      allowNull: true
    },
    ThermalStationStatus: {
      type: DataTypes.REAL,
      allowNull: true
    },
    BMSActivationStatus: {
      type: DataTypes.REAL,
      allowNull: true
    },
    InserationStatus: {
      type: DataTypes.REAL,
      allowNull: true
    },
    BufferConveyorStatus: {
      type: DataTypes.REAL,
      allowNull: true
    },
    PalletConveyorStatus: {
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
    },
    Spare16: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Spare17: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Spare18: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Spare19: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Spare20: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Spare21: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Spare22: {
      type: DataTypes.REAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Zone03_2_RealTimeData',
    schema: 'dbo',
    timestamps: false
  });
};
