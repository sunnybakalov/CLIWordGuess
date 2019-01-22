//this will import(require) Letter Constructor
//export Word
var Letter = require("./letter");

function Word(Letter){
  this.array = [];
  this.returnString = function() {
    guessed();
    console.log("returned string");
  }
  this.characterTaker = function() {
    checker();
  }
}

//An array of `new` Letter objects representing the letters of the underlying word
      // var superheroes = [];

      // function addSuperhero(name) {
      //   var s = new Superhero(name);
      //   superheroes.push(s);
      // }

      // addSuperhero("spiderman");
      // addSuperhero("batman");
      // addSuperhero("thor");
      // addSuperhero("deadpool");
      // addSuperhero("superman");

  //A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)
function characterTaker(checker){
  checker()
}
