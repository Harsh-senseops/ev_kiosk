const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('r_action_taken_schema', {
    r_action_taken_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    rp_action_taken_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'r_physical_phenomena',
        key: 'r_phenomena_no'
      }
    },
    r_action_taken: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'r_action_taken',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_rr_action_taken",
        unique: true,
        fields: [
          { name: "r_action_taken_id" },
        ]
      },
    ]
  });
};
