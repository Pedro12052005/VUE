<template>
    <div class="book-list-container">
        <!-- Lista de Livros -->
         <ul class="book-list">
            <li v-for="book in books" :key="book_id" class="book-item">
                <span>{{ book.title }} - {{ book.author }} ({{ book.year }})</span>
                <button @click="editBook(book)" class="edit-button">Editar</button>
                <button @click="deleteBook(book._id)" class="delete-button"></button>
            </li> <!--itera-->
         </ul>
    </div>
</template>