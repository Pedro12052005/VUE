<template>
    <div class="book-form">
      <h2>{{ formTitle }}</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="title">Título</label>  <!-- Substituímos o h3 por label -->
          <input type="text" id="title" v-model="book.title" />
        </div>

        <div class="form-group">
          <label for="author">Autor</label>  <!-- Substituímos o h3 por label -->
          <input type="text" id="author" v-model="book.author" />
        </div>

        <div class="form-group">
          <label for="year">Ano de Publicação</label>  <!-- Substituímos o h3 por label -->
          <input type="number" id="year" v-model="book.year" />
        </div>

        <div class="form-group">
          <label for="description">Descrição</label>  <!-- Substituímos o h3 por label -->
          <textarea id="description" v-model="book.description"></textarea>  <!-- Corrigido para textarea -->
        </div>

        <button type="submit">{{ isEditing ? 'Atualizar Livro' : 'Adicionar Livro' }}</button>
      </form>
    </div>
  </template>

<script>
export default {
  props: {
    bookData: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      book: {
        title: this.bookData.title || '',
        author: this.bookData.author || '',
        year: this.bookData.year || '',
        description: this.bookData.description || '',
      },
    };
  },
  computed: {
    isEditing() {
      return this.bookData && Object.keys(this.bookData).length > 0;
    },
    formTitle() {
      return this.isEditing ? 'Editar Livro' : 'Adicionar Novo Livro';
    },
  },
  methods: {
    submitForm() {
      if (this.isEditing) {
        this.$emit('update-book', this.book);
      } else {
        this.$emit('add-book', this.book);
      }
      this.resetForm();
    },
    resetForm() {
      this.book = {
        title: '',
        author: '',
        year: '',
        description: '',
      };
    },
  },
};
</script>

  <style scoped>
  .book-form {
    max-width: 500px;
    margin: 0 auto;
  }

  .form-group {
    margin-bottom: 1em;
  }

  input, input {
    width: 100%;
    padding: 0.5em;
    margin-top: 0.3em;
  }

  button {
    padding: 0.7em 1.5em;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
  }

  button:hover {
    background-color: #45a049;
  }
  </style>
