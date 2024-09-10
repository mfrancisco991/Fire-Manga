document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const sliderNav = document.querySelector('.slider-nav');
    const slides = document.querySelectorAll('.slide');
    let isDragging = false,
        startPos = 0,
        currentTranslate = 0,
        prevTranslate = 0,
        animationID,
        currentIndex = 0;

    function createSliderNavDots() {
        for (let i = 0; i < slides.length; i++) {
            let dot = document.createElement('div');
            dot.classList.add('slider-nav-dot');
            dot.addEventListener('click', () => {
                moveToSlide(i);
            });
            sliderNav.appendChild(dot);
        }
        updateNavDots();
    }

    function moveToSlide(index) {
        currentIndex = index;
        setPositionByIndex();
        updateNavDots();
        resetInterval(); // Reinicia o intervalo quando o slide é movido manualmente
    }

    function updateNavDots() {
        let dots = document.querySelectorAll('.slider-nav-dot');
        dots.forEach((dot, index) => {
            dot.classList.remove('active');
            if (index === currentIndex) {
                dot.classList.add('active');
            }
        });
    }

    function startDrag(e) {
        if (isMobile()) return; // Evita arrastar em dispositivos móveis
        isDragging = true;
        startPos = e.clientX;
        animationID = requestAnimationFrame(animation);
        slider.classList.add('grabbing');
    }

    function endDrag() {
        if (isMobile()) return;
        isDragging = false;
        cancelAnimationFrame(animationID);
        const movedBy = currentTranslate - prevTranslate;
        if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex++;
        if (movedBy > 100 && currentIndex > 0) currentIndex--;
        setPositionByIndex();
        updateNavDots();
        slider.classList.remove('grabbing');
        resetInterval(); // Reinicia o intervalo quando o arraste termina
    }

    function drag(e) {
        if (isMobile() || !isDragging) return;
        const currentPosition = e.clientX;
        currentTranslate = prevTranslate + currentPosition - startPos;
    }

    function animation() {
        if (isMobile() || !isDragging) return;
        setSliderPosition();
        requestAnimationFrame(animation);
    }

    function setSliderPosition() {
        slider.style.transform = `translateX(${currentTranslate}px)`;
    }

    function setPositionByIndex() {
        const sliderWidth = slider.clientWidth;
        currentTranslate = currentIndex * -sliderWidth;
        prevTranslate = currentTranslate;
        setSliderPosition();
    }

    function isMobile() {
        return window.innerWidth <= 768; // Altere este valor conforme necessário
    }

    function initSlider() {
        createSliderNavDots();
        slider.addEventListener('mousedown', startDrag);
        window.addEventListener('mouseup', endDrag);
        window.addEventListener('mousemove', drag);

        // Adicione o setInterval para a rolagem automática
        resetInterval();
    }

    function resetInterval() {
        clearInterval(intervalID); // Limpa o intervalo atual
        intervalID = setInterval(() => {
            if (currentIndex < slides.length - 1) currentIndex++;
            else currentIndex = 0;
            setPositionByIndex();
            updateNavDots();
        }, 5000);
    }

    let intervalID; // Variável para armazenar o ID do intervalo

    initSlider();

    // Adicione esta linha para ajustar o slider quando a janela for redimensionada
    window.addEventListener('resize', setPositionByIndex);
});
