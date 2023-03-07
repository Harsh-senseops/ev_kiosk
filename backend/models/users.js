const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('USERS', {
    user_Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
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
    },
    user_role: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ROLES',
        key: 'role_id'
      }
    }
  }, {
    sequelize,
    tableName: 'USERS',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_USERS",
        unique: true,
        fields: [
          { name: "user_Id" },
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
