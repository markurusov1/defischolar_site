document.addEventListener('DOMContentLoaded', () => {
    const interval = setInterval(() => {
        const flexDiv = document.querySelector('.book-header .flex');
        if (flexDiv) {
            clearInterval(interval);

            // Create toggle button
            const toggle = document.createElement('a');
            toggle.href = 'javascript:void(0)';
            toggle.className = 'theme-toggle';
            toggle.title = 'Toggle dark/light mode';
            toggle.style.cssText = 'margin-left: 15px; padding: 5px; opacity: 0.8; cursor: pointer; align-self: center;';

            const sun = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path></svg>';
            const moon = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';

            // Initial theme
            const saved = localStorage.getItem('theme');
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const isDark = saved === 'dark' || (!saved && prefersDark);

            document.body.classList.toggle('dark', isDark);
            toggle.innerHTML = isDark ? sun : moon;

            // Click handler
            toggle.addEventListener('click', () => {
                const nowDark = !document.body.classList.contains('dark');
                document.body.classList.toggle('dark', nowDark);
                toggle.innerHTML = nowDark ? sun : moon;
                localStorage.setItem('theme', nowDark ? 'dark' : 'light');
            });

            // Insert right after TOC label (or at end if not found)
            const tocLabel = flexDiv.querySelector('label[for="toc-control"]');
            if (tocLabel) {
                tocLabel.after(toggle);
            } else {
                flexDiv.appendChild(toggle);
            }
        }
    }, 100);  // Polls until header is ready
});