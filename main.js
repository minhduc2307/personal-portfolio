const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const peopleList = $(".people__list");
const peopleDots = $$(".people-dots .dot");
const peopleItems = $$(".people-item");
const nextBtn = $(".people__next");
const prevBtn = $(".people__prev");

let active = 0;
let peopleItemLengths = peopleItems.length - 1;
let autoSlide = setInterval(() => {
    nextBtn.click();
}, 3000);

nextBtn.onclick = () => {
    active = active + 1 <= peopleItemLengths ? active + 1 : 0;
    reloadPeopleSlider();
};

prevBtn.onclick = () => {
    active = active - 1 >= 0 ? active - 1 : peopleItemLengths;
    reloadPeopleSlider();
};

function reloadPeopleSlider() {
    const offset = -1 * peopleItems[active].offsetLeft;
    peopleList.style.transform = `translateX(${offset}px)`;

    let lastActiveDot = $(".people-dots .dot.active");
    lastActiveDot.classList.remove("active");
    peopleDots[active].classList.add("active");
    clearInterval(autoSlide);
    autoSlide = setInterval(() => {
        nextBtn.click();
    }, 3000);
}

peopleDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        active = index;
        reloadPeopleSlider();
    });
});

if (window.matchMedia("(min-width: 992px)").matches) {
    document.addEventListener("DOMContentLoaded", function () {
        const video = document.querySelector(".about__video");
        const playButton = document.querySelector(".btn-play-video");
        const introButton = $(".about__intro-video");
        playButton.addEventListener("click", function () {
            if (video.paused) {
                video.play();
                playButton.style.display = "none";
                introButton.style.display = "none";
            } else {
                video.pause();
                playButton.style.display = "block";
            }
        });

        video.addEventListener("click", function () {
            if (!video.paused) {
                if (playButton.style.display === "block") {
                    playButton.style.display = "none";
                } else {
                    playButton.style.display = "block";
                }
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth <= 991.98) {
        const specialConfig = {
            itemList: document.querySelector(".special__list"),
            items: document.querySelectorAll(".special__list .col-12"),
            dots: document.querySelectorAll(".special-dots .dot"),
            itemWidth: 0,
            currentIndex: 0,
            totalItems: 0,
            sliderInterval: null,
        };

        const atmosphereConfig = {
            itemList: document.querySelector(".atmosphere__list"),
            items: document.querySelectorAll(".atmosphere__list .col-12"),
            dots: document.querySelectorAll(".atmosphere-dots .dot"),
            itemWidth: 0,
            currentIndex: 0,
            totalItems: 0,
            sliderInterval: null,
        };

        function showItem(config) {
            config.itemList.style.transform = `translateX(-${
                config.currentIndex * config.itemWidth
            }px)`;
            config.dots.forEach((dot) => {
                dot.classList.remove("active");
            });
            config.dots[config.currentIndex].classList.add("active");
        }

        function nextItem(config) {
            if (config.currentIndex + 1 <= config.totalItems - 1) {
                config.currentIndex = config.currentIndex + 1;
            } else {
                config.currentIndex = 0;
            }
            showItem(config);
        }

        function startSlider(config) {
            config.sliderInterval = setInterval(() => {
                nextItem(config);
            }, 3000);
        }

        function setupSlider(config) {
            config.itemWidth = config.items[0].offsetWidth;
            config.totalItems = config.items.length;
            startSlider(config);
        }

        setupSlider(specialConfig);
        setupSlider(atmosphereConfig);
    }
});
