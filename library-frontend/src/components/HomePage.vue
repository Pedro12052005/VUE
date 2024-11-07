<template>
   <header>
      <h1>Library Mange</h1>
    </header>
    <div class="container">
      <aside class="sidebar">
        <h2>Menu</h2>
        <ul>
          <li><a href="HomePage">Início</a></li>
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
            <div class="book">
              <img src="../../frontend-main/img/café_com_Deus_Pai.png" alt="Café com Deus Pai" />
              <h3>Café com Deus Pai</h3>
              <p>Autor: Júnior Rostirola</p>
              <p>Descrição breve sobre o livro.</p>
              <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#FFD43B" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg> -->
            </div>
            <div class="book">
              <img src="../../frontend-main/img/a_mente_moralista.png" alt="A Mente Moralista" />
              <h3>A Mente Moralista</h3>
              <p>Autor: Jonathan Haidt</p>
              <p>Descrição breve sobre o livro.</p>
              <div class="rating">
                <h3>Avalie este livro:</h3>
              </div>
              <button>Enviar Comentário</button>
            </div>
            <div class="book">
              <img
                src="../../frontend-main/img/o_pequeno_principe.png"
                alt="O Pequeno Príncipe"
              />
              <h3>O Pequeno Príncipe</h3>
              <p>Autor: Antoine de Saint-Exupéry</p>
              <p>Descrição breve sobre o livro.</p>
              <div class="rating">
                <h3>Avalie este livro:</h3>
              </div>
              <button>Enviar Comentário</button>
            </div>
            <div class="book">
              <img
                src="../../frontend-main/img/os_segredos_da_mente_milionaria.png"
                alt="Os Segredos da Mente Milionária"
              />
              <h3>Os Segredos da Mente Milionária</h3>
              <p>Autor: T. Harv Eker</p>
              <p>Descrição breve sobre o livro.</p>
              <div class="rating">
                <h3>Avalie este livro:</h3>
              </div>
              <button>Enviar Comentário</button>
            </div>
            <div class="book">
              <img src="../../frontend-main/img/habitos_atomicos.png" alt="Hábitos Atômicos" />
              <h3>Hábitos Atômicos</h3>
              <p>Autor: James Clear</p>
              <p>Descrição breve sobre o livro.</p>
              <div class="rating">
                <h3>Avalie este livro:</h3>
              </div>
              <button>Enviar Comentário</button>
            </div>
            <div class="book">
              <img
                src="../../frontend-main/img/o_homem_mais_rico_da_babilonia.png"
                alt="O Homem mais Rico da Babilônia"
              />
              <h3>O Homem mais Rico da Babilônia</h3>
              <p>Autor: George S. Clason</p>
              <p>Descrição breve sobre o livro.</p>
              <div class="rating">
                <h3>Avalie este livro:</h3>
              </div>
              <button>Enviar Comentário</button>
            </div>
            <div class="book">
              <img src="../../frontend-main/img/o_poder_do_habito.png" alt="O Poder do Hábito" />
              <h3>O</h3>
              <p>Autor: George S. Clason</p>
              <p>Descrição breve sobre o livro.</p>
              <div class="rating">
                <h3>Avalie este livro:</h3>
              </div>
              <button>Enviar Comentário</button>
            </div>
          </div>
        </section>
      </main>
    </div>
    <footer>
      <p>&copy; 2024 Biblioteca Virtual. Todos os direitos reservados.</p>
    </footer>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style>
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
.estrela{
    width: 20px;
    color: yellow;
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

input {
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
