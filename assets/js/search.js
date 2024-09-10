// search.js
function searchManga() {
    const searchTerm = document.getElementById('search-txt').value;
    window.location.href = 'resultados.html?search=' + encodeURIComponent(searchTerm);
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        searchManga();
    }
}