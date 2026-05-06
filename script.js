function randomX() {
    return Math.floor(Math.random() * 90) + 5;
}

/* Falling Flowers */
function addFallingFlower() {
    const garden = document.getElementById("garden");
    const flower = document.createElement("div");
    flower.className = "falling";
    flower.style.left = randomX() + "%";

    const flowers = ["🌸", "🌼", "🌺", "💐"];
    flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];

    garden.appendChild(flower);
    setTimeout(() => flower.remove(), 5000);
}

/* Exploding Butterflies */
function addExplodingButterfly() {
    const garden = document.getElementById("garden");
    const butterfly = document.createElement("div");
    butterfly.className = "exploding";
    butterfly.style.left = randomX() + "%";
    butterfly.style.top = "250px";
    butterfly.textContent = "🦋";

    garden.appendChild(butterfly);
    setTimeout(() => butterfly.remove(), 1200);
}

/* Burst Sparkles */
function addBurstSparkles() {
    const garden = document.getElementById("garden");
    for (let i = 0; i < 6; i++) {
        const sparkle = document.createElement("div");
        sparkle.className = "burst";
        sparkle.style.left = randomX() + "%";
        sparkle.style.top = "250px";
        sparkle.textContent = "✨";
        garden.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 1200);
    }
}

/* Wish spark */
document.addEventListener("click", function(e) {
    const wish = document.createElement("div");
    wish.className = "wish";
    wish.style.left = e.clientX + "px";
    wish.style.top = e.clientY + "px";
    wish.textContent = "🌟";
    document.body.appendChild(wish);
    setTimeout(() => wish.remove(), 2000);
});

/* Letter */
let letterOpen = false;

function toggleLetter() {
    const letter = document.getElementById("letter");

    if (!letterOpen) {
        letter.style.display = "block";
        letter.innerHTML = "We made this song just for you!! 💖";

        for (let i = 0; i < 12; i++) {
            const confetti = document.createElement("div");
            confetti.className = "sunflower";
            confetti.textContent = "🌻";
            confetti.style.left = (Math.random() * 90 + 5) + "%";
            confetti.style.top = "0px";
            document.body.appendChild(confetti);
            setTimeout(() => confetti.remove(), 2000);
        }

        letterOpen = true;
    } else {
        letter.style.display = "none";
        letterOpen = false;
    }
}

/* Continuous falling confetti */
function createConfetti() {
    const container = document.getElementById("confetti-container");
    const confetti = document.createElement("div");
    confetti.className = "confetti";

    const shapes = ["🌸", "🌼", "🌺", "💛"];
    confetti.textContent = shapes[Math.floor(Math.random() * shapes.length)];

    confetti.style.left = Math.random() * 100 + "%";
    confetti.style.animationDuration = (3 + Math.random() * 3) + "s";

    container.appendChild(confetti);

    setTimeout(() => confetti.remove(), 5000);
}

setInterval(createConfetti, 500);
