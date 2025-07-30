// Cursor sound
document.getElementById("submitBtn").addEventListener("click", () => {
  document.getElementById("clickSound").play();
});

// ✨ Live typing effect
const typeWriter = document.getElementById("typeWriter");
const text = "Let's Connect 💬";
let index = 0;
function type() {
  if (index < text.length) {
    typeWriter.innerHTML += text.charAt(index);
    index++;
    setTimeout(type, 100);
  }
}
type();

// ✉️ Flying emoji on submit
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const emoji = document.createElement("div");
  emoji.textContent = "✉️";
  emoji.style.position = "fixed";
  emoji.style.fontSize = "2rem";
  emoji.style.left = "50%";
  emoji.style.top = "50%";
  emoji.style.animation = "fly 2s forwards";
  document.body.appendChild(emoji);

  setTimeout(() => emoji.remove(), 2000);
});

// Fly animation
const style = document.createElement('style');
style.innerHTML = `
@keyframes fly {
  0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
  100% { transform: translate(-50%, -200%) scale(2); opacity: 0; }
}`;
document.head.appendChild(style);

// ❄️ Snow animation
const canvas = document.getElementById("snow");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let snowflakes = [];
for (let i = 0; i < 100; i++) {
  snowflakes.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 4 + 1,
    d: Math.random() + 1
  });
}

function drawSnow() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.beginPath();
  for (let i = 0; i < snowflakes.length; i++) {
    let f = snowflakes[i];
    ctx.moveTo(f.x, f.y);
    ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
  }
  ctx.fill();
  moveSnow();
}

function moveSnow() {
  for (let i = 0; i < snowflakes.length; i++) {
    let f = snowflakes[i];
    f.y += f.d;
    if (f.y > canvas.height) {
      snowflakes[i] = {
        x: Math.random() * canvas.width,
        y: 0,
        r: f.r,
        d: f.d
      };
    }
  }
}

setInterval(drawSnow, 25);

// 🗺️ Live map (uses browser GPS)
function initMap() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: lat, lng: lng },
        zoom: 15,
      });
      new google.maps.Marker({
        position: { lat: lat, lng: lng },
        map: map,
        title: "You are here! 📍"
      });
    });
  } else {
    alert("Geolocation not supported");
  }
}



  const form = document.querySelector("form");
  const success = document.getElementById("successMessage");

  form.addEventListener("submit", () => {
    success.style.display = "block";
  });

