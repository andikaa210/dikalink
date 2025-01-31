// Typing Animation untuk Bio
const bioText = "JL AP PETTARANI NO 18,Makassar 90000.";
const typingBio = document.getElementById('typing-bio');
let index = 0;

function typeWriter() {
    if (index < bioText.length) {
        typingBio.innerHTML += bioText.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}
typeWriter();

// Toggle Dark Mode
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    if (body.classList.contains('dark')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
});

// Scroll Animation
const scrollElements = document.querySelectorAll('[data-scroll]');

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', handleScrollAnimation);
handleScrollAnimation(); // Trigger saat halaman dimuat