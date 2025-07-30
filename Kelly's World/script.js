// Typing Animation
ScrollReveal().reveal('.hero', {
  origin: 'top',
  distance: '100px',
  duration: 2000,
  delay: 100,
  easing: 'ease-in-out',
  reset: true
});

ScrollReveal().reveal('.page', {
  origin: 'bottom',
  distance: '100px',
  duration: 1500,
  delay: 300,
  reset: true
});

ScrollReveal().reveal('.glow-btn', {
  scale: 0.8,
  duration: 1000,
  delay: 500,
  easing: 'ease-in-out',
  reset: true
});

const textArray = ["Hi, I'm Kelly...", "A Web Designer...", "A Musician...", "An Actor...", "A Script Writer...", "A Model..."];
let typingDelay = 100;
let erasingDelay = 70;
let newTextDelay = 2000;
let textIndex = 0;
let charIndex = 0;

const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

function type() {
    if (charIndex < textArray[textIndex].length) {
        typedText.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedText.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        textIndex++;
        if (textIndex >= textArray.length) textIndex = 0;
        setTimeout(type, typingDelay);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});

// Mobile Menu Toggle
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
}

// Preloader removal after page load
window.addEventListener("load", () => {
    document.getElementById("preloader").style.display = "none";
});




const cursorGlow = document.querySelector('.cursor-glow');
document.addEventListener('mousemove', e => {
  cursorGlow.style.top = e.clientY + 'px';
  cursorGlow.style.left = e.clientX + 'px';
});




function flipToNextPage() {
  document.getElementById("page1").classList.add("flip");
  document.getElementById("page2").style.zIndex = "3";
}

function flipToPrevPage() {
  document.getElementById("page1").classList.remove("flip");
  document.getElementById("page2").style.zIndex = "1";


  const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

}















const canvas = document.getElementById("weather-effect");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let raindrops = [];

for (let i = 0; i < 100; i++) {
  raindrops.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    length: Math.random() * 20 + 10,
    speed: Math.random() * 4 + 4
  });
}

function drawRain() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = 'rgba(0,255,255,0.5)';
  ctx.lineWidth = 1;
  ctx.beginPath();

  for (let drop of raindrops) {
    ctx.moveTo(drop.x, drop.y);
    ctx.lineTo(drop.x, drop.y + drop.length);
  }

  ctx.stroke();
}

function updateRain() {
  for (let drop of raindrops) {
    drop.y += drop.speed;
    if (drop.y > canvas.height) {
      drop.y = -drop.length;
      drop.x = Math.random() * canvas.width;
    }
  }
}

function animateRain() {
  drawRain();
  updateRain();
  requestAnimationFrame(animateRain);
}

animateRain();






document.addEventListener("click", (e) => {
  for (let i = 0; i < 15; i++) {
    const spark = document.createElement("div");
    spark.className = "spark";
    spark.style.left = e.clientX + "px";
    spark.style.top = e.clientY + "px";
    document.body.appendChild(spark);

    const angle = Math.random() * 360;
    const distance = Math.random() * 60;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    spark.style.transform = `translate(${x}px, ${y}px)`;
    spark.style.opacity = 0;

    setTimeout(() => {
      spark.remove();
    }, 600);
  }
});






  const book = document.querySelector('.book');
  const nextBtn = document.getElementById('nextPageBtn');
  const prevBtn = document.getElementById('prevPageBtn');

  nextBtn.addEventListener('click', () => {
    book.classList.add('flip');
  });

  prevBtn.addEventListener('click', () => {
    book.classList.remove('flip');
  });

