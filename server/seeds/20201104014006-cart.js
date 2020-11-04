'use strict';

const { fake } = require("faker");

module.exports = {
  up: async (queryInterface, Sequelize) => {

    let carts = []
    for(let i=0; i<-10;i++){
      carts.push({
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }

    await queryInterface.bulkInsert('Carts', carts, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Carts', null, {});
  }
};
