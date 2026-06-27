document.addEventListener("DOMContentLoaded", () => {
    
    // Performance optimized viewport execution engine
    const revealOptions = {
        threshold: 0.05, // Starts loading early for responsive visuals
        rootMargin: "0px 0px -40px 0px"
    };

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Instantly injects the visible class state cleanly
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    // Bind components securely
    const animatableElements = document.querySelectorAll(".animate-reveal");
    animatableElements.forEach(el => revealOnScroll.observe(el));
});