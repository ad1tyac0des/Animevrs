export function handleMangaScrollSpeed() {
    const cardSpeeds = [
        0.6, 0.65,
        0.65, 0.7,
        0.7, 0.7
    ];

    const cardSpeedsMobile = [
        0.1, 0.2,
        0.2, 0.15,
        0.22, 0.1
    ]

    const mangaCardItems = document.querySelectorAll('.manga-card-item');

    function updateScrollSpeed() {
        const isMobile = window.innerWidth < 768;

        mangaCardItems.forEach((item, i) => {
            if (isMobile) {
                if (i < cardSpeedsMobile.length) {
                    item.setAttribute('data-scroll-speed', cardSpeedsMobile[i]);
                }
            } else {
                if (i < cardSpeeds.length) {
                    item.setAttribute('data-scroll-speed', cardSpeeds[i]);
                }
            }
        });

        if (window.scroll && typeof window.scroll.update === 'function') {
            window.scroll.update();
        }
    }

    updateScrollSpeed();

    window.addEventListener('resize', updateScrollSpeed);
}
