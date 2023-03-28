const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('r_physical_phenomena', {
    rp_machine_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'rejection_machine',
        key: 'r_machine_id'
      }
    },
    r_phenomena_no: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    r_phenomena_name: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'r_physical_phenomena',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_r_physical_phenomena",
        unique: true,
        fields: [
          { name: "r_phenomena_no" },
        ]
      },
    ]
  });
};
