// INSTRUCTIONS: Build a command-line based zombie fighting game. 
// =========================================================================================================

// In this game, you and a zombie will each be given a certain amount of health. (Perhaps: You 70, Zombie 15).

// For each round, you will be asked to guess a random number between 1 and 5.
// If your guess matches the random number of the Zombie -- you inflict a random amount of damage between 1 and 5. 
// If you guess does not match the random number of the Zombie -- the Zombie inflicts a random amount of damage to you between 1 and 5.
// Each round the zombie is given a new random number and you must guess again. 

// The game ends when you or the zombie gets to 0 health. 

// Note: You should use the inquirer package to take in user commands.
// Major Warning: inquirer's prompt function is "asynchronous", which means that the majority of your game logic will need to be inside the .then() function for your prompt. 

// ===========================================================================================================


// Required Packages
// ==============================================================
var inquirer = require("inquirer");
var emojis = require('emojis-list');
console.log(emojis[0]);

// Game Variables
// ==============================================================
var players = [];

// Player Constructor
var Player= function( name, age, avatar){
    this.name = name;
    this.age = age;
    this.avatar = avatar;

};  

// Functions
// ==============================================================

function createPlayer(){
    inquirer.prompt([

        {
          type: "input",
          name: "name",
          message: "What is your name?"
        },
        {
            type: "input",
            name: "age",
            message: "What is your age?"
        },
        {
            type: "list",
            name: "avatar",
            message: "Which character would you like to use?",
            choices: ["cat","dog","fairy","poop"]
        },
        {   
            type: "list",
            name: "multiPlayer",
            message: "Would you like to add another player?",
            choices: ["yes","no"]
        }

      
      // After the prompt, store the user's response in a variable called location.
      ]).then(function(player) {
          console.log(player.multiPlayer);
          var player1 = new Player (player.name, player.age, player.avatar );
          players.push(player1);
          addAnotherPlayer(player.multiPlayer);
          
          
      });
};

function addAnotherPlayer (mp) {
    if (mp == "yes") {
        if (players.length === 2) {
            console.log("It appears you already have enough players to compete.  Let's get started!");
            playGame();
        } else if (players.length > 0) {
        console.log("Great lets add another player!");
          createPlayer();
        } 
    } else if ((mp == "no" ) && (players.length > 0)) {
        console.log("Great let's get started");
            console.log(players);
            playGame();
    }
};

function playGame() {
inquirer.prompt([

    {
      type: "list",
      name: "userGuess",
      message: "Guess my number:",
      choices: ["1","2","3","4","5"]
    }
  
  // After the prompt, store the user's response in a variable called location.
  ]).then(function(game) {
      var randomNum = Math.floor((Math.random() * 5) + 1);
      var userGuess = game.userGuess;
      

      console.log("Random Number " + randomNum);
      console.log("User Number " + userGuess);
      
      if ( randomNum === userGuess) {
          console.log("You Won!");
      } else {
          console.log("You lost try again");
      }
  });
};

function attack() {
    var battle = Math.floor((Math.random() * 10) + 1);


}


// Start Game
// ==============================================================

createPlayer();