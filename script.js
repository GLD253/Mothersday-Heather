function randomX() {
    return Math.floor(Math.random() * 90) + 5;
}

/* Floating Flowers */
function addFloatingFlower() {
    const garden = document.getElementById("garden");
    const flower = document.createElement("div");
    flower.className = "floating";
    flower.style.left = randomX() + "%";

    const flowers = ["🌸", "🌼", "🌺", "💐"];
    flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];

    garden.appendChild(flower);
    setTimeout(() => flower.remove(), 7000);
}

/* Floating Butterflies */
function addFloatingButterfly() {
    const garden = document.getElementById("garden");
    const butterfly = document.createElement("div");
    butterfly.className = "floating";
    butterfly.style.left = randomX() + "%";
    butterfly.textContent = "🦋";
    garden.appendChild(butterfly);

    const colors = ["❤️","🧡","💛","💚","💙","💜"];
    colors.forEach((c, i) => {
        const trail = document.createElement("div");
        trail.className = "floating";
        trail.style.left = (randomX() + i) + "%";
        trail.style.animationDuration = (5 + i) + "s";
        trail.textContent = c;
        garden.appendChild(trail);
        setTimeout(() => trail.remove(), 7000);
    });

    setTimeout(() => butterfly.remove(), 7000);
}

/* Sparkles */
function addSparkles() {
    const garden = document.getElementById("garden");
    for (let i = 0; i < 8; i++) {
        const sparkle = document.createElement("div");
        sparkle.className = "sparkle";
        sparkle.style.left = randomX() + "%";
        sparkle.textContent = "✨";
        garden.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 4000);
    }
}

/* Pets */
function addPet() {
    const garden = document.getElementById("garden");
    const pet = document.createElement("div");
    pet.className = "pet";
    pet.style.left = randomX() + "%";

    const pets = ["🐱", "🐶", "🐰", "🐥"];
    pet.textContent = pets[Math.floor(Math.random() * pets.length)];

    garden.appendChild(pet);
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

/* Letter + sunflower confetti */
let letterOpen = false;

function toggleLetter() {
    const letter = document.getElementById("letter");

    if (!letterOpen) {
        letter.style.display = "block";
        letter.innerHTML = "Happy Mother's Day to the most amazing and beautiful mom in the world!!!!! 💖";

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
