
// JavaScript to handle fade-in effect on scroll
const sections = document.querySelectorAll('.fade-in');

const options = {
    threshold: 0.1,  // Trigger when 10% of the section is visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);  // Stop observing once it's visible
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// JavaScript to highlight active navigation link
const navLinks = document.querySelectorAll('.nav-links a');

function setActiveLink() {
    const fromTop = window.scrollY;

    navLinks.forEach(link => {
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

window.addEventListener('scroll', setActiveLink);
