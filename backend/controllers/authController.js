const express = require('express');
const routes = express.Router();
const authController = require('../controllers/authController')

// Rota para registrar novos usuarios

router.post('/register',authController.register)

// rota para login

router.post('/login',authController.login);

module.exports = router;
//
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Route for registering new users
router.post('/register', authController.register);

// Route for logging in users
router.post('/login', authController.login);

module.exports = router;

const User = require('../models/Book'); // Adjust the path as necessary
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Function to register new users
exports.register = async (req, res) => {
    const { username, password } = req.body;
    try {
        // Check if user already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ error: 'Usuário já existe' });
        }

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: 'Usuário registrado com sucesso' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao registrar usuário' });
    }
};

// Function to log in users
exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find user by username
        const user = await User.findOne({ username });
        if (!user) return res.status(400).json({ error: 'Usuário não encontrado' });

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ error: 'Senha incorreta' });

        // Create JWT token
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao fazer login' });
    }
};
