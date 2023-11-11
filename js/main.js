// бургер

$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menuburg').toggleClass('active');
    });
});


// спойлер



$(document).ready(function() {
    $('.question__box-button').click(function(event) {
        // Удаляем класс active у всех кнопок
        $('.question__box-button').removeClass('active');

        // Добавляем/удаляем класс active для текущей кнопки
        $(this).toggleClass('active');

        // Скрываем все блоки текста
        $('.question__box-text').slideUp(300);

        // Показываем блок текста для текущей кнопки, если она имеет класс active
        if ($(this).hasClass('active')) {
            $(this).closest('.question__box-title').next('.question__box-text').slideDown(300);
        }
    });
});

// $(document).ready(function() {
//     $('.question__box-button').click(function(event) {
//         $(this).toggleClass('active').closest('.question__box-title').next('.question__box-text').slideToggle(300);
//     });
// });

//анимация появления 

document.addEventListener("scroll", function() {
    const elementsFadeIn = document.querySelectorAll(".fade-in");
    const elementsFadeInR = document.querySelectorAll(".fade-in-r");
    const elementsFadeInL = document.querySelectorAll(".fade-in-l");
    
    function handleScrollAnimation(elements, className) {
        elements.forEach(function(element) {
            if (element.getBoundingClientRect().top < window.innerHeight) {
                element.classList.add(className);
            }
        });
    }
    
    handleScrollAnimation(elementsFadeIn, "show");
    handleScrollAnimation(elementsFadeInR, "show-x");
    handleScrollAnimation(elementsFadeInL, "show-x");
});

