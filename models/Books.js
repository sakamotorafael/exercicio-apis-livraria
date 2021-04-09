const Sequelize = require('sequelize')

module.exports = (sequelize, dataTypes) => {
  const model = sequelize.define("Books", {
    name: dataTypes.STRING,
    cover: dataTypes.STRING,
    created_at: {
      type: dataTypes.DATE,
      defaultValue: Sequelize.NOW,
    }
  },
  {
    tableName: 'books',
    timestamps: false
  })

  model.associate = (models) => {
    model.hasMany(models.Comments, {
      foreignKey: 'books_id',
      as: 'comments'
    })
  }

  return model
}