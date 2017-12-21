var Letter = require('./letter');
// word: "test"
function Word(guessWord){
    this.word = []; 
    this.wrongGuesses = 0;
    var letters = guessWord.split("");
    for (var i = 0; i<letters.length; i++){
        this.word.push(new Letter(letters[i]));
    }
}

Word.prototype.gameState = function(){
    var wordView = ""
    for (var i = 0; i<this.word.length; i++){
    wordView += this.word[i].display + " ";
    }
    console.log(wordView);
}

Word.prototype.guess = function(answer){
    var matchFound = false;
    for (var i = 0; i<this.word.length; i++){
        if(this.word[i].match(answer)){
           matchFound = true;
        }
    }
    if(!matchFound){
        this.wrongGuesses++;
        console.log("INCORRECT GUESS!");
        console.log((10 - this.wrongGuesses) + " guesses left!\n");
    }
}

Word.prototype.end = function(){
    if (this.wrongGuesses === 10){
        return true;
    }
    for (var i = 0; i < this.word.length; i++){
       if (this.word[i].display !== this.word[i].letter){
           return false;
       }
    }
    return true;
} 
var Test = new Word("Test");
module.exports = Word;