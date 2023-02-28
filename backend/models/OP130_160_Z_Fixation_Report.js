const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OP130_160_Z_Fixation_Report', {
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
    Z_FixationBarcode: {
      type: DataTypes.CHAR(12),
      allowNull: true
    },
    Set_Temperature: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Actual_Temperature: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Set_Time: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Z_Fixation_Status: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'OP130_160_Z_Fixation_Report',
    schema: 'dbo',
    timestamps: false
  });
};
