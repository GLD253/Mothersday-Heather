function randomX() {
    return Math.floor(Math.random() * 80) + 10; // keeps items inside garden
}

function growFlower() {
    const garden = document.getElementById("garden");
    const flower = document.createElement("img");
    flower.src = "https://i.imgur.com/4AiXzf8.png"; // cute flower PNG
    flower.className = "flower";
    flower.style.left = randomX() + "%";
    garden.appendChild(flower);
}

function addCat() {
    const garden = document.getElementById("garden");
    const cat = document.createElement("img");
    cat.src = "https://i.imgur.com/JpQ9F0K.png"; // cute cat PNG
    cat.className = "animal";
    cat.style.left = randomX() + "%";
    garden.appendChild(cat);
}

function addDog() {
    const garden = document.getElementById("garden");
    const dog = document.createElement("img");
    dog.src = "https://i.imgur.com/3ZQ3Z5w.png"; // cute dog PNG
    dog.className = "animal";
    dog.style.left = randomX() + "%";
    garden.appendChild(dog);
}

function toggleMusic() {
    const song = document.getElementById("song");
    if (song.paused) {
        song.play();
    } else {
        song.pause();
    }
}
