//Run this one to play game
var inquirer = require('inquirer');
var prompt = require('prompt');
var Word = require('./game');


rand = Math.floor(Math.random()*10);
var wordsArray = ["Jonghyun", "Taeyeon", "Tiffany", "Onew", "Jessica", "Luna", "Yoona", "SeungRi", "Bora", "YongHwa"]
var Test = new Word(wordsArray[rand]);


var askQ = function(){
        inquirer.prompt([
        {
            type: "input",
            name: "guessedLetter",
            message: "Korean Popstar Hangman! Guess a letter! "
        }
    ])
        .then(function(answer){
        Test.guess(answer.guessedLetter);
        Test.gameState();
        if (!Test.end()){
        askQ();
        }
        else {
            console.log("Game over!");
        }
    })
}
askQ();