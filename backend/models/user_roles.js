const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_roles', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.STRING(20),
      allowNull: false,
      references: {
        model: 'users',
        key: 'user_id'
      }
    },
    user_roles_role: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'roles',
        key: 'role_id'
      }
    },
    user_machine_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'machine',
        key: 'machine_id'
      }
    }
  }, {
    sequelize,
    tableName: 'user_roles',
    schema: 'dbo',
    timestamps: false
  });
};
