document.addEventListener('DOMContentLoaded', () => {
    const chapterSelector = document.getElementById('chapter-selector');
    const goToChapterButton = document.getElementById('go-to-chapter');

    goToChapterButton.addEventListener('click', () => {
        const selectedChapter = chapterSelector.value;
        window.location.href = `pagina.html?chapter=${selectedChapter}`;
    });
});