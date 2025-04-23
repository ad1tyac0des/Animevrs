import { createTimeline } from 'animejs';

export function handleSearchPanel() {
    let isSearchPanelOpen = false;
    
    const searchButtonContainerMobile = document.querySelector('#search-button-container-mobile');

    searchButtonContainerMobile.addEventListener('click', (e) => {
        if (isSearchPanelOpen) return;

        let tl = createTimeline();
        
        tl.add("#search-button-svg-mobile", {
            scale: 0.5,
            opacity: 0,
            duration: 400,
            ease: "inOutSine",
        }).add("#search-button-container-mobile", {
            opacity: 0,
            duration: 200,
            ease: "inOutSine",
        }, "<").add("#search-button-container-mobile", {
            display: "none",
            duration: 50,
        }).add("#search-panel-mobile", {
            display: "flex",
            opacity: 1,
            duration: 500,
            ease: "inOutSine",
        }).add(["#close-line-1", "#close-line-2"], {
            width: "100%",
            duration: 300,
            ease: "inOutSine",
        }, "<").add("#search-by-genre-container", {
            opacity: 1,
            y: [-20, 0],
            duration: 400,
            ease: "inOutSine",
        }, "<").add("#recent-searches-container", {
            opacity: 1,
            y: [-20, 0],
            duration: 400,
            ease: "inOutSine",
        });

        isSearchPanelOpen = true;
    });

    const searchPanelCloseButton = document.querySelector('#search-panel-close-button');

    searchPanelCloseButton.addEventListener('click', () => {
        if (!isSearchPanelOpen) return;
        
        let tl = createTimeline();

        tl.add(["#close-line-1", "#close-line-2"], {
            width: "0%",
            duration: 300,
            ease: "inOutSine",
        }).add("#search-by-genre-container", {
            opacity: 0,
            y: [0, -10],
            duration: 400,
            ease: "inOutSine",
        }, "<").add("#recent-searches-container", {
            opacity: 0,
            y: [0, -10],
            duration: 400,
            ease: "inOutSine",
        }).add("#search-panel-mobile", {
            opacity: 0,
            duration: 400,
            ease: "inOutSine",
        }, "<").add("#search-panel-mobile", {
            display: "none",
            duration: 50,
        }).add("#search-button-container-mobile", {
            display: "flex",
            opacity: 1,
            duration: 400,
            ease: "inOutSine",
        }).add("#search-button-svg-mobile", {
            scale: 1,
            opacity: 1,
            duration: 400,
            ease: "inOutSine",
        }, "<<");

        isSearchPanelOpen = false;
    });
}
