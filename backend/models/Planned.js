module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Planned', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Zone: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ZoneNames',
        key: 'ZoneId'
      }
    },
    Shift: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    ProductionCount: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Planned',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_ProductionCountDetails",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
