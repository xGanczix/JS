const img = document.querySelectorAll("img");
const wrapper = document.querySelector(".wrapper");
const slider = document.querySelector(".slider");
const left = document.querySelector(".leftButton");
const right = document.querySelector(".rightButton");

let current = 1;
const imgSize = 1000;
slider.style.transform = "translateX(-1000px)";
left.addEventListener("click", () => {
    if (current <= 0) return;
    slider.style.transition = "200ms ease-in-out transform";
    current--;
    slider.style.transform = `translateX(${-imgSize * current}px)`;
})
right.addEventListener("click", () => {
    if (current >= img.length - 1) return;
    slider.style.transition = "200ms ease-in-out transform";
    current++;
    slider.style.transform = `translateX(${-imgSize * current}px)`;
})

slider.addEventListener("transitionend", () => {
    if (img[current].classList.contains("first")) {
        slider.style.transition = "none";
        current = img.length - 2;
        slider.style.transform = `translateX(${-imgSize * current}px)`;
    }
    if (img[current].classList.contains("last")) {
        slider.style.transition = "none";
        current = img.length - current;
        slider.style.transform = `translateX(${-imgSize * current}px)`;
    }
})
