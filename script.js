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

/* Floating Butterflies with rainbow trails */
function addFloatingButterfly() {
    const garden = document.getElementById("garden");
    const butterfly = document.createElement("div");
    butterfly.className = "floating";
    butterfly.style.left = randomX() + "%";

    butterfly.textContent = "🦋";

    garden.appendChild(butterfly);

    // Rainbow trail
    for (let i = 0; i < 4; i++) {
        const trail = document.createElement("div");
        trail.className = "floating";
        trail.style.left = (randomX() + i) + "%";
        trail.style.animationDuration = (5 + i) + "s";
        trail.textContent = ["❤️","🧡","💛","💚","💙","💜"][i];
        garden.appendChild(trail);
        setTimeout(() => trail.remove(), 7000);
    }

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

    setTimeout(() => pet.remove(), 10000);
}

/* Popup Message */
function showMessage() {
    alert("Mom, we love you and hope you have the BEST day! Happy Mother's Day 💖");
}

