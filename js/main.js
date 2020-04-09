let mobileNavBtnContainer = document.querySelector('.header__mobile-nav-btn-wrapper');
let mobileNavBtn = document.querySelector('.header__mobile-nav-btn');
let mobileHeader = document.querySelector('.header_main');

mobileNavBtnContainer.addEventListener('click', function () {
    if (mobileNavBtn.classList.contains('header__mobile-nav-btn_active')) {
        mobileHeader.classList.remove('header_main_active');
        mobileNavBtn.classList.remove('header__mobile-nav-btn_active');
    } else {
        mobileHeader.classList.add('header_main_active');
        mobileNavBtn.classList.add('header__mobile-nav-btn_active');
    }

})


let popupConsultation = document.querySelector('.popup-consultation-form');
let openPopupConsultationBtn = document.querySelector('.header_main .header__contact-list-request-link');
let openPopupConsultationBtn2 = document.querySelector('.header_scroll .header__contact-list-request-link');
let openPopupConsultationBtn3 = document.querySelector('.delivery__btn');
let openPopupConsultationBtn4 = document.querySelector('.advantages__btn');
let closePopupConsultationBtn = document.querySelector('.popup-consultation-form .popup-form__btn-close');


openPopupConsultationBtn.addEventListener('click', function () {
    popupConsultation.classList.add('popup-consultation-form_active');
})

openPopupConsultationBtn2.addEventListener('click', function () {
    popupConsultation.classList.add('popup-consultation-form_active');
})

openPopupConsultationBtn3.addEventListener('click', function () {
    popupConsultation.classList.add('popup-consultation-form_active');
})

openPopupConsultationBtn4.addEventListener('click', function () {
    popupConsultation.classList.add('popup-consultation-form_active');
})

closePopupConsultationBtn.addEventListener('click', function () {
    popupConsultation.classList.remove('popup-consultation-form_active');
})

popupConsultation.addEventListener('click', function (e) {
    if (e.target.classList.contains('popup-consultation-form')) {
        popupConsultation.classList.remove('popup-consultation-form_active');
    }
})



let popupCalculate = document.querySelector('.popup-calculate-form');
let openPopupCalculate = document.querySelector('.home__btn');
let closePopupCalculate = document.querySelector('.popup-calculate-form .popup-form__btn-close');

openPopupCalculate.addEventListener('click', function () {
    popupCalculate.classList.add('popup-calculate-form_active');
})

closePopupCalculate.addEventListener('click', function () {
    popupCalculate.classList.remove('popup-calculate-form_active');
})

popupCalculate.addEventListener('click', function (e) {
    if (e.target.classList.contains('popup-calculate-form')) {
        popupCalculate.classList.remove('popup-calculate-form_active');
    }
})



let popupQuestion = document.querySelector('.popup-question-form');
let openPopupQuestionBtn1 = document.querySelector('.faq__btn');
let openPopupQuestionBtn2 = document.querySelector('.faq__btn_second');
let openPopupQuestionBtn3 = document.querySelector('.footer__btn-question');
let closePopupQuestionBtn = document.querySelector('.popup-question-form .popup-form__btn-close');

openPopupQuestionBtn1.addEventListener('click', function () {
    popupQuestion.classList.add('popup-question-form_active');
})

openPopupQuestionBtn2.addEventListener('click', function () {
    popupQuestion.classList.add('popup-question-form_active');
})

openPopupQuestionBtn3.addEventListener('click', function () {
    popupQuestion.classList.add('popup-question-form_active');
})



closePopupQuestionBtn.addEventListener('click', function () {
    popupQuestion.classList.remove('popup-question-form_active');
})

popupQuestion.addEventListener('click', function (e) {
    if (e.target.classList.contains('popup-question-form')) {
        popupQuestion.classList.remove('popup-question-form_active');
    }
})




let popupCallMe = document.querySelector('.popup-call-me-form');
let openPopupCallMe = document.querySelector('.footer__btn-call');
let closePopupCallMe = document.querySelector('.popup-call-me-form .popup-form__btn-close');

openPopupCallMe.addEventListener('click', function () {
    popupCallMe.classList.add('popup-call-me-form_active');
})

closePopupCallMe.addEventListener('click', function () {
    popupCallMe.classList.remove('popup-call-me-form_active');
})

popupCallMe.addEventListener('click', function (e) {
    if (e.target.classList.contains('popup-call-me-form')) {
        popupCallMe.classList.remove('popup-call-me-form_active');
    }
})



let popupThanks = document.querySelector('.popup-thanks');
let closePopupThanks = document.querySelector('.popup-thanks .popup-form__btn-close');

closePopupThanks.addEventListener('click', function () {
    popupThanks.classList.remove('popup-thanks_active');
})

popupThanks.addEventListener('click', function (e) {
    if (e.target.classList.contains('popup-thanks')) {
        popupThanks.classList.remove('popup-thanks_active');
    }
})





let body = document.querySelector('body');
let mobileNav = document.querySelector('.header__navigation_main');
let bodyHummer = new Hammer(body);

bodyHummer.get('swipe').set({
    threshold: 150
});

bodyHummer.on('swipeleft', function () {
    mobileHeader.classList.add('header_main_active');
    mobileNavBtn.classList.add('header__mobile-nav-btn_active');
})

bodyHummer.on('swiperight', function () {
    mobileHeader.classList.remove('header_main_active');
    mobileNavBtn.classList.remove('header__mobile-nav-btn_active');
})


$('.flowing-scroll').on('click', function () {
    let el = $(this);
    let dest = el.attr('href'); // получаем направление
    if (dest !== undefined && dest !== '') { // проверяем существование
        $('.header_main').removeClass('header_main_active');
        $('.header__mobile-nav-btn').removeClass('header__mobile-nav-btn_active');
        $('html').animate({
                scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
            }, 500 // скорость прокрутки
        );
    }

    return false;
});

var fixedHeader = $('.header_scroll');

$(window).scroll(function () {
    if ($(window).scrollTop() > 80) {
        fixedHeader.addClass('header_scroll_active');
    } else {
        fixedHeader.removeClass('header_scroll_active');
    }
});

$('.faq__list').on('click', e => openFAQ(e));

function openFAQ(e) {
    if (e.target.classList.contains('faq__list-item_active')) {
        e.target.classList.remove('faq__list-item_active');
    } else if (e.target.classList.contains('faq__list-item')) {
        e.target.classList.add('faq__list-item_active');
    } else if (e.target.parentNode.classList.contains('faq__list-item_active')) {
        e.target.parentNode.classList.remove('faq__list-item_active');
    } else if (e.target.parentNode.classList.contains('faq__list-item')) {
        e.target.parentNode.classList.add('faq__list-item_active');
    }
}





let videosContainers = document.querySelectorAll('.reviews__video-item iframe');
shuffle(videos);

for (let i = 0; i < videosContainers.length; i++) {
    videosContainers[i].setAttribute('src', videos[i]);
}


let reviewsContainer = document.querySelector('.swiper-wrapper');
shuffle(reviews);

for (let i = 0; i < 8; i++) {
    let newSlide = document.createElement('div');
    newSlide.classList.add('swiper-slide');
    newSlide.innerHTML = `<div class="slide__img-container"><img src="${reviews[i].photoUrl}" alt=""></div>
    <div class="slide__content">
        <div class="slide__title">
             ${reviews[i].title}
        </div>
        <div class="slide__text">${reviews[i].text}</div>
    </div>`;

    reviewsContainer.appendChild(newSlide);
}




// Отправка данных на сервер
$('#consultation-form_main').trigger('reset');
$(function () {
    'use strict';
    $('#consultation-form_main').on('submit', function (e) {
        e.preventDefault();
        $.ajax({
            url: 'mail.php',
            type: 'POST',
            contentType: false,
            processData: false,
            data: new FormData(this),
            success: function (msg) {
                console.log(msg);
                if (msg == 'ok') {
                    $('.popup-thanks').addClass('popup-thanks_active');
                    $('#consultation-form_main').trigger('reset');
                    // очистка формы
                } else {
                    alert('Ошибка');
                }
                closePopUp();
            }
        });
    });
});

$('#calculate-form_main').trigger('reset');
$(function () {
    'use strict';
    $('#calculate-form_main').on('submit', function (e) {
        e.preventDefault();
        $.ajax({
            url: 'mail.php',
            type: 'POST',
            contentType: false,
            processData: false,
            data: new FormData(this),
            success: function (msg) {
                console.log(msg);
                if (msg == 'ok') {
                    $('.popup-thanks').addClass('popup-thanks_active');
                    $('#calculate-form_main').trigger('reset');
                    // очистка формы
                } else {
                    alert('Ошибка');
                }
                closePopUp();
            }
        });
    });
});

$('#consultation-form_popup').trigger('reset');
$(function () {
    'use strict';
    $('#consultation-form_popup').on('submit', function (e) {
        e.preventDefault();
        $.ajax({
            url: 'mail.php',
            type: 'POST',
            contentType: false,
            processData: false,
            data: new FormData(this),
            success: function (msg) {
                console.log(msg);
                if (msg == 'ok') {
                    $('.popup-consultation-form').removeClass('popup-consultation-form_active');
                    $('.popup-thanks').addClass('popup-thanks_active');
                    $('#consultation-form_popup').trigger('reset');
                    // очистка формы
                } else {
                    alert('Ошибка');
                }
                closePopUp();
            }
        });
    });
});

$('#calculate-form_popup').trigger('reset');
$(function () {
    'use strict';
    $('#calculate-form_popup').on('submit', function (e) {
        e.preventDefault();
        $.ajax({
            url: 'mail.php',
            type: 'POST',
            contentType: false,
            processData: false,
            data: new FormData(this),
            success: function (msg) {
                console.log(msg);
                if (msg == 'ok') {
                    $('.popup-calculate-form').removeClass('popup-calculate-form_active');
                    $('.popup-thanks').addClass('popup-thanks_active');
                    $('#calculate-form_popup').trigger('reset');
                    // очистка формы
                } else {
                    alert('Ошибка');
                }
                closePopUp();
            }
        });
    });
});

$('#question-form_popup').trigger('reset');
$(function () {
    'use strict';
    $('#question-form_popup').on('submit', function (e) {
        e.preventDefault();
        $.ajax({
            url: 'mail.php',
            type: 'POST',
            contentType: false,
            processData: false,
            data: new FormData(this),
            success: function (msg) {
                console.log(msg);
                if (msg == 'ok') {
                    $('.popup-question-form').removeClass('popup-question-form_active');
                    $('.popup-thanks').addClass('popup-thanks_active');
                    $('#question-form_popup').trigger('reset');
                    // очистка формы
                } else {
                    alert('Ошибка');
                }
                closePopUp();
            }
        });
    });
});

$('#call-me-form_popup').trigger('reset');
$(function () {
    'use strict';
    $('#call-me-form_popup').on('submit', function (e) {
        e.preventDefault();
        $.ajax({
            url: 'mail.php',
            type: 'POST',
            contentType: false,
            processData: false,
            data: new FormData(this),
            success: function (msg) {
                console.log(msg);
                if (msg == 'ok') {
                    $('.popup-call-me-form').removeClass('popup-call-me-form_active');
                    $('.popup-thanks').addClass('popup-thanks_active');
                    $('#call-me-form_popup').trigger('reset');
                    // очистка формы
                } else {
                    alert('Ошибка');
                }

            }
        });
    });
});




var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true
});

VK.Widgets.Group("vk_groups", {
    mode: 3,
    no_cover: 1,
    width: "300",
    color1: '3E4551',
    color2: 'FFFFFF',
    color3: 'E74C3C'
}, 62033979);





function openPopup(popap, popapActive) {
    popap.classList.add(popapActive);
}

function shuffle(arr) {
    var j, temp;
    for (var i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    return arr;
}