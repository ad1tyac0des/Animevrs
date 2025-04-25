import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function handleFixedMangaContainer() {
    const mangaSection = document.querySelector("#manga-section");
    const fixedMangaContainer = document.querySelector("#fixed-manga-container");
    
    ScrollTrigger.create({
        trigger: mangaSection,
        start: "top top", 
        end: "bottom bottom",
        pin: fixedMangaContainer,
        pinSpacing: true,
        // markers: true
    });
    
    gsap.from(fixedMangaContainer.querySelector("h1"), {
        opacity: .4, 
        y: 20, 
        scrollTrigger: {
            trigger: mangaSection,
            start: "2% 80%",
            toggleActions: "play none none reverse",
            // markers: true
        }
    })
    
    gsap.from(fixedMangaContainer.querySelector("p"), {
        opacity: .2, 
        y: 20, 
        scrollTrigger: {
            trigger: mangaSection,
            start: "3% 80%",
            toggleActions: "play none none reverse",
            // markers: true
        }
    })
    
    gsap.from(fixedMangaContainer.querySelector(".see-all-btn"), {
        opacity: .2, 
        y: 20, 
        scrollTrigger: {
            trigger: mangaSection,
            start: "7% 80%",
            toggleActions: "play none none reverse",
            // markers: true
        }
    })
}