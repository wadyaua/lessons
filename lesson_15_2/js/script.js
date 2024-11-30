let documentActions = (e) => {
    const targetElement = e.target;

    if (targetElement.closest('.menu-icon__button')) {
        document.documentElement.classList.toggle('open-menu');

        // Заборона прокрутки
        if (document.documentElement.classList.contains('open-menu')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
};

document.addEventListener('click', documentActions);


// Знайти елемент header
const header = document.querySelector('.header');

// Додати стиль для розмиття
header.style.backdropFilter = 'blur(5px)';