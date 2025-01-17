// Get the current file name from the URL
const fileName = window.location.pathname.split('/').pop(); // e.g., "home.html"

// Map file names to their corresponding page titles
const pageTitles = {
    "home.html": "Home",
    "subscribe.html": "Subscribe",
    "service.html": "Service",
    "help.html": "Help",
    "contact_us.html": "Contact Us",
    "aim.html": "Aim"
};

// Get the <h1> element
const pageTitleElement = document.getElementById('page-title');

// Set the <h1> text based on the current file name
if (pageTitleElement && pageTitles[fileName]) {
    pageTitleElement.textContent = pageTitles[fileName]; // Set the dynamic heading
} else {
    pageTitleElement.textContent = "Page Not Found"; // Fallback for unknown pages
}
