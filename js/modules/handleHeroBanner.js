export function handleHeroBanner() {
    const bannerSlider = document.getElementById("banner-slider");
    const bannerDots = document.querySelectorAll(".banner-dot");
    let currentSlide = 0;
    let startX,
        moveX,
        isDragging = false;

    // Set initial active dot
    bannerDots[0].classList.replace("bg-anime-white/40", "bg-anime-white/70");

    // Update slider position
    function updateSliderPosition() {
        bannerSlider.style.transform = `translateX(-${currentSlide * 100}%)`;

        bannerDots.forEach((dot, index) => {
            if (index === currentSlide) {
                dot.classList.replace("bg-anime-white/40", "bg-anime-white/70");
            } else {
                dot.classList.replace("bg-anime-white/70", "bg-anime-white/40");
            }
        });
    }

    // Set up click events for dots
    bannerDots.forEach((dot) => {
        dot.addEventListener("click", () => {
            currentSlide = parseInt(dot.getAttribute("data-index"));
            updateSliderPosition();
        });
    });

    // Touch/mouse events for swiping
    bannerSlider.addEventListener("mousedown", startDrag);
    bannerSlider.addEventListener("touchstart", (e) => startDrag(e.touches[0]));

    bannerSlider.addEventListener("mousemove", drag);
    bannerSlider.addEventListener("touchmove", (e) => drag(e.touches[0]));

    bannerSlider.addEventListener("mouseup", endDrag);
    bannerSlider.addEventListener("mouseleave", endDrag);
    bannerSlider.addEventListener("touchend", endDrag);

    function startDrag(e) {
        startX = e.clientX;
        isDragging = true;
        bannerSlider.style.transition = "none";
    }

    function drag(e) {
        if (!isDragging) return;
        moveX = e.clientX;
        const diff = moveX - startX;
        const movement = (diff / bannerSlider.offsetWidth) * 100;
        const transform = -currentSlide * 100 + movement;

        // Limit dragging beyond first and last slide
        if (transform <= 0 && transform >= -((bannerDots.length - 1) * 100)) {
            bannerSlider.style.transform = `translateX(${transform}%)`;
        }
    }

    function endDrag() {
        if (!isDragging) return;
        isDragging = false;
        bannerSlider.style.transition = "transform 500ms";

        if (moveX) {
            const diff = moveX - startX;
            // Determine how much swiped far enough to change slides
            if (Math.abs(diff) > bannerSlider.offsetWidth / 12) {
                if (diff > 0 && currentSlide > 0) {
                    currentSlide--;
                } else if (diff < 0 && currentSlide < bannerDots.length - 1) {
                    currentSlide++;
                }
            }
            updateSliderPosition();
        }

        startX = null;
        moveX = null;
    }

    // Auto-slide
    let autoSlideInterval = setInterval(nextSlide, 4000);

    function nextSlide() {
        currentSlide = (currentSlide + 1) % bannerDots.length;
        updateSliderPosition();
    }

    // Pauses auto-slide on interaction
    bannerSlider.addEventListener("mousedown", () => {
        clearInterval(autoSlideInterval);
    });

    bannerSlider.addEventListener("touchstart", () => {
        clearInterval(autoSlideInterval);
    });

    // Resumes auto-slide after interaction
    bannerSlider.addEventListener("mouseup", () => {
        autoSlideInterval = setInterval(nextSlide, 4000);
    });

    bannerSlider.addEventListener("touchend", () => {
        autoSlideInterval = setInterval(nextSlide, 4000);
    });
}
