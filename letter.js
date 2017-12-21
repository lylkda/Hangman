function Letter(letter){
    this.letter = letter;
    this.display = "_";
}

Letter.prototype.match = function(guessedLetter){
    if (guessedLetter.toString().toLowerCase() == this.letter.toString().toLowerCase()){
        this.display = this.letter;
        return true;
    }
    return false;
}

module.exports = Letter;