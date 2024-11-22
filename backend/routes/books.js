const express = require('express'); // Importamos o Express
const Book = require('../models/Book'); // Importamos o modelo Book
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const router = express.Router(); // Criamos o roteador

// Configuração do caminho para upload das imagens
const uploadDir = path.join(__dirname, 'upload');

// Verifique se a pasta de upload existe e, caso contrário, crie-a
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// Configuração do multer para upload de arquivos
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, uploadDir); // Define a pasta de destino para o upload
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Define o nome do arquivo
    }
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 10 * 1024 * 1024 // Limite de 10MB para o arquivo
    },
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png|gif/;
        const mimetype = filetypes.test(file.mimetype);

        if (mimetype) {
            return cb(null, true); // Permite o upload se for uma imagem válida
        } else {
            return cb(new Error('Somente imagens são permitidas'), false); // Erro se não for imagem
        }
    }
});

// *** CRIAÇÃO (POST) ***
router.post('/', upload.single('image'), async (req, res) => {
    try {
        // Verifique se o arquivo foi enviado
        if (!req.file) {
            return res.status(400).json({ message: 'Nenhuma imagem foi enviada' });
        }

        // Extraímos os dados da requisição
        const { title, author, year } = req.body;
        const image = req.file.path; // O caminho do arquivo

        // Criamos e salvamos o novo livro
        const newBook = new Book({
            title,
            author,
            year,
            image
        });

        await newBook.save();

        // Log para verificar os dados
        console.log(req.body); // Verifique os campos do corpo da requisição
        console.log(req.file);  // Verifique os detalhes do arquivo enviado

        // Resposta de sucesso
        res.status(201).json({ message: 'Livro cadastrado com sucesso' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Erro ao cadastrar o livro', error });
    }
});

// *** LEITURA (GET) ***
router.get('/', async (req, res) => {
    try {
        const books = await Book.find(); // Buscamos todos os livros
        res.status(200).json(books); // Retornamos a lista de livros
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar livros', error });
    }
});

// *** ATUALIZAÇÃO (PUT) ***
router.put('/:id', async (req, res) => {
    const { title, author, year } = req.body; // Extraímos os novos dados
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, { title, author, year }, { new: true }); // Atualizamos o livro pelo ID
        res.status(200).json(updatedBook); // Retornamos o livro atualizado
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar livro', error });
    }
});

// *** EXCLUSÃO (DELETE) ***
router.delete('/:id', async (req, res) => {
    try {
        await Book.findByIdAndDelete(req.params.id); // Deletamos o livro pelo ID
        res.status(200).json({ message: 'Livro deletado com sucesso' }); // Retornamos mensagem de sucesso
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar livro', error });
    }
});

// Exportamos o roteador para ser usado no server.js
module.exports = router;
