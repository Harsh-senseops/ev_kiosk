const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OP180_RWeldingParameter_Report', {
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
    Z_FixationBarcode: {
      type: DataTypes.CHAR(12),
      allowNull: true
    },
    BatteryStackLayerNumber: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    BatteryWeldType: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    WeldingZoneName: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    Cell01_Weld_Ipk: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell01_Weld_Irms: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell01_Weld_Upk: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell01_Weld_Urms: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell01_Weld_S3: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell01_Weld_X_Coordinate: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell01_Weld_Y_Coordinate: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell02_Weld_Ipk: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell02_Weld_Irms: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell02_Weld_Upk: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell02_Weld_Urms: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell02_Weld_S3: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell02_Weld_X_Coordinate: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell02_Weld_Y_Coordinate: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell03_Weld_Ipk: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell03_Weld_Irms: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell03_Weld_Upk: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell03_Weld_Urms: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell03_Weld_S3: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell03_Weld_X_Coordinate: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell03_Weld_Y_Coordinate: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell04_Weld_Ipk: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell04_Weld_Irms: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell04_Weld_Upk: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell04_Weld_Urms: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell04_Weld_S3: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell04_Weld_X_Coordinate: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell04_Weld_Y_Coordinate: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell05_Weld_Ipk: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell05_Weld_Irms: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell05_Weld_Upk: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell05_Weld_Urms: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell05_Weld_S3: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell05_Weld_X_Coordinate: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell05_Weld_Y_Coordinate: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell06_Weld_Ipk: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell06_Weld_Irms: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell06_Weld_Upk: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell06_Weld_Urms: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell06_Weld_S3: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell06_Weld_X_Coordinate: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell06_Weld_Y_Coordinate: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell07_Weld_Ipk: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell07_Weld_Irms: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell07_Weld_Upk: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell07_Weld_Urms: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell07_Weld_S3: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell07_Weld_X_Coordinate: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell07_Weld_Y_Coordinate: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell08_Weld_Ipk: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell08_Weld_Irms: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell08_Weld_Upk: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell08_Weld_Urms: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell08_Weld_S3: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell08_Weld_X_Coordinate: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell08_Weld_Y_Coordinate: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell09_Weld_Ipk: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell09_Weld_Irms: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell09_Weld_Upk: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell09_Weld_Urms: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell09_Weld_S3: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell09_Weld_X_Coordinate: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell09_Weld_Y_Coordinate: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell10_Weld_Ipk: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell10_Weld_Irms: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell10_Weld_Upk: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell10_Weld_Urms: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell10_Weld_S3: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell10_Weld_X_Coordinate: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell10_Weld_Y_Coordinate: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell11_Weld_Ipk: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell11_Weld_Irms: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell11_Weld_Upk: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell11_Weld_Urms: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell11_Weld_S3: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell11_Weld_X_Coordinate: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell11_Weld_Y_Coordinate: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell12_Weld_Ipk: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell12_Weld_Irms: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell12_Weld_Upk: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell12_Weld_Urms: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell12_Weld_S3: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell12_Weld_X_Coordinate: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell12_Weld_Y_Coordinate: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell13_Weld_Ipk: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell13_Weld_Irms: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell13_Weld_Upk: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell13_Weld_Urms: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell13_Weld_S3: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell13_Weld_X_Coordinate: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell13_Weld_Y_Coordinate: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell14_Weld_Ipk: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell14_Weld_Irms: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell14_Weld_Upk: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell14_Weld_Urms: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell14_Weld_S3: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell14_Weld_X_Coordinate: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell14_Weld_Y_Coordinate: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell15_Weld_Ipk: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell15_Weld_Irms: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell15_Weld_Upk: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell15_Weld_Urms: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell15_Weld_S3: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell15_Weld_X_Coordinate: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Cell15_Weld_Y_Coordinate: {
      type: DataTypes.REAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'OP180_RWeldingParameter_Report',
    schema: 'dbo',
    timestamps: false
  });
};
