// const { Sequelize } = require('.');
  
module.exports = (sequelize, Sequelize) => {
    var SequelizeTest = sequelize.define('sequelizetest', {
        firstName: {
          type: Sequelize.STRING
        },
        lastName: {
          type: Sequelize.STRING
        }
      });
    return SequelizeTest;
}