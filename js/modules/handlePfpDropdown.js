export function handlePfpDropdown() {
    const pfpContainer = document.querySelector("#pfp-container");
    const pfpDropdown = document.querySelector("#pfp-dropdown");

    if (window.innerWidth < 768) {
        pfpContainer.addEventListener("click", () => {
            pfpDropdown.classList.toggle("hidden");
            if (!pfpDropdown.classList.contains("hidden")) {
                pfpDropdown.classList.remove("opacity-0");
                pfpDropdown.classList.add("opacity-100");
            } else {
                pfpDropdown.classList.remove("opacity-100");
                pfpDropdown.classList.add("opacity-0");
            }
        });
    }

    if (window.innerWidth > 768) {
        pfpContainer.addEventListener('mouseenter', () => {
            if (pfpDropdown.classList.contains("hidden")) {
                pfpDropdown.classList.remove("hidden");
                pfpDropdown.classList.remove("opacity-0");
                pfpDropdown.classList.add("opacity-100");
            }
        });
    
        pfpDropdown.addEventListener('mouseleave', () => {
            if (!pfpDropdown.classList.contains("hidden")) {
                pfpDropdown.classList.add("hidden");
                pfpDropdown.classList.add("opacity-0");
            }
        });
    }

    document.addEventListener("click", (e) => {
        if (!pfpDropdown.contains(e.target) && !pfpContainer.contains(e.target)) {
            pfpDropdown.classList.add("hidden");
            pfpDropdown.classList.add("opacity-0");
        }
    });
}
