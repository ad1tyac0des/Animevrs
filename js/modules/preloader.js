export function preloader() {
    const preloaderImageContainer = document.querySelector("#preloader-image");
    const preloaderImage = document.querySelector("#preloader-image img");

    const sources = [
        "https://i.pinimg.com/736x/8c/9b/07/8c9b07e5f25b7776190bf9de4da60c47.jpg",
        "https://i.pinimg.com/736x/c8/8e/47/c88e474ed655789823aef2346424009d.jpg",
        "https://i.pinimg.com/736x/65/c2/71/65c27152cf53797fa70877e94c9f9aa9.jpg",
        "https://i.pinimg.com/736x/c2/c0/1b/c2c01bb41d77a092372b07b1b70d4733.jpg",
        "https://img.anime2you.de/2020/08/dxd-season1.jpg",
        "https://i.pinimg.com/736x/bc/00/33/bc00331ae9e73936150c49e80b9da44f.jpg",
        "https://www.fortressofsolitude.co.za/wp-content/uploads/2015/09/dragon-ball-z-facts.jpg",
        "https://i.pinimg.com/736x/a6/23/03/a623030bef40aafd587adc4f5d286141.jpg",
    ];

    let i = 0;
    let intervalId = null;
    const defaultInterval = 120;
    const hoverInterval = 700;
    let reachedEnd = false;

    function changeImage() {
        preloaderImage.src = sources[i];
        i = (i + 1) % sources.length;
    }

    intervalId = setInterval(changeImage, defaultInterval);

    preloaderImageContainer.addEventListener("mouseenter", () => {
        if (reachedEnd) return;
        clearInterval(intervalId);
        intervalId = setInterval(changeImage, hoverInterval);

        preloaderImage.style.scale = "1.2";
        preloaderImage.style.transition = "scale 0.5s ease";
    });

    preloaderImageContainer.addEventListener("mouseleave", () => {
        if (reachedEnd) return;
        clearInterval(intervalId);
        intervalId = setInterval(changeImage, defaultInterval);

        preloaderImage.style.scale = "1";
        preloaderImage.style.transition = "scale 0.5s ease";
    });
    
    const crimsonFill = document.querySelector(".crimson-fill");
    let width = 0;
    
    const intervalId2 = setInterval(() => {
        width += 1;
        crimsonFill.style.width = `${width}%`;
        crimsonFill.style.transition = "width 1s ease";

        if (width >= 100) {
            clearInterval(intervalId2);
            clearInterval(intervalId);
            reachedEnd = true;
        }
    }, 100);
}
