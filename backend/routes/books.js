const express = require('express'); // Importamos o Express
const Book = require('../models/Book'); // Importamos o modelo Book
const router = express.Router(); // Criamos o roteador
const multer = require('multer');


// configuração do caminho para upload das imagens
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'upload/');
    },
    filename:function(req,file,cb){
        cb(null,Date.now() + '-' + file.originalname);
    }
});

const upload = multer({storage: storage,
    });
//const upload = multer({ dest: 'uploads/' }).single('file');
//const upload = multer({ dest: 'uploads/' }).fields([{ name: 'image', maxCount: 1 }]);

router.post('/',upload.single('image'),async(req,res)=>{
    try{
        const {title, author, year,} = req.body;
        const image = req.file.path;
        const newBook = new Book({
            title,
            author,
            year,
            image
        });
        await newBook.save();
        console.log(req.body); // Check the body fields
        console.log(req.files); // Check the uploaded files
        res.status(201).json({message: 'Livro cadastrado com sucesso',});
        }catch(error){
            console.log(error);
            
      res.status(500).json({message: 'Erro ao cadastrar o livro',error})
    }
});

// *** CRIAÇÃO (POST) ***
// router.post('/', async (req, res) => {
//     const { title, author, year } = req.body; // Extraímos os dados da requisição
//     try {
//         const newBook = new Book({ title, author, year }); // Criamos e salvamos o livro
//         await newBook.save();
//         res.status(201).json(newBook); // Retornamos o livro criado
//     } catch (error) {
//         res.status(500).json({ message: 'Erro ao criar livro', error }); // Retornamos o erro
//     }
// });

// *** LEITURA (GET) ***
router.get('/', async (req, res) => {
    try {
        const books = await Book.find(); // Buscamos todos os livros
        res.status(200).json(books); // Retornamos a lista de livros
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar livros', error }) // Retornamos erro, se houver
    }
});

// *** ATUALIZAÇÃO (PUT) ***
router.put('/:id', async (req, res) => {
    const { title, author, year } = req.body; // Extraímos os novos dados
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, { title, author, year }, { new: true }); // Atualizamos o livro pelo ID
        res.status(200).json(updatedBook); // Retornamos o livro atualizado 
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar livro', error }); // Retornamos erro, se houver
    }
});

// *** EXCLUSÃO (DELETE) ***
router.delete('/:id', async (req, res) => {
    try {
        await Book.findByIdAndDelete(req.params.id); // Deletamos o livro pelo ID
        res.status(200).json({ message: 'Livro deletado com sucesso' }); // Retornamos mensagem de sucesso
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar livro', error }); // Retornamos erro, se houver
    }
});

// Exportamos o roteador para ser usado no serve.js
module.exports = router;