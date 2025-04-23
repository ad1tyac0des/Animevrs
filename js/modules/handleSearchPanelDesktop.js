import { createTimeline } from 'animejs';

export function handleSearchPanelDesktop() {
    let isSearchPanelOpen = false;
    
    const searchButtonDesktop = document.querySelector('#search-button-desktop');

    searchButtonDesktop.addEventListener('click', () => {
        if (isSearchPanelOpen) return;

        let tl = createTimeline({
            ease: "inOutSine",
        });
        
        tl.add("#search-panel-desktop", {
            display: "flex",
            opacity: 1,
            duration: 250,
        }).add("#search-bar-desktop", {
            opacity: 1,
            y: [-20, 0],
            duration: 250,
        }).add(["#close-line-1-desktop", "#close-line-2-desktop"], {
            width: [0, "100%"],
            duration: 300,
        }).add("#recent-searches-container-desktop", {
            opacity: 1,
            y: [-20, 0],
            duration: 300,
        }, "<<").add("#search-by-genre-container-desktop", {
            opacity: 1,
            y: [-20, 0],
            duration: 300,
        });

        isSearchPanelOpen = true;
    });

    const searchPanelCloseButton = document.querySelector('#search-panel-close-button-desktop');

    searchPanelCloseButton.addEventListener('click', () => {
        if (!isSearchPanelOpen) return;
        
        let tl = createTimeline({
            ease: "inOutSine",
        });

        tl.add("#search-by-genre-container-desktop", {
            y: [0, -20],
            opacity: [1, 0],
            duration: 300,
        }).add("#recent-searches-container-desktop", {
            y: [0, -20],
            opacity: [1, 0],
            duration: 300,
        }).add(["#close-line-1-desktop", "#close-line-2-desktop"], {
            width: ["100%", 0],
            duration: 300,
        }).add("#search-bar-desktop", {
            y: [0, -20],
            opacity: [1, 0],
            duration: 250,
        }).add("#search-panel-desktop", {
            opacity: 0,
            duration: 250,
        }).add("#search-panel-desktop", {
            display: "none",
            duration: 40
        })

        isSearchPanelOpen = false;
    });
}
