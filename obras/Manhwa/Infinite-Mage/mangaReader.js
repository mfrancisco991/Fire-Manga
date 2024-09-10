document.addEventListener('DOMContentLoaded', () => {
    // Resto do seu código...

    let currentChapter = 1;
    const mangaContainer = document.getElementById('manga-container');
    const nextChapterButton = document.getElementById('next-chapter');
    const previousChapterButton = document.getElementById('previous-chapter');
    const zoomInButton = document.getElementById('zoom-in');
    const zoomOutButton = document.getElementById('zoom-out');
    let currentZoom = 50; // Zoom inicial em porcentagem

    const chapterSelector = document.getElementById('chapter-selector');
    const goToChapterButton = document.getElementById('go-to-chapter');

    // Carrega o capítulo quando a página é carregada
    const urlParams = new URLSearchParams(window.location.search);
    const chapterFromURL = urlParams.get('chapter');
    if (chapterFromURL) {
        currentChapter = parseInt(chapterFromURL);
        loadChapter(currentChapter); // Carrega o capítulo baseado na URL
    } else {
        loadChapter(currentChapter); // Carrega o primeiro capítulo por padrão
    }

    function loadChapter(chapter) {
        mangaContainer.innerHTML = ''; // Limpa o conteúdo atual
        for (let i = 0; i <= 22; i++) { // Supondo 22 páginas por capítulo
            const img = document.createElement('img');
            img.src = `./capitulos/capitulo${chapter}/${i}.jpg`; // Caminho para as imagens
            mangaContainer.appendChild(img);
        }
        updateZoom(); // Atualiza o zoom para as novas imagens
    }

    function updateZoom() {
        const images = document.querySelectorAll('#manga-container img');
        images.forEach(img => {
            img.style.width = `${currentZoom}%`;
        });
    }

    function adjustZoom(factor) {
        currentZoom += factor;
        updateZoom();
    }

    zoomInButton.addEventListener('click', () => adjustZoom(10)); // Aumenta o zoom em 10%
    zoomOutButton.addEventListener('click', () => adjustZoom(-10)); // Diminui o zoom em 10%

    nextChapterButton.addEventListener('click', () => {
        if (currentChapter < 35) { // Supondo 35 capítulos no total
            currentChapter++;
            updateURL(currentChapter); // Atualiza a URL
            loadChapter(currentChapter);
        }
    });

    previousChapterButton.addEventListener('click', () => {
        if (currentChapter > 1) {
            currentChapter--;
            updateURL(currentChapter); // Atualiza a URL
            loadChapter(currentChapter);
        }
    });

    goToChapterButton.addEventListener('click', () => {
        const selectedChapter = chapterSelector.value;
        currentChapter = parseInt(selectedChapter);
        updateURL(currentChapter); // Atualiza a URL
        loadChapter(currentChapter);
    });

    // Inicializa com o primeiro capítulo
    loadChapter(currentChapter);
});

function updateURL(chapter) {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('chapter', chapter);
    window.history.replaceState({}, '', `${location.pathname}?${urlParams}`);
}

// CONFIGURAÇOES DO BOTÃO VOLTAR AO TOPO
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Adiciona um ouvinte de evento de rolar
window.addEventListener('scroll', () => {
    // Exibe ou oculta o botão dependendo da posição de rolagem
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

// Adiciona um ouvinte de evento de clique ao botão
scrollToTopBtn.addEventListener('click', () => {
    // Rola suavemente para o topo da página
    document.body.scrollTop = 0; // Para navegadores da web
    document.documentElement.scrollTop = 0; // Para navegadores modernos
});