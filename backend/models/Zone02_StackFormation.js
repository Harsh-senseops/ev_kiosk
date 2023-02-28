const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Zone02_StackFormation', {
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
    StackLayer: {
      type: DataTypes.REAL,
      allowNull: true
    },
    CellBarcode01: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CellBarcode02: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CellBarcode03: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CellBarcode04: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CellBarcode05: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CellBarcode06: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CellBarcode07: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CellBarcode08: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CellBarcode09: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CellBarcode10: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CellBarcode11: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CellBarcode12: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CellBarcode14: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    StationName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    GlueWeight: {
      type: DataTypes.REAL,
      allowNull: true
    },
    JigCageNumber: {
      type: DataTypes.REAL,
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
    tableName: 'Zone02_StackFormation',
    schema: 'dbo',
    timestamps: false
  });
};
