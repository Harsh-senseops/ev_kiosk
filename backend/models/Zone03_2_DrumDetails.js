const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Zone03_2_DrumDetails', {
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
    FoamDrum01Serialnumber: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FoamDrum01ExpiryDate: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FoamDrum02Serialnumber: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FoamDrum02ExpiryDate: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ThermalDrum01Serialnumber: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ThermalDrum01ExpiryDate: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ThermalDrum02Serialnumber: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ThermalDrum02ExpiryDate: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    InserationDrum01Serialnumber: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    InserationDrum01ExpiryDate: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    InserationDrum02Serialnumber: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    InserationDrum02ExpiryDate: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FoamDrum01Level: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FoamDrum02Level: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ThermalDrum01Level: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ThermalDrum02Level: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    InserationDrum01Level: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    InserationDrum02Level: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Zone03_2_DrumDetails',
    schema: 'dbo',
    timestamps: false
  });
};
