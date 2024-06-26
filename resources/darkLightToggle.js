function loadToggle() {
    if (window.matchMedia) {
        //alert("Match media working.")
    }
    
    if (darkTheme.matches === false) {
        var element = document.body;
        element.classList.toggle("dark-mode");
    }
}

function toggle() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}