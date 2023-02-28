const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OP30_90_Battery_Pack', {
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
    StackLayer: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CellBarcode01: {
      type: DataTypes.CHAR(25),
      allowNull: true
    },
    CellBarcode02: {
      type: DataTypes.CHAR(25),
      allowNull: true
    },
    CellBarcode03: {
      type: DataTypes.CHAR(25),
      allowNull: true
    },
    CellBarcode04: {
      type: DataTypes.CHAR(25),
      allowNull: true
    },
    CellBarcode05: {
      type: DataTypes.CHAR(25),
      allowNull: true
    },
    CellBarcode06: {
      type: DataTypes.CHAR(25),
      allowNull: true
    },
    CellBarcode07: {
      type: DataTypes.CHAR(25),
      allowNull: true
    },
    CellBarcode08: {
      type: DataTypes.CHAR(25),
      allowNull: true
    },
    CellBarcode09: {
      type: DataTypes.CHAR(25),
      allowNull: true
    },
    CellBarcode10: {
      type: DataTypes.CHAR(25),
      allowNull: true
    },
    CellBarcode11: {
      type: DataTypes.CHAR(25),
      allowNull: true
    },
    CellBarcode12: {
      type: DataTypes.CHAR(25),
      allowNull: true
    },
    CellBarcode13: {
      type: DataTypes.CHAR(25),
      allowNull: true
    },
    CellBarcode14: {
      type: DataTypes.CHAR(25),
      allowNull: true
    },
    StationName: {
      type: DataTypes.CHAR(25),
      allowNull: true
    },
    GlueWeight: {
      type: DataTypes.REAL,
      allowNull: true
    },
    JigCageNumber: {
      type: DataTypes.CHAR(25),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'OP30_90_Battery_Pack',
    schema: 'dbo',
    timestamps: false
  });
};
