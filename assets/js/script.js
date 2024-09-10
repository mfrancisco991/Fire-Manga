function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";
    }
}

var msgCookie = document.getElementById('cookie')

function aceito() {
  localStorage.lgpd = "sim"
  msgCookie.classList.remove('mostrar')
}

if(localStorage.lgpd == 'sim'){
  msgCookie.classList.remove('mostrar')
}else{
  msgCookie.classList.add('mostrar')
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
