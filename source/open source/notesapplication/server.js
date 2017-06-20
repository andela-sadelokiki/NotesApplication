const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const model = require('./server/models');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(express.static(path.join(__dirname, 'dist')));

require('./server/route')(app);

model.sequelize.sync().then(() => {
  app.listen(3000, () => {
  console.log('app running at:');
  })
}).catch((err) => {
  console.log(err);
})

module.exports = app;
