// ===================================
// EnergyWatch - COS30045 T01
// Main JavaScript File
// ===================================

// ===================================
// Page Navigation
// ===================================

document.addEventListener('DOMContentLoaded', function () {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');

    // Add click event listeners to each nav link
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            // Prevent default anchor behavior for demo purposes
            // In production, you could let it navigate naturally
            event.preventDefault();

            const targetPage = this.getAttribute('data-page');
            const targetUrl = this.getAttribute('href');

            // Update active state on nav links
            setActiveNavLink(targetPage);

            // Navigate to the page
            window.location.href = targetUrl;
        });
    });

    // Set active nav link based on current page
    setActiveNavLinkBasedOnURL();

    // Listen for URL changes (for SPA-like behavior)
    window.addEventListener('popstate', function () {
        setActiveNavLinkBasedOnURL();
    });
});

/**
 * Sets the active navigation link based on the target page
 * @param {string} pageName - The name of the page to set as active
 */
function setActiveNavLink(pageName) {
    // Remove active class from all nav links
    const allNavLinks = document.querySelectorAll('.nav-link');
    allNavLinks.forEach(function (link) {
        link.classList.remove('active');
    });

    // Add active class to the matching nav link
    const activeLink = document.querySelector('.nav-link[data-page="' + pageName + '"]');
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

/**
 * Determines the current page from the URL and sets the active nav link
 */
function setActiveNavLinkBasedOnURL() {
    const currentPath = window.location.pathname;
    let currentPage = 'home';

    if (currentPath.includes('televisions')) {
        currentPage = 'televisions';
    } else if (currentPath.includes('about-us')) {
        currentPage = 'about';
    }

    setActiveNavLink(currentPage);
}

// ===================================
// Logo Click Handler
// ===================================

document.addEventListener('DOMContentLoaded', function () {
    const logoContainer = document.querySelector('.logo-container');

    if (logoContainer) {
        logoContainer.addEventListener('click', function () {
            // Navigate to home page
            window.location.href = 'index.html';
        });

        // Make logo look clickable
        logoContainer.style.cursor = 'pointer';
    }
});

// ===================================
// Smooth Scrolling for Anchor Links
// ===================================

document.addEventListener('DOMContentLoaded', function () {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                event.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// ===================================
// Console Welcome Message
// ===================================

console.log('⚡ EnergyWatch - Australian Appliance Energy Consumption');
console.log('Built for COS30045 Data Visualisation');
console.log('GitHub Repository: https://github.com/AllenLIEW9966/T01_Energy_Website');
console.log('Live Demo: https://your-project-name.vercel.app/');
