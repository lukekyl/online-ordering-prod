'use strict';
const fake = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    

    let products = await queryInterface.sequelize.query(
        `SELECT id from Products;`
      );
      console.log(products)
    let carts = await queryInterface.sequelize.query(
        `SELECT id from Carts;`
      );
      console.log(carts)
    let cart_products = []
    for(let i=0; i<10;i++){
      cart_products.push({
        product_id:fake.random.arrayElement(products[0]).id,
        cart_id: fake.random.arrayElement(carts[0]).id,
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }
    await queryInterface.bulkInsert('Cart_products', cart_products, {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Cart_products', null, {});
  }
};
