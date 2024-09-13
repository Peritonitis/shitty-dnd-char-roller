let playerRace = document.querySelector(".player-race");
let playerClass = document.querySelector(".player-class");
let playerBG = document.querySelector(".bground");
let btn = document.querySelector("#boton");

let races = ["Dwarf", "Elf", "Halfling", "Human", "Dragonborn", "Gnome", "Half-Elf", "Half-Orc", "Tiefling", "Arakocra", "Genasi", "Goliath", "Aasimar", "Firebolg", "Kenku", "Lizardfolk", "Tabaxi", "Triton", "Bugbear","Goblin","Kobold","Orc","Tortle","Yuan-Ti Pureblood","Grung","Gith","Centaur","Loxodon","Minotaur","Vedalken","Verdam","Locathah","Changeling","Kalashtar","Shifter","Warforged","Leonin","Satyr"];
let classes = ["Artificer","Barbarian","Bard","Cleric","Druid","Fighter","Monk","Paladin","Ranger","Rogue","Sorcerer","Warlock","Wizard"];
let backGround = ["Artisan","Charlatan","Entertainer","Farmer","Guard","Guide","Hermit","Merchant","Noble","Sailor","Scribe","Wayfarer"];

// playerRace.textContent = races[Math.floor(Math.random() * races.length)];
// playerClass.textContent = classes[Math.floor(Math.random() * classes.length)];
// playerBG.textContent = backGround[Math.floor(Math.random() * backGround.length)];


 
let delay = 10; // Initial delay in milliseconds
let counter = 0;

function updateContent() {
    if (counter >= 30) {
        counter = 0;
        delay = 1;
        return; // Stop the execution after 18 updates
    }

    playerRace.textContent = races[Math.floor(Math.random() * races.length)];
    playerClass.textContent = classes[Math.floor(Math.random() * classes.length)];
    playerBG.textContent = backGround[Math.floor(Math.random() * backGround.length)];
    let tick = new Audio(src="tick.mp3");
    tick.play();
    console.log(playerRace.textContent);

    counter++;

    // Decrease the delay for the next iteration (e.g., by 100 milliseconds)
    delay += 15;

    // Schedule the next execution
    setTimeout(updateContent, delay);
}

btn.addEventListener("click", updateContent);

