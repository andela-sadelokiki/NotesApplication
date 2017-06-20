module.exports = function(sequelize, Datatypes) {
  var Tag = sequelize.define('tag', {
    name: {
      type: Datatypes.STRING,
      allowNull: true,
      unique: true
    }
  })
  return Tag;
}