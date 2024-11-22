const express = require('express');
const bcrypt = require('bcryptjs'); // Usado para hash da senha
const jwt = require('jsonwebtoken'); // Usado para criar tokens JWT
const User = require('../models/User'); // Modelo do usuário

const router = express.Router();

// POST /users
router.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Verifique se ambos os campos foram enviados
        if (!username || !password) {
            return res.status(400).json({ message: 'Nome de usuário e senha são obrigatórios' });
        }

        // Log para verificar os dados recebidos
        console.log('Dados recebidos:', { username, password });

        // Verifique se o nome de usuário já está registrado
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Nome de usuário já registrado' });
        }

        // Hash da senha
        const hashedPassword = await bcrypt.hash(password, 10); // Garantindo que password esteja definido

        // Criação do usuário
        const newUser = new User({
            username,
            password: hashedPassword,
        });

        await newUser.save();

        res.status(201).json({ message: 'Usuário registrado com sucesso' });
    } catch (error) {
        console.error('Erro ao registrar usuário:', error);  // Log do erro no console
        res.status(500).json({ message: 'Erro ao registrar usuário', error: error.message || error });
    }
});


// *** LOGIN (POST) ***
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Encontrar usuário pelo nome de usuário
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: 'Usuário não encontrado' });
        }

        // Verifique a senha
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Senha incorreta' });
        }

        // Criar o token JWT
        const token = jwt.sign({ userId: user._id }, 'secrettoken', { expiresIn: '1h' });

        res.status(200).json({ message: 'Login bem-sucedido', token });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao fazer login', error });
    }
});

// *** OBTENÇÃO DE USUÁRIOS (GET) ***

// Obter todos os usuários
router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar usuários', error });
    }
});

// Obter um usuário específico pelo ID
router.get('/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar usuário', error });
    }
});

// *** ATUALIZAÇÃO DE USUÁRIO (PUT) *** - /api/auth
router.put('/users/:id', async (req, res) => {
    const { username, password } = req.body;
    try {
        const hashedPassword = password ? await bcrypt.hash(password, 10) : undefined;
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                username: username || undefined,
                password: hashedPassword || undefined,
            },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar usuário', error });
    }
});

// *** EXCLUSÃO DE USUÁRIO (DELETE) ***
router.delete('/users/:id', async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        res.status(200).json({ message: 'Usuário deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar usuário', error });
    }
});

module.exports = router;
