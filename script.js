let musicStarted = false;

function playMusic() {
  if (!musicStarted) {
    const music = document.getElementById("bgMusic");
    music.volume = 0.4;
    music.play().catch(() => {});
    musicStarted = true;
  }
}

const messages = [
  "From the day we met ❤️",
  "You became my favorite person 🥰",
  "Every moment with you means everything 💫",
  "You are my today and all my tomorrows 💕"
];

const photos = [
  "assets/photos/photo1.jpg",
  "assets/photos/photo2.jpg",
  "assets/photos/photo3.jpg",
  "assets/photos/photo4.jpg",
  "assets/photos/photo5.jpg",
  "assets/photos/photo6.jpg",
  "assets/photos/photo7.jpg"
];

let messageIndex = 0;
let photoIndex = 0;
let stage = "messages"; // messages → photos → proposal

function nextMessage() {
  const message = document.getElementById("message");
  const photo = document.getElementById("memoryPhoto");
  const caption = document.getElementById("caption");
  const buttons = document.getElementById("proposalButtons");

  // STAGE 1 — TEXT MESSAGES
  if (stage === "messages") {
    if (messageIndex < messages.length) {
      message.innerText = messages[messageIndex];
      messageIndex++;
    } else {
      stage = "photos";
      message.innerText = "Our memories together 📸";
    }
    return;
  }

  // STAGE 2 — PHOTO SLIDESHOW
  if (stage === "photos") {
    photo.style.display = "block";
    caption.style.display = "block";

    if (photoIndex < photos.length) {
      photo.src = photos[photoIndex];
      caption.innerText = `Memory ${photoIndex + 1} 💖`;
      photoIndex++;
    } else {
      stage = "proposal";
      photo.style.display = "none";
      caption.style.display = "none";
      message.innerText = "I have something very important to ask you… 💍";
    }
    return;
  }

  // STAGE 3 — PROPOSAL
  if (stage === "proposal") {
    showProposal();
  }
}

function showProposal() {
  document.getElementById("message").innerText = "Will you marry me? 💍❤️";
  document.getElementById("proposalButtons").style.display = "block";
}

function yesClicked() {
  document.getElementById("proposalButtons").style.display = "none";
  document.getElementById("finalPage").style.display = "flex";
  launchConfetti();
}



// 😈 NO button escape logic (safe version)
document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("noBtn");

  noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
  });
});

function launchConfetti() {
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.backgroundColor =
      ["#ff4f7a", "#ffd1dc", "#ffffff"][Math.floor(Math.random() * 3)];
    confetti.style.animationDuration = Math.random() * 2 + 2 + "s";

    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 3000);
  }
}
