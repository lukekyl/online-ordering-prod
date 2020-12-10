'use strict';
const fake = require('faker');
const model = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    

    let products = await model.Product.findAll({
      attributes: ['id']
    });
      console.log(products)
    let carts = await model.Cart.findAll({
      attributes: ['id']
    });

      console.log(carts)
    let cart_products = []
    for(let i=0; i<10;i++){
      cart_products.push({
        product_id:fake.random.arrayElement(products).id,
        cart_id: fake.random.arrayElement(carts).id,
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
