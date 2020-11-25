'use strict';
const fake = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let users = []
    for (let i=0;i<10;i++) {
      users.push({
        name: fake.name.firstName(),
        username: fake.internet.userName(),
        email: fake.internet.email(),
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }
    await queryInterface.bulkInsert('Users', users, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
