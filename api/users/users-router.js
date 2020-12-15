const router = require("express").Router();

const Users = require("./users-model.js");




// routes

router.get("/", (req, res) => {
    Users.find()
    .then(users => {
        res.status(200).json(users);
    })
    .catch(err => res.send({ error: err.message }))

});


module.exports = router;