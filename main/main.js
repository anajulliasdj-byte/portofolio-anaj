

const cursor = document.querySelector(".cursor");
const blur = document.querySelector(".cursor-blur");


document.addEventListener("mousemove", (e)=>{


  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";


  blur.style.left = e.clientX + "px";
  blur.style.top = e.clientY + "px";


});


/* =====================================================
PARTICLES
===================================================== */


const particles = document.getElementById("particles");


for(let i = 0; i < 60; i++){


  const particle = document.createElement("div");


  particle.classList.add("particle");


  particle.style.width =
  Math.random() * 4 + "px";


  particle.style.height =
  particle.style.width;


  particle.style.left =
  Math.random() * 100 + "%";


  particle.style.animationDuration =
  Math.random() * 20 + 10 + "s";


  particle.style.opacity =
  Math.random();


  particles.appendChild(particle);


}


/* =====================================================
CLOCK
===================================================== */


function updateClock(){


  const clock = document.getElementById("clock");


  const now = new Date();


  const hours =
  String(now.getHours()).padStart(2,"0");


  const minutes =
  String(now.getMinutes()).padStart(2,"0");


  const seconds =
  String(now.getSeconds()).padStart(2,"0");


  clock.innerHTML =
  `${hours}:${minutes}:${seconds}`;


}


setInterval(updateClock,1000);


updateClock();


/* =====================================================
SCROLL REVEAL
===================================================== */


const reveals =
document.querySelectorAll(".reveal");


function revealElements(){


  reveals.forEach((element)=>{


    const windowHeight =
    window.innerHeight;


    const revealTop =
    element.getBoundingClientRect().top;


    if(revealTop < windowHeight - 100){


      element.classList.add("active");


    }


  });


}


window.addEventListener(
  "scroll",
  revealElements
);


revealElements();


/* =====================================================
ENTER BUTTON
===================================================== */


const enterBtn =
document.getElementById("enterBtn");

enterBtn.addEventListener("click", ()=>{

  document.querySelector("#about")
  .scrollIntoView({
    behavior:"smooth"
  });


});


/* =====================================================
MAGNETIC HOVER
===================================================== */


const hoverCards =
document.querySelectorAll(
  ".project-card, .course-card, .album-card"
);


hoverCards.forEach((card)=>{


  card.addEventListener("mousemove",(e)=>{


    const rect =
    card.getBoundingClientRect();


    const x =
    e.clientX - rect.left;


    const y =
    e.clientY - rect.top;


    card.style.background =
    `
    radial-gradient(
    circle at ${x}px ${y}px,
    rgba(168,85,247,0.25),
    rgba(255,255,255,0.03)
    )
    `;


  });


  card.addEventListener("mouseleave",()=>{


    card.style.background =
    "rgba(255,255,255,0.04)";


  });


});


/* =====================================================
SMOOTH LINKS
===================================================== */


const navLinks =
document.querySelectorAll("nav a");


navLinks.forEach((link)=>{


  link.addEventListener("click",(e)=>{


    e.preventDefault();


    const target =
    document.querySelector(
      link.getAttribute("href")
    );


    if(target){
  target.scrollIntoView({
    behavior:"smooth"
  });
}
    });


  });


/* =====================================================
PARALLAX
===================================================== */


window.addEventListener("scroll",()=>{


  const scrollY = window.scrollY;


  document.querySelector(".hero")
  .style.backgroundPositionY =
  scrollY * 0.5 + "px";


});


/* =====================================================
GLOW EFFECT
===================================================== */


const tags =
document.querySelectorAll(".tags span");


tags.forEach((tag)=>{


  tag.addEventListener("mouseenter",()=>{


    cursor.style.transform =
    "translate(-50%,-50%) scale(2)";


  });


  tag.addEventListener("mouseleave",()=>{


    cursor.style.transform =
    "translate(-50%,-50%) scale(1)";


  });


});


/* =====================================================
RANDOM BACKGROUND LIGHTS
===================================================== */


function createGlow(){


  const glow =
  document.createElement("div");


  glow.style.position = "fixed";


  glow.style.width = "300px";
  glow.style.height = "300px";


  glow.style.borderRadius = "50%";


  glow.style.background =
  "rgba(168,85,247,0.05)";


  glow.style.filter = "blur(100px)";


  glow.style.left =
  Math.random() * 100 + "%";


  glow.style.top =
  Math.random() * 100 + "%";


  glow.style.zIndex = "-3";


  document.body.appendChild(glow);


}


for(let i = 0; i < 8; i++){


  createGlow();


}
