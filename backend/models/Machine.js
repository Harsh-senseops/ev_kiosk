const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('machine', {
    machine_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    machine_name: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'machine',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Table_1",
        unique: true,
        fields: [
          { name: "machine_id" },
        ]
      },
    ]
  });
};
