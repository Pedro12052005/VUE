const mongoose = require('mongoose');

// Definindo o esquema do livro
const BookSchema = new mongoose.Schema({
    title: { type: String, required: false},
    author: { type: String, required: false},
    year: { type: Number, required: false }, 
    image: { type: String, required: false}  
});

// Exportando o modelo
module.exports = mongoose.model('Book', BookSchema);