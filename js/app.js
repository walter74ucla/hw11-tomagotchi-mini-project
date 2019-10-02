// Tomagotchi Mini-Project
// Description
// Let's use our front-end web development skills to create a "living" pet! We'll use HTML, CSS, and JavaScript/jQuery to interact with our pet.

// Requirements
// Fork and clone this repo for your tomagotchi pet
// Inside the hw11-tomagotchi-mini-project directory, create your standard file structure
// make a commit after you finish each one of the following
// Be sure to load the jQuery library
// In your app.js file, create a Class (JS Class, look at your notes if your forget) for your tomagotchi
// Instatiate your Tomagotchi
// Display a character of your choice on the screen to represent your pet
// Display the following metrics for your pet:
// Hunger (1-10 scale)
// Sleepiness (1-10 scale)
// Boredom (1-10 scale)
// Age
// Add buttons to the screen to feed your pet, turn off the lights, and play with your pet.
// Add the ability to name your pet.
// Style the page.
// Increase your pet's age every x minutes
// Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.
// You pet should die if Hunger, Boredom, or Sleepiness hits 10.
// Morph your pet at certain ages.
// Animate your pet across the screen while it's alive.
// Extras
// Have your tomagotchi give birth to baby tomagotchi...
// ...with special powers (extend the class)!
// Add an excercise() method to your tomagotchi, that affects certain properties
// Add anything you can think of... use your imagination!





// In your app.js file, create a Class
class Tamagotchi {
  // constructor(name){
  //   this.name = name;
    // this.cardsInHand = [];
    // this.cardInPlay = [];
    // this.score = 0;
    // this.roundsWon = 0;
  // }
  // greet(){
  //   console.log('Hi my name is' + this.name);
  // }
};

// Instatiate your Tomagotchi
const pet = new Tamagotchi();
console.log(pet);

// Display a character of your choice on the screen to represent your pet
$('#tampic').width(219);
$('#tampic').height(300);



