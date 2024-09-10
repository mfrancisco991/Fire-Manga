/*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});

/*=============== CONFIGURAÇÃO DO MENU ROLAGEM COM TRANSPARENCIA ===============*/
let ultimaPosicaoScroll = window.pageYOffset || document.documentElement.scrollTop;

document.addEventListener("scroll", function() {
    const menu = document.getElementById("menu");
    const posicaoAtualScroll = window.pageYOffset || document.documentElement.scrollTop;
    const alturaPagina = document.documentElement.scrollHeight;
    const triggerHeight25 = alturaPagina * 0.25; // 25% da altura total da página
    const triggerHeight5 = alturaPagina * 0.05; // 5% da altura total da página

    // Verifica se está rolando para baixo E passou dos 25%
    if (posicaoAtualScroll > ultimaPosicaoScroll && posicaoAtualScroll > triggerHeight25) {
        menu.style.display = "none";
    } else if (posicaoAtualScroll < ultimaPosicaoScroll || posicaoAtualScroll <= triggerHeight25) {
        menu.style.display = "block";
    }

    // Torna o menu meio transparente ao rolar 5%
    if (posicaoAtualScroll > triggerHeight5) {
        menu.style.opacity = "0.9";
    } else {
        menu.style.opacity = "1";
    }

    // Adiciona uma transição para suavizar as mudanças de opacidade e display
    menu.style.transition = "opacity 0.3s ease-in-out, display 0.3s ease-in-out";

    // Atualiza a última posição de rolagem
    ultimaPosicaoScroll = posicaoAtualScroll;
});

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  const searchButton = document.getElementById('searchButton');

  searchInput.addEventListener('input', () => {
      const searchText = searchInput.value.trim();
      if (searchText.length > 3) { // Verifica se há pelo menos 3 caracteres digitados
          searchResults.innerHTML = ''; // Limpa os resultados anteriores
          // Simula uma busca assíncrona após 300ms para evitar muitas requisições
          setTimeout(() => {
              const results = search(searchText); // Função de busca
              displayResults(results); // Exibe os resultados
          }, 300);
      } else {
          searchResults.innerHTML = ''; // Limpa os resultados se houver menos de 3 caracteres
      }
  });

  searchButton.addEventListener('click', () => {
      const searchText = searchInput.value.trim();
      if (searchText.length > 3) {
          // Redireciona para a página de resultados ou executa outra ação
          // window.location.href = `search-results.html?query=${searchText}`;
      }
  });

  // Função de pesquisa simulada
  function search(query) {
      // Aqui você pode implementar a lógica de busca no seu sistema de arquivos
      // Por exemplo, percorrer as pastas e arquivos dentro da pasta "Obras"
      // e procurar por correspondências com o texto da consulta
      // Retorne uma lista de resultados correspondentes
      return [
          'Manhwa/Infinite Mage',
          'Manga/One Piece',
          'Light Novel/Sword Art Online',
          'Manhua/Feng Shen Ji',
          // Outros resultados
      ];
  }

  // Função para exibir os resultados
  function displayResults(results) {
      results.forEach(result => {
          const li = document.createElement('li');
          li.textContent = result;
          searchResults.appendChild(li);
      });
  }
});