const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rejection_machine', {
    r_machine_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    r_machine_name: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'rejection_machine',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_rejection_machine",
        unique: true,
        fields: [
          { name: "r_machine_id" },
        ]
      },
    ]
  });
};
