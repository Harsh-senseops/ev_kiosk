const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ROLES', {
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    role_name: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ROLES',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_ROLES",
        unique: true,
        fields: [
          { name: "role_id" },
        ]
      },
    ]
  });
};
