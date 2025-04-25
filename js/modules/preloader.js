import { gsap } from "gsap";
import { handleFixedMangaContainer } from "./handleFixedMangaContainer.js";
import { handleMangaSectionHeight } from "./handleMangaSectionHeight.js";

export function preloader() {
    const preloaderImageContainer = document.querySelector("#preloader-image");
    const preloaderImage = document.querySelector("#preloader-image img");
    const preloaderBgText = document.querySelector(".preloader-bg-text");

    const sources = [
        "https://i.pinimg.com/736x/8c/9b/07/8c9b07e5f25b7776190bf9de4da60c47.jpg",
        "https://i.pinimg.com/736x/c8/8e/47/c88e474ed655789823aef2346424009d.jpg",
        "https://i.pinimg.com/736x/65/c2/71/65c27152cf53797fa70877e94c9f9aa9.jpg",
        "https://i.pinimg.com/736x/c2/c0/1b/c2c01bb41d77a092372b07b1b70d4733.jpg",
        "https://img.anime2you.de/2020/08/dxd-season1.jpg",
        "https://i.pinimg.com/736x/bc/00/33/bc00331ae9e73936150c49e80b9da44f.jpg",
        "https://www.fortressofsolitude.co.za/wp-content/uploads/2015/09/dragon-ball-z-facts.jpg",
        "https://i.pinimg.com/736x/9e/f3/a6/9ef3a677214e300f4d037f84641c8e4b.jpg",
        "https://i.pinimg.com/736x/28/14/d3/2814d3f4b243a87d2150363729f3d732.jpg",
        "https://i.pinimg.com/736x/be/d7/4d/bed74de4acf957672d47fb53bd35dce8.jpg",
    ];

    let i = 0;
    let intervalId = null;
    const defaultInterval = 120;
    const hoverInterval = 600;
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
    
    const crimsonContainer = document.querySelector(".crimson-container");
    const crimsonFill = document.querySelector(".crimson-fill");
    const totalTimeToLoad = 8; // 8s

    gsap.to(crimsonFill, {
        width: "100%",
        duration: totalTimeToLoad,
        ease: "circ.in",
        onComplete: () => {
            clearInterval(intervalId);
            reachedEnd = true;

            // Remove the crimson container
            gsap.fromTo(crimsonContainer, {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            }, {
                clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
                duration: 1.2,
                delay: 0.4,
                ease: "power2.inOut"
            });

            // Remove the background text
            gsap.fromTo(preloaderBgText, {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
            }, {
                clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
                duration: 0.6,
                delay: 0.35,
                ease: "power2.inOut"
            });

            // Remove the preloader image
            gsap.fromTo(preloaderImage, {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
            }, {
                clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
                duration: 0.6,
                delay: 0.35,
                ease: "power2.inOut"
            });

            // Compmletely remove the preloader section
            gsap.to("#preloader-section", {
                display: "none",
                duration: 0.3,
                delay: 1.2,
            });

            // Show the main section
            gsap.to("main", {
                display: "block",
                delay: 1.5,
                onComplete: () => {
                    handleMangaSectionHeight();
                    handleFixedMangaContainer();
                }
            });

            // Animate the hero section
            gsap.fromTo("main", {
                clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)"
            }, {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                duration: 1.2,
                delay: 1.5,
                ease: "power2.inOut"
            });
        }
    });
}
