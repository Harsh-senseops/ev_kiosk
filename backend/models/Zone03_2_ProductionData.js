const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Zone03_2_ProductionData', {
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
    Z_FixationOutCounts: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Weldingstation01OutCounts: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Weldingstation02OutCounts: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    WeldintegrityOutCounts: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FoamStationOutCounts: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ThermalStationOutCounts: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    BMSActivationStationOutCounts: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    InserationStationOutCounts: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PullTestStationOutCount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LeakTestingstationOutCounts: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    BreatherstationOutCounts: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Spare01: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Spare02: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Spare03: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Spare04: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Zone03_2_ProductionData',
    schema: 'dbo',
    timestamps: false
  });
};
