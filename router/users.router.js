//To create the routers
const router = require('express').Router();
//To use the functions to the routers
const users = require('../controller/users.controller');

// GET routers
router.get('/find/:id', users.find);
router.get('/findAll', users.findAll);

// POST router
router.post('/create', users.createUser);

// PUT router
router.put('/update/:id', users.updateUser);

// DELETE router
router.delete('/delete/:id', users.deleteUser);

module.exports = router;
