const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('action_taken', {
    action_taken_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    p_action_taken_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'p_phenomena',
        key: 'phenomena_no'
      }
    },
    action_taken: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'action_taken',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_action_taken",
        unique: true,
        fields: [
          { name: "action_taken_id" },
        ]
      },
    ]
  });
};
