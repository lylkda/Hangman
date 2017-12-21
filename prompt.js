var Letter = require('./letter');
// word: "test"
function Word(word){
    this.word = []; 
    var letters = word.split("");
    for (var i = 0; i<letters.length; i++){
        this.word.push(new Letter(letters[i]));
    }
    console.log(word);
}

Word("Test");
