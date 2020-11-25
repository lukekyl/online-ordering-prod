'use strict';
const fake = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    let products = queryInterface.sequelize.query(
        `SELECT id from Products;`
      ); 
    let carts = queryInterface.sequelize.query(
        `SELECT id from Carts;`
      ); 

    let cart_products = []
    for(let i=0; i<=10;i++){
      cart_products.push({
        productId:fake.random.arrayElement(products[0]).id,
        cartId: fake.random.arrayElement(carts[0]).id,
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }
    return queryInterface.bulkInsert('Cart_products', posts, {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Cart_products', null, {});
  }
};
