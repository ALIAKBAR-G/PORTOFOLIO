document.addEventListener('DOMContentLoaded', () => {

    // --- TYPING EFFECT ---
    const typedTextSpan = document.querySelector(".typed-text");
    const textArray = ["Data Analyst", "IT Technician", "Problem Solver"];
    const typingDelay = 100;
    const erasingDelay = 50;
    const newTextDelay = 2000; // Delay between current and next text
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 1100);
        }
    }

    // Start typing effect
    if(textArray.length) setTimeout(type, newTextDelay + 250);

    // --- HAMBURGER MENU TOGGLE ---
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));

    // --- SCROLL REVEAL ANIMATION ---
    const reveals = document.querySelectorAll('.reveal');

    function handleScrollReveal() {
        reveals.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            } else {
                // Optional: remove class if you want animation to re-trigger on scroll up
                // element.classList.remove('active');
            }
        });
    }
    
    window.addEventListener('scroll', handleScrollReveal);
    // Initial check in case elements are already in view on load
    handleScrollReveal();

    // --- SKILL BAR ANIMATION ---
    const skillLevels = document.querySelectorAll('.skill-level');

    function animateSkillBars() {
        skillLevels.forEach(bar => {
            const rect = bar.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const level = bar.getAttribute('data-level');
                if (bar.style.width === '0px' || !bar.style.width) { // Animate only once
                    bar.style.width = level;
                }
            }
        });
    }

    window.addEventListener('scroll', animateSkillBars);
    // Initial check
    animateSkillBars();
});