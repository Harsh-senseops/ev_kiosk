const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Machine', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Machines: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Machine',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Machine",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
