<template>
  <div>
    <header>
      <h1>Library Manage</h1>
    </header>
    <div class="container">
      <aside class="sidebar">
        <h2>Menu</h2>
        <ul>
          <li><a href="#">Início</a></li>
          <li><a href="#">Livros Disponíveis</a></li>
          <li><a href="#">Avaliações</a></li>
          <li><a href="#">Autores</a></li>
          <li><a href="#">Sobre Nós</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </aside>
      <main>
        <section class="book-list">
          <h2>Catálogo</h2>
          <div class="books">
            <div class="book" v-for="book in books" :key="book.id">
              <img :src="book.image" :alt="book.title" />
              <h3>{{ book.title }}</h3>
              <p>Autor: {{ book.author }}</p>
              <p>{{ book.description }}</p>
              <div class="rating">
                <label>Avalie este livro:</label>
                <input type="number" min="1" max="5" placeholder="1-5" />
              </div>
              <textarea placeholder="Deixe seu comentário..."></textarea>
              <button>Enviar Comentário</button>
            </div>
          </div>
        </section>
      </main>
    </div>
    <footer>
      <p>&copy; 2024 Biblioteca Virtual. Todos os direitos reservados.</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      books: [
        {
          id: 1,
          title: 'Café com Deus Pai',
          author: 'Júnior Rostirola',
          description: 'Descrição breve sobre o livro.',
          image: '../img/café_com_Deus_Pai.png',
        },
        {
          id: 2,
          title: 'A Mente Moralista',
          author: 'Jonathan Haidt',
          description: 'Descrição breve sobre o livro.',
          image: '../img/a_mente_moralista.png',
        },
        {
          id: 3,
          title: 'O Pequeno Príncipe',
          author: 'Antoine de Saint-Exupéry',
          description: 'Descrição breve sobre o livro.',
          image: '../img/o_pequeno_principe.png',
        },
        {
          id: 4,
          title: 'Os Segredos da Mente Milionária',
          author: 'T. Harv Eker',
          description: 'Descrição breve sobre o livro.',
          image: '../img/os_segredos_da_mente_milionaria.png',
        },
        {
          id: 5,
          title: 'Hábitos Atômicos',
          author: 'James Clear',
          description: 'Descrição breve sobre o livro.',
          image: '../img/habitos_atomicos.png',
        },
        {
          id: 6,
          title: 'O Homem mais Rico da Babilônia',
          author: 'George S. Clason',
          description: 'Descrição breve sobre o livro.',
          image: '../img/o_homem_mais_rico_da_babilonia.png',
        },
        {
          id: 7,
          title: 'O Poder do Hábito',
          author: 'George S. Clason',
          description: 'Descrição breve sobre o livro.',
          image: '../img/o_poder_do_habito.png',
        },
      ],
    };
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  background: #0982c9;
  color: #fff;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.container {
  display: flex; /* Flexbox para o layout */
  flex: 1;
}

.sidebar {
  width: 250px; /* Largura da barra lateral */
  background: #54cfcf;
  color: #fff;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}

.sidebar h2 {
  margin: 0;
  padding: 0;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar ul li {
  margin: 10px 0;
}

.sidebar ul li a {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;
}

.sidebar ul li a:hover {
  color: #ffcc00; /* Cor de destaque ao passar o mouse */
}

main {
  flex: 1; /* Faz o main ocupar o espaço restante */
  padding: 20px;
}

.book-list {
  display: flex;
  flex-direction: column;
}

.books {
  display: flex;
  flex-wrap: wrap; /* Permite que os livros se ajustem na linha */
  gap: 20px; /* Espaçamento entre os livros */
  justify-content: flex-start; /* Alinha os livros à esquerda */
}

.book {
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 15px;
  width: 300px; /* Largura fixa para cada livro */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s; /* Efeito de transformação suave */
}

.book:hover {
  transform: scale(1.05); /* Efeito de zoom ao passar o mouse */
}

.book img {
  max-width: 100%;
  border-radius: 8px;
}

.rating {
  margin: 10px 0;
}

textarea {
  width: 100%;
  height: 60px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px; /* Adiciona preenchimento para melhor usabilidade */
}

button {
  background: #28a745;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s; /* Transição suave para mudanças de cor */
}

button:hover {
  background: #218838;
}

footer {
  text-align: center;
  padding: 10px;
  background: #567a88;
  color: #fff;
  margin-top: auto; /* Faz o rodapé ficar fixo na parte inferior */
}
</style>
