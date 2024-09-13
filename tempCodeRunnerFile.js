
// document.addEventListener('DOMContentLoaded', () => {
//     const heading = document.querySelector('.bground');
//     heading.textContent = 'Background';
// });

let playerRace = document.querySelector(".player-race");
let playerClass = document.querySelector(".player-class");
let playerBG = document.querySelector(".bground");

let races = ["Dwarf", "Elf", "Halfling", "Human", "Dragonborn", "Gnome", "Half-Elf", "Half-Orc", "Tiefling", "Arakocra", "Genasi", "Goliath", "Aasimar", "Firebolg", "Kenku", "Lizardfolk", "Tabaxi", "Triton", "Bugbear","Goblin","Kobold","Orc","Tortle","Yuan-Ti Pureblood","Grung","Gith","Centaur","Loxodon","Minotaur","Vedalken","Verdam","Locathah","Changeling","Kalashtar","Shifter","Warforged","Leonin","Satyr"];
let classes = ["Artificer","Barbarian","Bard","Cleric","Druid","Fighter","Monk","Paladin","Ranger","Rogue","Sorcerer","Warlock","Wizard"];
let backGround = ["Artisan","Charlatan","Entertainer","Farmer","Guard","Guide","Hermit","Merchant","Noble","Sailor","Scribe","Wayfarer"];

playerRace.textContent = races[Math.floor(Math.random() * races.length)];
playerClass.textContent = classes[Math.floor(Math.random() * classes.length)];
playerBG.textContent = backGround[Math.floor(Math.random() * backGround.length)];

for (let x = 0; x<11; x++){
    playerRace.textContent = races[Math.floor(Math.random() * races.length)];
    playerClass.textContent = classes[Math.floor(Math.random() * classes.length)];
    playerBG.textContent = backGround[Math.floor(Math.random() * backGround.length)];
    console.log("playerRace");
}

