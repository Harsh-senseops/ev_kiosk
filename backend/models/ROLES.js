const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('roles', {
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
    tableName: 'roles',
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
