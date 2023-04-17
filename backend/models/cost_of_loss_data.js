const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cost_of_loss_data', {
    c_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    c_machine_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    loss_data: {
      type: DataTypes.DECIMAL(10,5),
      allowNull: false
    },
    c_shift: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    c_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    }
  }, {
    sequelize,
    tableName: 'cost_of_loss_data',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_cost_of_loss_data",
        unique: true,
        fields: [
          { name: "c_id" },
        ]
      },
    ]
  });
};
