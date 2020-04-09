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
        $('.mobile-menu').removeClass('mobile-menu_active');
        $('html').animate({
                scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
            }, 500 // скорость прокрутки
        );
    }

    mobileNavigation.classList.remove('navigation-mobile_active');

    for (i = 0; i < sectionArr.length; i++) {
        sectionArr[i].classList.remove('section__menu-active');
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