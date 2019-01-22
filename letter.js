// export Letter Constructor

module.exports = function Letter(letter) {
    //A string value
    this.letter = letter;
    //A boolean value
    this.new = false;
    //returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
    this.guessed = function(){
        console.log("hello world")
    };
    //takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if its guessed correctly
    this.checker = function(){
        console.log("second function")
    }
}
