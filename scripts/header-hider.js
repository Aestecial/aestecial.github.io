let lastScrollTop = 0; // Начальная позиция прокрутки
const header = document.querySelector('.header'); // Элемент header
const scrollThreshold = 500; // Порог для скрытия header

window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Если прокрутка больше порога в 500px
    if (currentScroll >= scrollThreshold) {
        if (currentScroll > lastScrollTop) {
            // Прокрутка вниз, скрываем header
            header.style.top = "-100px";
        } else {
            // Прокрутка вверх, показываем header
            header.style.top = "0";
        }
    } else {
        // Если прокрутка меньше 500px, всегда показываем header
        header.style.top = "0";
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Чтобы не было отрицательных значений
}, false);