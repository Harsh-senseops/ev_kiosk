const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    user_id: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    user_name: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: "unique_user_name"
    },
    user_password: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'users',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_users",
        unique: true,
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "unique_user_name",
        unique: true,
        fields: [
          { name: "user_name" },
        ]
      },
    ]
  });
};
