import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function handleTrendingScrollEffect() {
    const trendingSection = document.querySelector("#trending-section");
    const trendingHeading = document.querySelector("#trending-heading-content");
    const trendingSubheading = document.querySelector("#trending-subheading-content");
    
    gsap.from(trendingHeading, {
        opacity: 0, 
        y: 30, 
        duration: .5,
        scrollTrigger: {
            trigger: trendingSection,
            start: "top-=190px 50%",
            // markers: true,
            toggleActions: "play none none reverse"
        }
    })

    gsap.from(trendingSubheading, {
        opacity: 0, 
        y: 30, 
        duration: .5,
        scrollTrigger: {
            trigger: trendingSection,
            start: "top-=190px 50%",
            // markers: true,
            toggleActions: "play none none reverse"
        }
    })
}
