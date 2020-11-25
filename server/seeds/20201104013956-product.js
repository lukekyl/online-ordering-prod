'use strict';
const fake = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {

    let products = []
    let categories = {
      0: 'Starters',
      1: 'Entrees',
      2: 'Deserts',
    }
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    for(let i=0; i<=10;i++){
      products.push({
        name: fake.lorem.words(),
        category: categories[getRandomInt(3)],
        description: fake.lorem.sentence(),
        price: fake.commerce.price(),
        image_url: fake.image.food(),
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }
    return queryInterface.bulkInsert('Products', products, {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
