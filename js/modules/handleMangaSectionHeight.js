export function handleMangaSectionHeight() {
    const mangaSection = document.querySelector("#manga-section");
    const manga2CardContainer = document.querySelector(".manga-2-card-container");

    function setHeight() {
        const manga2CardContainerHeight = manga2CardContainer.offsetHeight;

        const parentHeight = (manga2CardContainerHeight * 3) + 160;
        // console.log(parentHeight);
        mangaSection.style.height = `${parentHeight}px`;
    }

    setHeight();

    window.addEventListener("resize", () => {
        setHeight();
    })
}
