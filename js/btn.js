const shakeBox = document.querySelector('.shakeBox');




const observer = new IntersectionObserver (
    ([entry]) => {
        shakeBox.style.animationName = entry.isIntersecting ? "shake" : "none";
    },
    {
        rootMargin: "-180px 0px",
        threshold : 1,
    }
);

observer.observe(shakeBox);




/*shakeBox모바일*/

const ShakeBoxSecond = document.querySelector('.shakeBoxSecond');

const observerSecond = new IntersectionObserver (
    ([entry]) => {
        ShakeBoxSecond.style.animationName = entry.isIntersecting ? "shakeSecond" : "none";
    },
    {
        rootMargin : "-200px 0px",
        threshold : 1,
    }
);

observerSecond.observe(ShakeBoxSecond);
