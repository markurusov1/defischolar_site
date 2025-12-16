// Theme toggle function
window.toggleTheme = function() {
    let currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    // Update icon if button exists
    const toggle = document.getElementById('theme-toggle');
    if (toggle) {
        // We'll trust the classes (.sun, .moon) are correctly applied in the HTML
        toggle.querySelector('.sun').style.display = newTheme === 'dark' ? 'block' : 'none';
        toggle.querySelector('.moon').style.display = newTheme === 'dark' ? 'none' : 'block';
    }
};

// Apply theme on page load
document.addEventListener('DOMContentLoaded', () => {
    let theme = localStorage.getItem('theme');

    if (!theme) {
        // Fall back to system preference if no saved choice
        theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    document.documentElement.setAttribute('data-theme', theme);

    // Update icon on load
    const toggle = document.getElementById('theme-toggle');
    if (toggle) {
        toggle.querySelector('.sun').style.display = theme === 'dark' ? 'block' : 'none';
        toggle.querySelector('.moon').style.display = theme === 'dark' ? 'none' : 'block';

        // NOTE: We don't need the addEventListener here since we put 'onclick' in the HTML.
        // If the 'onclick' attribute is NOT in the HTML, uncomment the line below:
        // toggle.addEventListener('click', window.toggleTheme);
    }
});