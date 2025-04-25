export function checkSignInState() {
    const isSignedIn = localStorage.getItem("isSignedIn") === "true";

    const pfpContainer = document.querySelector("#pfp-container");
    const signinButton = document.querySelector("#signin-button");
    const signinPageLink = document.querySelector("#signin-page-link");
    
    if (isSignedIn && pfpContainer && signinButton) {
        pfpContainer.classList.remove("hidden");
        pfpContainer.classList.add("flex");
        signinButton.classList.add("hidden");
        signinPageLink.href = "#";
    }
}