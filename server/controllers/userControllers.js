const model = require('../models');

exports.newUser = (req, res, next) =>{
    let name = req.body.name;
    let email = req.body.email;

    model.User.create({
        name: name,
        email:email
    }).then (result=>{
        res.status(200).send(result);
    }).catch(error=>{
        req.status(500).send("An error occured");
    });
}