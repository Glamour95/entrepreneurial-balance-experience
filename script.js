// =========================================
// THE ENTREPRENEURIAL BALANCE EXPERIENCE
// WEBSITE INTERACTIONS
// =========================================

document.addEventListener("DOMContentLoaded", () => {

    // -----------------------------------------
    // MOBILE NAVIGATION
    // -----------------------------------------

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {

            navLinks.classList.toggle("mobile-open");

            menuToggle.textContent =
                navLinks.classList.contains("mobile-open")
                    ? "✕"
                    : "☰";

        });

        // Close menu when a navigation link is clicked
        const links = navLinks.querySelectorAll("a");

        links.forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("mobile-open");
                menuToggle.textContent = "☰";

            });

        });

    }


    // -----------------------------------------
    // SCROLL REVEAL
    // -----------------------------------------

    const revealElements = document.querySelectorAll(
        ".conversation-card, .programme-item, .opportunity-grid div, .audience-list span"
    );

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(element => {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });


    // -----------------------------------------
    // CURRENT YEAR
    // -----------------------------------------

    const yearElements = document.querySelectorAll(".current-year");

    yearElements.forEach(element => {

        element.textContent = new Date().getFullYear();

    });


    // -----------------------------------------
    // SMOOTH SCROLLING
    // -----------------------------------------

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    // -----------------------------------------
    // HERO ANIMATION
    // -----------------------------------------

    const heroContent = document.querySelector(".hero-content");

    if (heroContent) {

        setTimeout(() => {

            heroContent.classList.add("hero-loaded");

        }, 200);

    }


    // -----------------------------------------
    // CONVERSATION CARD INTERACTION
    // -----------------------------------------

    const cards = document.querySelectorAll(".conversation-card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.classList.add("card-active");

        });

        card.addEventListener("mouseleave", () => {

            card.classList.remove("card-active");

        });

    });


    // -----------------------------------------
    // OPPORTUNITY ROOM
    // -----------------------------------------

    const opportunityItems =
        document.querySelectorAll(".opportunity-grid div");

    opportunityItems.forEach(item => {

        item.addEventListener("click", () => {

            item.classList.toggle("selected");

        });

    });

});
