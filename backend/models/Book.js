const mongoose = require('mongoose');

// Definindo o esquema do livro
const BookSchema = new mongoose.Schema({
    title: { type: String, required: true},
    author: { type: String, required: true},
    year: { type: Number }, 
    image: { type: String, required:false}
});

// Exportando o modelo
module.exports = mongoose.model('Book', BookSchema);