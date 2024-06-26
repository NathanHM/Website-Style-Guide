function loadToggle() {
    if (darkTheme.matches === false) {
        var element = document.body;
        element.classList.toggle("dark-mode");
    }
}

function toggle() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}