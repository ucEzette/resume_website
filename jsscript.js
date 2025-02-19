// Safely update the current year if the element exists
var currentYearElement = document.getElementById('currentYear');
if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}

// Hover effect
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#333'; // Changes color on hover
        link.style.backgroundColor = '#FFFFFF'; // Adds background highlight
    });
    link.addEventListener('mouseout', () => {
        link.style.color = '#FFFFFF'; // Reverts back
        link.style.backgroundColor = 'transparent'; // Clears background
    });
});

// Menu toggle functionality
document.getElementById('menu-toggle').addEventListener('click', function() {
    var navbar = document.getElementById('navbar');
    // Toggle the display property
    if (navbar.style.display === 'block') {
        navbar.style.display = 'none';
    } else {
        navbar.style.display = 'block';
    }
});

// Optional: Close the menu when a link is clicked (useful for mobile)
document.querySelectorAll('#navbar a').forEach(link => {
    link.addEventListener('click', () => {
        var navbar = document.getElementById('navbar');
        navbar.style.display = 'none';
    });
});

console.log("Uche Ezette Emmanuel Resume Loaded Successfully");