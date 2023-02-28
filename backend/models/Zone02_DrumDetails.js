const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Zone02_DrumDetails', {
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
    Station01Drum01Serialnumber: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Station01Drum01ExpiryDate: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Station01Drum02Serialnumber: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Station01Drum02ExpiryDate: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Station02Drum01Serialnumber: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Station02Drum01ExpiryDate: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Station02Drum02Serialnumber: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Station02Drum02ExpiryDate: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Station03Drum01Serialnumber: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Station03Drum01ExpiryDate: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Station03Drum02Serialnumber: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Station03Drum02ExpiryDate: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Station1Drum01Level: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Station1Drum02Level: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Station2Drum01Level: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Station2Drum02Level: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Station3Drum01Level: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Station3Drum02Level: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Zone02_DrumDetails',
    schema: 'dbo',
    timestamps: false
  });
};
