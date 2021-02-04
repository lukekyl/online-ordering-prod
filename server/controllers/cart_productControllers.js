const model = require('../models');

exports.newCart_product = (req, res, next) =>{
    let cart_id = req.body.cart_id;
    let product_id = req.body.product_id;

    model.Cart_product.create({
        cart_id: cart_id,
        product_id: product_id,
    }).then (result=>{
        res.status(200).send(result);
    }).catch(error=>{
        req.status(500).send("An error occured");
    });
}

exports.getCart_products = (req, res, next) => {
    model.Cart_product.findAll().then (cart_products => {
        res.status(200).json(cart_products);
    }).catch(error=>{
        console.log(error)
        req.status(500).send(error)
    })
}

exports.getCart_product = (req, res, next) => {
    const { id } = req.params;
    model.Cart_product.findOne({
        where: { id: Number(id) }
    }).then(result=>{
        res.status(200).send(result);
    }).catch(error=>{
        console.log(error)
        req.status(500).send(error)
    })
}