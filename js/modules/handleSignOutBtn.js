export function handleSignOutBtn() {
    const signoutButton = document.querySelector("#signout-button");

    signoutButton.addEventListener("click", () => {
        localStorage.removeItem("isSignedIn");
        localStorage.removeItem("username");
        localStorage.removeItem("email");
        
        setTimeout(() => {
            location.href = "signin.html";
        }, 500);
    });
}
