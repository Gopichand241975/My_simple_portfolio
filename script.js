// Scroll to section function
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

// Simple form alert
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Message sent successfully!");
});
