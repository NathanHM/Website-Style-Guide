function loadToggle() {
    if (darkTheme.matches === false) {
        var element = document.body;
        element.classList.toggle("dark-mode");
    }
}


function toggle() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    toggleImage();
}

function toggleImage() {
    let initImg = document.getElementById("theme-icon").src;
    if (initImg.includes("resources/darkIcon.png")) {
        document.getElementById("theme-icon").src = "resources/lightIcon.png";
    }
    else {
        document.getElementById("theme-icon").src = "resources/darkIcon.png";
    }
}