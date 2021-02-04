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

exports.getUsers = (req, res, next) => {
    model.User.findAll().then (users => {
        res.status(200).json({ users });
    }).catch(error=>{
        console.log(error)
        req.status(500).send(error)
    })
}

exports.getUser = (req, res, next) => {
    const { id } = req.params;
    model.User.findOne({
        where: { id: Number(id) }
    }).then(user=>{
        res.status(200).json({ user });
    }).catch(error=>{
        console.log(error)
        req.status(500).send(error)
    })
}