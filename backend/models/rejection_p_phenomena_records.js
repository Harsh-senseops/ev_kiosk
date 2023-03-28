const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rejection_p_phenomena_records', {
    r_ppr_Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    r_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    },
    r_machine: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    r_p_phenomena: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    r_phenomena_no: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    r_action_taken: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    r_battery_pack_id: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'rejection_p_phenomena_records',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Table_12",
        unique: true,
        fields: [
          { name: "r_ppr_Id" },
        ]
      },
    ]
  });
};
