export function checkSignInStateAndUpdate() {
    const isSignedIn = localStorage.getItem("isSignedIn") === "true";
    const username = localStorage.getItem("username");
    const email = localStorage.getItem("email");

    const pfpContainer = document.querySelector("#pfp-container");
    const signinButton = document.querySelector("#signin-button");
    const signinPageLink = document.querySelector("#signin-page-link");
    const dropdownUsername = document.querySelector("#dropdown-username");
    const dropdownEmail = document.querySelector("#dropdown-email");

    if (isSignedIn && pfpContainer && signinButton) {
        pfpContainer.classList.remove("hidden");
        pfpContainer.classList.add("flex");
        signinButton.classList.add("hidden");
        signinPageLink.href = "#";
        
        if (dropdownUsername && dropdownEmail) {
            dropdownUsername.textContent = username;
            dropdownEmail.textContent = email;
        }
    }
}