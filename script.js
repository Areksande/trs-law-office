/*=========================================
    JUSTICE LAW OFFICE
    script.js
==========================================*/

/* =========================
   Sticky Navbar
========================= */

window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 100) {
        navbar.style.padding = "10px 0";
        navbar.style.background = "#000";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.3)";
    } else {
        navbar.style.padding = "15px 0";
        navbar.style.background = "#111";
        navbar.style.boxShadow = "none";
    }
});


/* =========================
   Animated Counter
========================= */

const counters = document.querySelectorAll(".counter-number");

const startCounter = () => {

    counters.forEach(counter => {

        const target = +counter.getAttribute("data-target");

        let count = 0;

        const speed = target / 100;

        const updateCounter = () => {

            count += speed;

            if (count < target) {

                counter.innerText = Math.ceil(count);

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = target + "+";

            }
        };

        updateCounter();

    });

};

let counterStarted = false;

window.addEventListener("scroll", () => {

    const counterSection = document.querySelector(".counter");

    if (!counterSection) return;

    const sectionTop = counterSection.offsetTop;

    const sectionHeight = counterSection.offsetHeight;

    const scrollPos = window.scrollY + window.innerHeight;

    if (
        scrollPos > sectionTop + 100 &&
        window.scrollY < sectionTop + sectionHeight &&
        !counterStarted
    ) {
        counterStarted = true;
        startCounter();
    }

});


/* =========================
   Smooth Scroll
========================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});


/* =========================
   Back To Top Button
========================= */

const backToTop = document.createElement("button");

backToTop.innerHTML = "↑";

backToTop.id = "backToTop";

document.body.appendChild(backToTop);

backToTop.style.position = "fixed";
backToTop.style.bottom = "25px";
backToTop.style.right = "25px";
backToTop.style.width = "50px";
backToTop.style.height = "50px";
backToTop.style.border = "none";
backToTop.style.borderRadius = "50%";
backToTop.style.background = "#b30000";
backToTop.style.color = "#fff";
backToTop.style.fontSize = "20px";
backToTop.style.cursor = "pointer";
backToTop.style.display = "none";
backToTop.style.zIndex = "999";
backToTop.style.transition = ".3s";

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backToTop.style.display = "block";

    } else {

        backToTop.style.display = "none";

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================
   Scroll Reveal Animation
========================= */

const revealElements = document.querySelectorAll(
    ".service-card, .attorney, .consultation, .counter"
);

const revealOnScroll = () => {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;

        const elementTop = element.getBoundingClientRect().top;

        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {

            element.classList.add("active-reveal");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/* =========================
   Loading Screen
========================= */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);

    }

});


/* =========================
   Consultation Form Validation
========================= */

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const inputs = this.querySelectorAll(
            "input, textarea"
        );

        let valid = true;

        inputs.forEach(input => {

            if (input.value.trim() === "") {

                input.style.borderColor = "red";

                valid = false;

            } else {

                input.style.borderColor = "#ddd";

            }

        });

        if (valid) {

            alert(
                "Thank you! Your consultation request has been submitted."
            );

            form.reset();

        } else {

            alert(
                "Please complete all required fields."
            );

        }

    });

}


/* =========================
   Attorney Card Hover Effect
========================= */

const attorneyCards =
document.querySelectorAll(".attorney");

attorneyCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
        "translateY(-10px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "translateY(0) scale(1)";

    });

});


/* =========================
   Service Card Hover Effect
========================= */

const serviceCards =
document.querySelectorAll(".service-card");

serviceCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.boxShadow =
        "0 15px 30px rgba(179,0,0,.25)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.12)";

    });

});


/* =========================
   Current Year Footer
========================= */

const yearElement =
document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
    new Date().getFullYear();

}


/* =========================
   Console Welcome Message
========================= */

console.log(`
==================================
JUSTICE LAW OFFICE
Professional Legal Services
Red • Black • White Theme
==================================
`);