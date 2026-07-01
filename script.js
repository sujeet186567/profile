// ===============================
// Portfolio JavaScript
// ===============================

// Portfolio Loaded
console.log("Portfolio Loaded Successfully!");

// ===============================
// Highlight Active Navigation Link
// ===============================

const currentPage = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {

    if (link.getAttribute("href") === currentPage) {

        link.classList.add("active");

    }

});

// ===============================
// Smooth Fade Animation
// ===============================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

sections.forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});

// ===============================
// Scroll To Top Button
// ===============================

// Create Button

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

// Show Button

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

// Scroll Top

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

// ===============================
// Contact Form
// ===============================

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function(e) {

        e.preventDefault();

        alert("Thank you! Your message has been received.");

        form.reset();

    });

}

// ===============================
// Typing Effect (Home Page)
// ===============================

const title = document.querySelector(".hero h2");

if (title) {

    const words = [

        "BSc IT Student",

        "Web Developer",

        "C Programmer",

        "SQL Learner"

    ];

    let wordIndex = 0;

    let letterIndex = 0;

    let currentWord = "";

    let isDeleting = false;

    function type() {

        currentWord = words[wordIndex];

        if (!isDeleting) {

            title.textContent = currentWord.substring(0, letterIndex++);

            if (letterIndex > currentWord.length) {

                isDeleting = true;

                setTimeout(type, 1200);

                return;

            }

        } else {

            title.textContent = currentWord.substring(0, letterIndex--);

            if (letterIndex < 0) {

                isDeleting = false;

                wordIndex++;

                if (wordIndex >= words.length)

                    wordIndex = 0;

            }

        }

        setTimeout(type, isDeleting ? 60 : 120);

    }

    type();

}