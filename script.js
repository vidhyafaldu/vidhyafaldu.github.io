 
// =============================
// MOBILE MENU
// =============================

const menuButton = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});


// Close mobile menu after clicking a link

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {
        navMenu.classList.remove("open");
    });

});


// =============================
// SCROLL REVEAL ANIMATION
// =============================

const revealElements =
    document.querySelectorAll(".reveal");

const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    observer.observe(element);

});


// =============================
// ACTIVE NAVIGATION
// =============================

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll("#navMenu a");


const sectionObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    navLinks.forEach(link => {
                        link.classList.remove("active");
                    });

                    const activeLink =
                        document.querySelector(
                            `#navMenu a[href="#${entry.target.id}"]`
                        );

                    if (activeLink) {
                        activeLink.classList.add("active");
                    }

                }

            });

        },

        {
            rootMargin:
                "-40% 0px -50% 0px"
        }

    );


sections.forEach(section => {

    sectionObserver.observe(section);

});


// =============================
// HEADER EFFECT
// =============================

window.addEventListener("scroll", () => {

    const navbar =
        document.querySelector(".navbar");

    if (window.scrollY > 30) {

        navbar.style.background =
            "rgba(7,8,13,0.92)";

    } else {

        navbar.style.background =
            "rgba(7,8,13,0.75)";

    }

});


// =============================
// MOUSE GLOW EFFECT
// =============================

document.addEventListener(
    "mousemove",
    (event) => {

        document.body.style.setProperty(
            "--mouse-x",
            event.clientX + "px"
        );

        document.body.style.setProperty(
            "--mouse-y",
            event.clientY + "px"
        );

    }
);