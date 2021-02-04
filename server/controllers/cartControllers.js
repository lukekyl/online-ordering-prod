const model = require('../models');

exports.newCart = (req, res, next) =>{
    model.Cart.create({
    }).then (result=>{
        res.status(200).send(result);
    }).catch(error=>{
        req.status(500).send("An error occured");
    });
}

exports.getCarts = (req, res, next) => {
    model.Cart.findAll().then (carts => {
        res.status(200).json({carts});
    }).catch(error=>{
        console.log(error)
        req.status(500).send(error)
    })
}

exports.getCart = (req, res, next) => {
    const { id } = req.params;
    model.Cart.findOne({
        where: { id: Number(id) }
    }).then(result=>{
        res.status(200).send(result);
    }).catch(error=>{
        console.log(error)
        req.status(500).send(error)
    })
}