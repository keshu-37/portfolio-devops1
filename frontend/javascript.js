// DOM Elements
const buttons = document.querySelectorAll("button");
const sections = document.querySelectorAll("section");

// Utility function
function logMessage(message) {
    console.log("Log:", message);
}

// Button click animation
buttons.forEach(button => {
    button.addEventListener("click", () => {
        button.style.transform = "scale(0.95)";
        setTimeout(() => button.style.transform = "scale(1)", 150);
        logMessage("Button clicked: " + button.textContent);
    });
});

// Smooth scroll to sections
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
        logMessage("Scrolled to: " + link.getAttribute("href"));
    });
});

// Dummy section animation
sections.forEach(section => {
    section.style.opacity = 0;
});

window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    sections.forEach(section => {
        if (scrollPosition > section.offsetTop + 100) {
            section.style.transition = "opacity 0.6s";
            section.style.opacity = 1;
        }
    });
});

// Dummy slider logic
let currentSlide = 0;
const slides = ["Slide 1", "Slide 2", "Slide 3", "Slide 4"];
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    logMessage("Current slide: " + slides[currentSlide]);
}
function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    logMessage("Current slide: " + slides[currentSlide]);
}

// Simulate auto slider
setInterval(nextSlide, 4000);

// Fake API call
function fetchData() {
    logMessage("Fetching data from server...");
    setTimeout(() => {
        logMessage("Data received: [1,2,3,4,5]");
    }, 1000);
}

// Call fake API
fetchData();

// Toggle dark mode
const darkModeBtn = document.createElement("button");
darkModeBtn.textContent = "Toggle Dark Mode";
document.body.appendChild(darkModeBtn);

darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")) {
        document.body.style.background = "#121212";
        document.body.style.color = "#f5f5f5";
    } else {
        document.body.style.background = "#f4f4f9";
        document.body.style.color = "#333";
    }
    logMessage("Dark mode toggled");
});
