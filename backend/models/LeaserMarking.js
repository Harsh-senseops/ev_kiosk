const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LeaserMarking', {
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
    Battery_Pack_Barcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Leaser_Operation_Time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    BatteryCode: {
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
    tableName: 'LeaserMarking',
    schema: 'dbo',
    timestamps: false
  });
};
