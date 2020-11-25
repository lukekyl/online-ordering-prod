'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    let carts = []
    for(let i=0; i<=10;i++){
      carts.push({
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }

    return queryInterface.bulkInsert('Carts', carts, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Carts', null, {});
  }
};
