const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Signup route
router.post('/signup', (req, res) => {
    const { name, email, username, password } = req.body;

    const user = new User({ name, email, username, password });
    user.save((err, user) => {
        if (err) {
            res.status(400).send({ message: 'Error creating user' });
        } else {
            res.send({ message: 'User created successfully' });
        }
    });
});

// Login route
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    User.findOne({ username }, (err, user) => {
        if (err || !user) {
            res.status(401).send({ message: 'Invalid username or password' });
        } else {
            if (user.password === password) {
                res.send({ message: 'Login successful' });
            } else {
                res.status(401).send({ message: 'Invalid username or password' });
            }
        }
    });
});

module.exports = router;