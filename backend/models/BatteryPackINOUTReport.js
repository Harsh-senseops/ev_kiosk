const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('BatteryPackINOUTReport', {
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
    StackPallateBarcode: {
      type: DataTypes.CHAR(25),
      allowNull: true
    },
    OP30_OUT_BatteryStackYears: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP30_OUT_BatteryStackMonths: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP30_OUT_BatteryStackDate: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP30_OUT_BatteryStackHourse: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP30_OUT_BatteryStackMinutes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP110_IN_BatteryStackYears: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP110_IN_BatteryStackMonths: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP110_IN_BatteryStackDate: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP110_IN_BatteryStackHourse: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP110_IN_BatteryStackMinutes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP110_OUT_BatteryStackYears: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP110_OUT_BatteryStackMonths: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP110_OUT_BatteryStackDate: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP110_OUT_BatteryStackHourse: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP110_OUT_BatteryStackMinutes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP160_IN_BatteryStackYears: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP160_IN_BatteryStackMonths: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP160_IN_BatteryStackDate: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP160_IN_BatteryStackHourse: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP160_IN_BatteryStackMinutes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP160_OUT_BatteryStackYears: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP160_OUT_BatteryStackMonths: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP160_OUT_BatteryStackDate: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP160_OUT_BatteryStackHourse: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP160_OUT_BatteryStackMinutes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP180_IN_BatteryStackYears: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP180_IN_BatteryStackMonths: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP180_IN_BatteryStackDate: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP180_IN_BatteryStackHourse: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP180_IN_BatteryStackMinutes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP180_OUT_BatteryStackYears: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP180_OUT_BatteryStackMonths: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP180_OUT_BatteryStackDate: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP180_OUT_BatteryStackHourse: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP180_OUT_BatteryStackMinutes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP190_IN_BatteryStackYears: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP190_IN_BatteryStackMonths: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP190_IN_BatteryStackDate: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP190_IN_BatteryStackHourse: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP190_IN_BatteryStackMinutes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP190_OUT_BatteryStackYears: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP190_OUT_BatteryStackMonths: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP190_OUT_BatteryStackDate: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP190_OUT_BatteryStackHourse: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP190_OUT_BatteryStackMinutes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP200_IN_BatteryStackYears: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP200_IN_BatteryStackMonths: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP200_IN_BatteryStackDate: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP200_IN_BatteryStackHourse: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP200_IN_BatteryStackMinutes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP200_OUT_BatteryStackYears: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP200_OUT_BatteryStackMonths: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP200_OUT_BatteryStackDate: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP200_OUT_BatteryStackHourse: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP200_OUT_BatteryStackMinutes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP210_IN_BatteryStackYears: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP210_IN_BatteryStackMonths: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP210_IN_BatteryStackDate: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP210_IN_BatteryStackHourse: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP210_IN_BatteryStackMinutes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP210_OUT_BatteryStackYears: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP210_OUT_BatteryStackMonths: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP210_OUT_BatteryStackDate: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP210_OUT_BatteryStackHourse: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP210_OUT_BatteryStackMinutes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP220_IN_BatteryStackYears: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP220_IN_BatteryStackMonths: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP220_IN_BatteryStackDate: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP220_IN_BatteryStackHourse: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP220_IN_BatteryStackMinutes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP220_OUT_BatteryStackYears: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP220_OUT_BatteryStackMonths: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP220_OUT_BatteryStackDate: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP220_OUT_BatteryStackHourse: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP220_OUT_BatteryStackMinutes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP230_IN_BatteryStackYears: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP230_IN_BatteryStackMonths: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP230_IN_BatteryStackDate: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP230_IN_BatteryStackHourse: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP230_IN_BatteryStackMinutes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP230_OUT_BatteryStackYears: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP230_OUT_BatteryStackMonths: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP230_OUT_BatteryStackDate: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP230_OUT_BatteryStackHourse: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP230_OUT_BatteryStackMinutes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP240_IN_BatteryStackYears: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP240_IN_BatteryStackMonths: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP240_IN_BatteryStackDate: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP240_IN_BatteryStackHourse: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP240_IN_BatteryStackMinutes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP240_OUT_BatteryStackYears: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP240_OUT_BatteryStackMonths: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP240_OUT_BatteryStackDate: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP240_OUT_BatteryStackHourse: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP240_OUT_BatteryStackMinutes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP250_IN_BatteryStackYears: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP250_IN_BatteryStackMonths: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP250_IN_BatteryStackDate: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP250_IN_BatteryStackHourse: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP250_IN_BatteryStackMinutes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP250_OUT_BatteryStackYears: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP250_OUT_BatteryStackMonths: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP250_OUT_BatteryStackDate: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP250_OUT_BatteryStackHourse: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OP250_OUT_BatteryStackMinutes: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'BatteryPackINOUTReport',
    schema: 'dbo',
    timestamps: false
  });
};
