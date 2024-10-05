document.addEventListener("DOMContentLoaded", function() {
    // Select the hamburger menu and navigation links
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');  // Declare navLinks once

    // Toggle the active class to show or hide the mobile menu
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Select all sections that need the fade-in effect
    const sections = document.querySelectorAll('.fade-in');

    // Create an IntersectionObserver for fade-in effect
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'visible' class to trigger the CSS animation
                entry.target.classList.add('visible');
                // Stop observing the element once it's visible
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    // Observe each section for fade-in effect
    sections.forEach(section => {
        observer.observe(section);
    });

    // Select all nav items for active link highlight
    const navItems = document.querySelectorAll('.nav-links a');

    function setActiveLink() {
        const fromTop = window.scrollY;

        navItems.forEach(link => {
            const section = document.querySelector(link.hash);

            if (
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Scroll event listener to activate the correct navigation link
    window.addEventListener('scroll', setActiveLink);
});
