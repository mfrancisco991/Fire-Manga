window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTerm = urlParams.get('search').toLowerCase();

    fetch('obras.json')
        .then(response => response.json())
        .then(data => {
            const filteredData = data.filter(obra => obra.nome.toLowerCase().includes(searchTerm));
            const resultsContainer = document.getElementById('resultados');

            if (filteredData.length === 0) {
                const noResultsMessage = document.createElement('p');
                noResultsMessage.textContent = 'Nenhum resultado encontrado para "' + searchTerm + '".';
                resultsContainer.appendChild(noResultsMessage);
            } else {
                filteredData.forEach(obra => {
                    const container = document.createElement('div');
                    container.className = "resultado-item"; // Classe CSS para estilização

                    const link = document.createElement('a');
                    link.href = obra.url;

                    const coverImage = document.createElement('img');
                    coverImage.src = obra.imagem;
                    coverImage.alt = obra.nome;
                    coverImage.className = "resultado-imagem"; // Classe CSS para estilização

                    const title = document.createElement('span');
                    title.textContent = obra.nome;
                    title.className = "resultado-titulo"; // Classe CSS para estilização

                    link.appendChild(coverImage);
                    link.appendChild(title);
                    container.appendChild(link);

                    resultsContainer.appendChild(container);
                });
            }
        })
        .catch(error => {
            console.error('Erro ao carregar dados:', error);
        });
};
