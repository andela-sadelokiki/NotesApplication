const path = require('path');
const Sequelize = require('sequelize');
const fs = require('fs');
const sequelize = new Sequelize('susan', '', '', {
  dialect: 'postgres',
  port: 5432
})

const db = {}

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });


db.note.belongsToMany(db.tag, {through: 'notetag'});
db.tag.belongsToMany(db.note, {through: 'notetag'});


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;