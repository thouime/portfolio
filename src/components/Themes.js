function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

function keepTheme() {
    if (localStorage.getItem('theme')) {
        if (localStorage.getItem('theme') === 'dark-mode') {
            setTheme('dark-mode');
        } else if (localStorage.getItem('theme') === 'light-mode') {
            setTheme('light-mode')
        }
    } else {
        setTheme('dark-mode')
    }
}

module.exports = {
    setTheme,
    keepTheme
}