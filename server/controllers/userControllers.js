const model = require('../models');

exports.newUser = (req, res, next) =>{
    let name = req.body.name;
    let email = req.body.email;
    let username = req.body.username;

    model.User.create({
        name: name,
        username: username,
        email:email
    }).then (result=>{
        res.status(200).send(result);
    }).catch(error=>{
        req.status(500).send("An error occured");
    });
}