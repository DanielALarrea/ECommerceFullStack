// const Sequelize = require('sequelize');
// const sequelize = new Sequelize('ecommercefullstack', 'root', 'root', {
//     host: 'localhost',
//     dialect: 'mysql'
// });
var db = require('./models'),
    sequelize = db.sequelize,
    Sequelize = db.Sequelize;

var testController = require('./controllers/test.controller');

// sequelize
//   .authenticate()
//   .then(function(err) {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(function (err) {
//     console.log('Unable to connect to the database:', err);
//   });

var SequelizeTest = db.sequelizetest;

//   var SequelizeTest = sequelize.define('sequelizetest', {
//     firstName: {
//       type: Sequelize.STRING
//     },
//     lastName: {
//       type: Sequelize.STRING
//     }
//   });
  
  // force: true will drop the table if it already exists
  // SequelizeTest.sync({force: true}).then(function () {
  //   // Table created
  //   return SequelizeTest.create({
  //     firstName: 'John',
  //     lastName: 'Hancock'
  //   });
  // });

  // SequelizeTest.findAll().then(function(sequelizetests) {
  //   console.log(sequelizetests);
  // });

// module.exports = sequelize;