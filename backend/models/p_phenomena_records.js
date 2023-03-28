const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('p_phenomena_records', {
    ppr_Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    },
    machine: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    p_phenomena: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    phenomena_no: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    action_taken: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    battery_pack_id: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'p_phenomena_records',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Table_11",
        unique: true,
        fields: [
          { name: "ppr_Id" },
        ]
      },
    ]
  });
};
