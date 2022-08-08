// Open/Close Menu Navegation
const btnMenu = document.getElementById("btn-menu");
const menuList = document.getElementById("nav-menu");
const btnClose = document.getElementById("btn-close");

btnMenu.addEventListener("click", () => {
    menuList.classList.add("active");
});
btnClose.addEventListener("click", () => {
    menuList.classList.remove("active");
});



// Remove the menu when clicking on a link
const navLink = document.querySelectorAll('.nav__link');
function linkAction() {
    menuList.classList.remove("active");
}

navLink.forEach(n => n.addEventListener('click', linkAction));



// Change image in home
function changeHome(anything){
    document.querySelector('.home__img').src = anything;
}



// Add active class in selected thumbnails
let th = document.querySelectorAll('.thumbnails li');
for (let i=0; i<th.length; i++) {
    th[i].onclick = function() {
        var c=0;
        while (c < th.length) {
            th[c++].className = 'thumb__item check';
        }
        th[i].className = 'thumb__item check active';
    }
}



// Play video home
const btnVideo = document.getElementById("btn-play");
const video = document.getElementById("home-video");
const iconVideo = document.getElementById("icon-btnvideo");

btnVideo.addEventListener('click', () => {
    video.classList.add('active');
    playPause();
});

function playPause() {
    if (video.paused == true) {
        video.play();
        iconVideo.classList.remove('bx-play');
        iconVideo.classList.add('bx-pause');
        video.classList.remove('paused')
        // console.log('video corriendo');
    } else {
        video.pause();
        iconVideo.classList.remove('bx-pause');
        iconVideo.classList.add('bx-play');
        video.classList.add('paused')
        // console.log('video pausado')
    }
}

video.addEventListener('ended', () => {
    video.classList.remove('active');
    video.load();
    iconVideo.classList.remove('bx-pause');
    iconVideo.classList.add('bx-play');
    // console.log('video finalizado');
});



// Projects Slider
let swiper = new Swiper(".projects__slider", {
    loop: true,
    slidesPerView: "auto",
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
});



// Shop Slider
let swiper2 = new Swiper(".shop__carousel", {
    slidesPerView: "auto",
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination-unique",
        type: 'custom',
        renderCustom: function (swiper, current, total) {
            return current + ' DE ' + total;
        }
    },
    navigation: {
        nextEl: ".swiper-button-next-unique",
        prevEl: ".swiper-button-prev-unique",
    },
});



// Reviews slider configuration
const swiper3 = new Swiper(".reviews__slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    navigation: {
        prevEl: ".swiper-button-prev-reviews",
        nextEl: ".swiper-button-next-reviews",
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1124: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});


// Animations in general
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 800,
    easing: 'ease',
    // reset: true,
});

sr.reveal(`.navbar, .home__content .txt__content, .home__content .img__content, .home__content .thumbnails, .home__content .video-content`, { interval: 700, delay: 200, desktop: true, mobile: false });
sr.reveal(`.about__img, .img__subscribe`, { origin: 'left' });
sr.reveal(`.about__txt, .footer`, { delay: 1200 });
sr.reveal(`.projects__slider, .data__subscribe, .shop__carousel`, { origin: 'right', desktop: true, mobile: false });
sr.reveal(`.process__img, .info__txt`);
sr.reveal(`.reviews__slider`, { origin: 'bottom' });


sr.reveal(`.navbar, .home__content .txt__content, .home__content .img__content, .home__content .video-content`, { interval: 700, delay: 200, mobile: true, desktop: false });
sr.reveal(`.home__content .thumbnails, .projects__slider, .shop__carousel`, { origin: 'bottom', delay: 200, mobile: true, desktop: false });
sr.reveal(`.data__subscribe`, { origin: 'left', mobile: true, desktop: false });
