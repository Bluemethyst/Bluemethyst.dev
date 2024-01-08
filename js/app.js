const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        // Add more as needed
        document.documentElement.style.setProperty('--main', 'var(--main-light)');
        document.documentElement.style.setProperty('--main-two', 'var(--main-two-light');
        document.documentElement.style.setProperty('--font-color', 'var(--font-color-light)');
        document.documentElement.style.setProperty('--bg-gradient', 'var(--bg-gradient-light)');
        console.log('Light Mode')
    } else {
        document.documentElement.style.setProperty('--main', '#121212');
        document.documentElement.style.setProperty('--main-two', '#242424');
        document.documentElement.style.setProperty('--font-color', '#e9f5ff');
        document.documentElement.style.setProperty('--bg-gradient', 'linear-gradient(90deg, rgba(0,123,155,1) 0%, rgba(100,45,155,1) 100%)');
        // Add more as needed
        console.log('Dark Mode')    
        }
    }
);