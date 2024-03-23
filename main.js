const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// const dots = $$(".dots .dot");
// const peopleItems = $$(".people-item");

// const dotActive = $(".dot.active");

// dots.forEach((dot, index) => {
//     const people = peopleItems[index];

//     dot.addEventListener("click", () => {
//         $(".people-item.active").classList.remove("active");
//         $(".dot.active").classList.remove("active");
//         dot.classList.add("active");
//         people.classList.add("active");
//     });
// });
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
