const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('p_phenomena', {
    p_machine_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'machine',
        key: 'machine_id'
      }
    },
    phenomena_no: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    phenomena_name: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'p_phenomena',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_tablepp",
        unique: true,
        fields: [
          { name: "phenomena_no" },
        ]
      },
    ]
  });
};
