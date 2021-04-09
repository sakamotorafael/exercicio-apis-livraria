module.exports = (sequelize, dataTypes) => {
  const model = sequelize.define("Comments", {
    author: dataTypes.STRING,
    content: dataTypes.STRING,
    books_id: dataTypes.INTEGER,
    created_at: dataTypes.DATE,
  },
  {
    tableName: 'comments',
    timestamps: false
  })

  model.associate = (models) => {
    model.belongsTo(models.Books, {
      foreignKey: 'books_id',
      as: 'book'
    })
  }

  return model
}