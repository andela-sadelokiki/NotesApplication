module.exports = function(sequelize, Datatypes) {
  var Note = sequelize.define('note', {
    title: {
      type: Datatypes.STRING,
      allowNull: true,
      unique: true
    },
    content: {
      type: Datatypes.STRING,
    }
  })
  return Note;
}