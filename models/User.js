module.exports = (sequelize, dataTypes) => {
  const model = sequelize.define("User", {
    code: dataTypes.STRING,
  },
  {
    tableName: 'users',
    timestamps: false
  })

  return model
}