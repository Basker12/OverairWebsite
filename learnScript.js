const section1 = document.querySelector('#openSection1');
const closeSection1 = document.querySelector('#closeSection1');

section1.addEventListener('click', () => {
    document.querySelector('#mySection1').style.width = "100%";
    showAnim();

});

closeSection1.addEventListener('click', () => {
    closeAnim();
    document.querySelector('#mySection1').style.width = "0%";
});

const section2 = document.querySelector('#openSection2');
const closeSection2 = document.querySelector('#closeSection2');

section2.addEventListener('click', () => {
    document.querySelector('#mySection2').style.width = "100%";
    showAnim();

});

closeSection2.addEventListener('click', () => {
    closeAnim();
    document.querySelector('#mySection2').style.width = "0%";
});

const section3 = document.querySelector('#openSection3');
const closeSection3 = document.querySelector('#closeSection3');

section3.addEventListener('click', () => {
    document.querySelector('#mySection3').style.width = "100%";
    showAnim();

});

closeSection3.addEventListener('click', () => {
    closeAnim();
    document.querySelector('#mySection3').style.width = "0%";
});

const section4 = document.querySelector('#openSection4');
const closeSection4 = document.querySelector('#closeSection4');

section4.addEventListener('click', () => {
    document.querySelector('#mySection4').style.width = "100%";
    showAnim();

});

closeSection4.addEventListener('click', () => {
    closeAnim();
    document.querySelector('#mySection4').style.width = "0%";
});

document.addEventListener("DOMContentLoaded", function() {
    var lazyBackgrounds = [].slice.call(document.querySelectorAll(".lazy-background"));

    if ("IntersectionObserver" in window) {
        let lazyBackgroundObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("vissy");
                    lazyBackgroundObserver.unobserve(entry.target);
                }
            });
        });

        lazyBackgrounds.forEach(function(lazyBackground) {
            lazyBackgroundObserver.observe(lazyBackground);
        });
    }
    return null;
});

function showAnim () {
    let delayAnim = 1000;

    setTimeout(function () {

        let vis = document.querySelectorAll('.notVisible');
        if (vis.length === 0) {
            return null;
        } else {
            const hiddenElement = document.querySelectorAll('.notVisible');
            hiddenElement.forEach(el => el.classList.add('visible'));
        }

    }, delayAnim);
}

function closeAnim () {
    let delayAnim = 1000;

    setTimeout(function () {
        let vis = document.querySelectorAll('.visible');
        if (vis.length === 0) {
            return null;
        } else {
            const hiddenElement = document.querySelectorAll('.visible');
            hiddenElement.forEach(el => el.classList.replace('visible','notVisible'));
        }
    }, delayAnim);

}