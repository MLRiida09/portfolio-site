// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const themeText = document.getElementById('theme-text');
    const root = document.documentElement;

    // Check for saved theme preference or default to 'light'
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    // Apply saved theme on page load
    if (savedTheme === 'dark') {
        root.setAttribute('data-theme', 'dark');
        updateThemeUI(true);
    }

    // Theme toggle click event
    themeToggle.addEventListener('click', function() {
        const currentTheme = root.getAttribute('data-theme');
        
        if (currentTheme === 'dark') {
            // Switch to light mode
            root.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            updateThemeUI(false);
        } else {
            // Switch to dark mode
            root.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            updateThemeUI(true);
        }
    });

    // Update theme button UI
    function updateThemeUI(isDark) {
        if (isDark) {
            themeIcon.className = 'fa-solid fa-sun';
            themeText.textContent = 'Light Mode';
        } else {
            themeIcon.className = 'fa-solid fa-moon';
            themeText.textContent = 'Dark Mode';
        }
    }
});

