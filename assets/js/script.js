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
function searchShow() {
    let searchMenu = document.querySelector('.search-menu');
    if (searchMenu.classList.contains('abrir')) {
        searchMenu.classList.remove('abrir');
        document.querySelector('.icone').src = "assets/img/search1.svg";
    } else {
        searchMenu.classList.add('abrir');
        document.querySelector('.icone').src = "assets/img/searchx.svg";
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