const model = require('../models');

exports.newProduct = (req, res, next) =>{
    let name = req.body.name;
    let category = req.body.category;
    let description = req.body.description;
    let price = req.body.price;
    let image_url = req.body.image_url;

    model.Product.create({
        name: name,
        category: category,
        description: description,
        price: price,
        image_url: image_url,
    }).then (result=>{
        res.status(200).send(result);
    }).catch(error=>{
        req.status(500).send("An error occured");
    });
}

exports.getProducts = (req, res, next) => {
    model.Product.findAll().then (result => {
        res.status(200).send(result);
    }).catch(error=>{
        console.log(error)
        req.status(500).send(error)
    })
}

exports.getProduct = (req, res, next) => {
    const { id } = req.params;
    model.Product.findOne({
        where: { id: Number(id) }
    }).then(result=>{
        res.status(200).send(result);
    }).catch(error=>{
        console.log(error)
        req.status(500).send(error)
    })
}