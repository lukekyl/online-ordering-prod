'use strict';
const fake = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    let users = []
    for (let i=0;i<=10;i++) {

      users.push({
        name: fake.name.firstName(),
        username: fake.internet.userName(),
        email: fake.internet.email(),
        createdAt: new Date(),
        updatedAt: new Date()
      })
      // console.log(fake.name.firstName())
    }
    return queryInterface.bulkInsert('Users', users, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
