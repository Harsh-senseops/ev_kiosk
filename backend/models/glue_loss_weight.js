const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('glue_loss_weight', {
    m_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    g_machine_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    glue_loss: {
      type: DataTypes.DECIMAL(10,5),
      allowNull: false
    },
    g_shift: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    g_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    }
  }, {
    sequelize,
    tableName: 'glue_loss_weight',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_glue_loss_weight",
        unique: true,
        fields: [
          { name: "m_id" },
        ]
      },
    ]
  });
};
