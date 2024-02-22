const readline = require("readline-sync");
let health = 50;
let damage = 8;
let pack = {};
const playerName = readline.question("Welcome to the Colossal Adventure RPG! \nWhat is your name? ");
console.log(`\nHello ${playerName}! You will need to make it through the forest to win. \nYou start with 50hp. Good luck!`);
function Charactor(name, hp, attack, inventory) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.inventory = inventory;
    this.openPack = function(){
        console.log(`Player: ${this.name}`);
        console.log(`Health: ${this.hp}`);
        console.log(`Attack: ${this.attack}`);
        console.log(`Inventory: ${this.inventory}`);
    };
}
const user = new Charactor(playerName, health, damage, pack);
const enemy1 = new Charactor("Bat", 3, 5, ["wing"]);
const enemy2 = new Charactor("Wolf", 12, 10, ["fang"]);
const enemy3 = new Charactor("Bear", 25, 15, ["fur pelt"]);
let enemies = [enemy1, enemy2, enemy3];

let traveled = 1;
let distance = 10;
let i = 0;
while( i <= 100 ){
    const walk = readline.question(`\nYou are ${distance} steps from the other end of the forest. What would you like to do? \nPress 'w' to walk forward. Press 'p' to open your pack. `);

    if( traveled === 10 ){
        console.log(`Congratulations ${playerName}! You made it the forest without dying! You win the game`);
        i = 100;
    }

    if( walk === "w" || walk === "W" ){
        traveled++
        distance--
        let fight = Math.floor(Math.random() * 4);
        if( fight === 0 & traveled <= 9 ){
            let enemyGen = Math.floor(Math.random() * 10);

            if( enemyGen === 0 ){
                console.log(`\nA wild bear has appeared in front of you! What would you like to do?`)
                let bearhealth = enemy3.hp
                while(bearhealth > 0){
                    const bearFight = readline.question(" \nPress 'a' to attack. Press 'p' to open your pack. Press 'r' to try to run! ");
                    if(bearFight === "a" || bearFight === "A"){
                        // bearhealth = bearhealth - user.attack
                        //bear needs to attack here
                    }else if(bearFight === "r" || bearFight === "R"){
                        // code to run away
                        //bear also needs to attack here
                    }else if(bearFight === "p" || bearFight === "P" ){
                        user.openPack()
                    }else {
                        console.log("\nInvalid Input");
                    }
                    
                }
            } else if( enemyGen === 1 || enemyGen === 2 || enemyGen === 3 ){
                const wolfFight = readline.question("wolf");
           
            } else {
                const batFight = readline.question("bat");
           
            }
        }
    } else if( walk === "p" || walk === "P" ){
        user.openPack();
    } else {
        console.log("\nInvalid Input");
    }
    i++;
}


   