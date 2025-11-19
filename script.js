document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger"); 
    const topRight = document.getElementById("topRight"); 
    const navLinks = topRight.querySelectorAll("a"); // all links inside nav

    if (hamburger && topRight) {
        // Toggle menu on hamburger click
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            topRight.classList.toggle("active");
        });

        // Close menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                if (topRight.classList.contains("active")) {
                    topRight.classList.remove("active");
                    hamburger.classList.remove("active");
                }
            });
        });
    }
});

