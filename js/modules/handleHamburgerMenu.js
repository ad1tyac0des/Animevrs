import { createTimeline, stagger } from 'animejs';

export function handleHamburgerMenu() {
    const hamburgerMenu = document.querySelector("#hamburger-menu");
    const hamburgerPanelCloseButton = document.querySelector("#hamburger-panel-close-button");
    const hamburgerPanelLinks = document.querySelectorAll("#hamburger-panel-links a");

    let isOpen = false;

    function toggleBodyScroll() {
        if (isOpen) {
            // Disable scrolling
            document.body.style.overflow = "hidden";
            document.body.style.height = "100vh";
        } else {
            // Enable scrolling
            document.body.style.overflow = "";
            document.body.style.height = "";
        }
    }

    // opens hamburger panel
    function openHamburgerMenu() {
        const tl = createTimeline();

        tl.add("#hamburger-panel-container", {
            translateX: ["100%", "0%"],
            opacity: [0, 1],
            duration: 500,
            ease: "inOutSine"
        }).add("#hamburger-panel-links a", {
            opacity: [0, 1],
            x: [30, 0],
            duration: 400,
            // delay: stagger(20),
            ease: "inOutSine"
        }).add(["#hamburger-panel-close-line-1", "#hamburger-panel-close-line-2"], {
            width: [0, "100%"],
            duration: 500,
            ease: "inOutSine"
        }).add("#hamburger-panel-footer-container p", {
            opacity: [0, 1],
            duration: 500,
            ease: "inOutSine",
            delay: stagger(200)
        });
    }

    // close hamburger panel
    function closeHamburgerMenu() {
        const tl = createTimeline({
            reversed: true,
        });

        tl.add("#hamburger-panel-container", {
            translateX: ["100%", "0%"],
            opacity: [0, 1],
            duration: 400,
            ease: "inOutSine"
        }).add("#hamburger-panel-links a", {
            opacity: [0, 1],
            x: [30, 0],
            duration: 300,
            // delay: stagger(20),
            ease: "inOutSine"
        }).add(["#hamburger-panel-close-line-1", "#hamburger-panel-close-line-2"], {
            width: [0, "100%"],
            duration: 400,
            ease: "inOutSine"
        }).add("#hamburger-panel-footer-container p", {
            opacity: [0, 1],
            duration: 200,
            ease: "inOutSine",
            delay: stagger(200)
        })
    }

    // open hamburger panel on clicking menu button
    hamburgerMenu.addEventListener("click", () => {
        openHamburgerMenu();
        isOpen = true;
        toggleBodyScroll();
    });

    // close hamburger panel on clicking close button
    hamburgerPanelCloseButton.addEventListener("click", () => {
        closeHamburgerMenu();
        isOpen = false;
        toggleBodyScroll();
    });

    // close hamburger panel on clicking links
    hamburgerPanelLinks.forEach(link => {
        link.addEventListener("click", () => {
            closeHamburgerMenu();
            isOpen = false;
            toggleBodyScroll();
        });
    });
}