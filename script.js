function randomX() {
    return Math.floor(Math.random() * 90) + 5;
}

function addFloatingFlower() {
    const garden = document.getElementById("garden");
    const flower = document.createElement("div");
    flower.className = "floating";
    flower.style.left = randomX() + "%";
    flower.textContent = "🌸";
    garden.appendChild(flower);

    setTimeout(() => flower.remove(), 6000);
}

function addFloatingButterfly() {
    const garden = document.getElementById("garden");
    const butterfly = document.createElement("div");
    butterfly.className = "floating";
    butterfly.style.left = randomX() + "%";
    butterfly.textContent = "🦋";
    garden.appendChild(butterfly);

    setTimeout(() => butterfly.remove(), 6000);
}

function showMessage() {
    alert("Mom, you make the world brighter. Happy Mother's Day! 💖");
}
