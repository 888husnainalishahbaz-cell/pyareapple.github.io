/* ==========================================
   PYARY APPLE - APP.JS
========================================== */

// ==========================
// Loader Animation
// ==========================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


// ==========================
// Sticky Navbar
// ==========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(0,0,0,0.92)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    } else {

        navbar.style.background = "rgba(0,0,0,.65)";
        navbar.style.boxShadow = "none";

    }

});


// ==========================
// Smooth Scroll
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});


// ==========================
// Scroll Animation
// ==========================

const revealElements = document.querySelectorAll(

    ".card, .product-card, .why-grid div"

);

const reveal = () => {

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            el.style.opacity = "1";
            el.style.transform = "translateY(0px)";

        }

    });

};

revealElements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(60px)";
    el.style.transition = "all .8s ease";

});

window.addEventListener("scroll", reveal);

reveal();


// ==========================
// Hero Text Animation
// ==========================

const heroTitle = document.querySelector(".hero h1");

if (heroTitle) {

    heroTitle.animate(

        [

            {

                opacity: 0,

                transform: "translateY(50px)"

            },

            {

                opacity: 1,

                transform: "translateY(0)"

            }

        ],

        {

            duration: 1200,

            easing: "ease"

        }

    );

}


// ==========================
// Product Hover Effect
// ==========================

document.querySelectorAll(".product-card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});


// ==========================
// Scroll To Top Button
// ==========================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText = `
position:fixed;
bottom:25px;
right:25px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#ff3b3b;
color:#fff;
font-size:22px;
cursor:pointer;
display:none;
z-index:9999;
box-shadow:0 8px 20px rgba(0,0,0,.35);
transition:.3s;
`;

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ==========================
// Console Message
// ==========================

console.log("%c🍎 Pyary Apple Website Loaded",
"color:#ff3b3b;font-size:18px;font-weight:bold;");
/* ===========================
   MOBILE MENU
=========================== */

const menuBtn = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("active");

if(menuBtn.innerHTML.includes("bars")){

menuBtn.innerHTML='<i class="fa-solid fa-xmark"></i>';

}else{

menuBtn.innerHTML='<i class="fa-solid fa-bars"></i>';

}

});
