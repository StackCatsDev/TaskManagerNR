document.getElementById("pagestyle").setAttribute("href", "./mainstyle.css");


function swapStyleSheet(sheet) {
    // Change the stylesheet by updating the href of the link element with id 'pagestyle'
    document.getElementById("pagestyle").setAttribute("href", sheet);
    // Save the selected stylesheet to localStorage
    localStorage.setItem('selectedStylesheet', sheet);
}

function loadStylesheet() {
    // Load the saved stylesheet from localStorage, default to 'mainstyle.css' if not set
    const savedSheet = localStorage.getItem('selectedStylesheet') || './mainstyle.css';
    swapStyleSheet(savedSheet);
}

function initiateToggle() {
    const toggleButton = document.getElementById("toggleStylesheet");

    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            // Check current stylesheet and toggle between 'mainstyle.css' and 'secstyle.css'
            const currentSheet = document.getElementById("pagestyle").getAttribute("href");
            const newSheet = currentSheet === './mainstyle.css' 
                ? './secstyle.css' 
                : './mainstyle.css';
            swapStyleSheet(newSheet); // Swap the stylesheet and save the decision
        });
    }
}

// Load the stylesheet and set up the toggle on page load
document.addEventListener('DOMContentLoaded', () => {
    loadStylesheet();
    initiateToggle();
});