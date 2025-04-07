// Back-to-Top Button Functionality
window.onscroll = function () {
    const backToTopButton = document.getElementById("back-to-top");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }

    // Update Scroll Progress Indicator
    const progressBar = document.getElementById("progress-bar");
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;
    progressBar.style.width = scrollPercentage + "%";
};

// Smooth Scroll to Top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Dark/Light Mode Toggle
const toggleButton = document.getElementById("theme-toggle");

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    toggleButton.textContent = document.body.classList.contains("dark-theme") ? "☀️" : "🌙";
});
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        emailjs.sendForm("service_7m8wxsf", "template_nt4twcq", this)
            .then(() => {
                alert("✅ Message sent successfully!");
                form.reset();
            }, (error) => {
                alert("❌ Failed to send message. Please try again later.");
                console.error("EmailJS Error:", error);
            });
    });
});