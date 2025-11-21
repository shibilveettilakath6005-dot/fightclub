// ---------------------------
// Smooth Fade-In on Page Load
// ---------------------------
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = "1";
});


// ---------------------------
// Input Focus Glow Effect
// ---------------------------
const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
    input.addEventListener("focus", () => {
        input.style.boxShadow = "0 0 10px rgba(255,255,255,0.5)";
        input.style.background = "rgba(255,255,255,0.3)";
    });

    input.addEventListener("blur", () => {
        input.style.boxShadow = "none";
        input.style.background = "rgba(255,255,255,0.2)";
    });
});


// ---------------------------
// Button Ripple Animation
// ---------------------------
document.querySelector(".btn").addEventListener("click", function (e) {
    const button = this;

    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${e.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];

    if (ripple) ripple.remove();
    button.appendChild(circle);
});


// ---------------------------
// Simple Front-End Login Check
// (Demo Only – Not Real Auth)
// ---------------------------
const loginForm = document.querySelector(".login-box");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let username = inputs[0].value.trim();
    let password = inputs[1].value.trim();

    if (username === "" || password === "") {
        shakeForm();
        return;
    }

    // Success → Fake login redirect
    loginForm.style.transition = "0.6s";
    loginForm.style.transform = "scale(0.95)";
    loginForm.style.opacity = "0";

    setTimeout(() => {
        alert("Login Successful!");
        window.location.href = "index.html"; // redirect page
    }, 600);
});


// ---------------------------
// Shake Animation for Error
// ---------------------------
function shakeForm() {
    loginForm.style.animation = "shake 0.3s";

    setTimeout(() => {
        loginForm.style.animation = "";
    }, 300);
}
