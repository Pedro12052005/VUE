require('dotenv').config() // Carrega as variáveis do arquivo .env
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');

const app = express();
app.use(cors());
app.use(express.json());

const authRoutes = require('./routes/authRoutes');

// Conexão com o MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB conectado'))
.catch(err => console.error('Erro ao conectar no MongoDB', err));

// Importação das rotas
const bookRoutes = require('./routes/books');
app.use('/api/books', bookRoutes);
app.use('/api/auth', authRoutes);
app.use('/upload', express.static('upload'));

// Define a porta do servidor
app.listen(5000, () => {
    console.log('Servidor executando na porta 5000');
});
