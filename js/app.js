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
  constructor(){
    this.name = name;
    this.hunger = 0;
    this.sleepiness = 0;
    this.boredom = 0;
    this.age = 0;
    this.alive = true;
  }

  changeName(name){
    //change the name in this.name
    //change the name in the DOM
  }

  changeHunger(hunger){

  }

  changeSleepiness(sleepiness){

  }

  changeBoredom(boredom){

  }

  changeAge(age){

  }
// Increase your pet's age every x minutes
  setAgeTimer(){     
    // grabbing the age span from html
    const $ageTimer = $('#age');
    const interval = setInterval(() =>{
        this.age++
        if(this.shouldPetDie()){
          clearInterval(interval); // stops the interval
          return;
        }
        // update the age on the dom
        $ageTimer.text(`Age: ${this.age}`)
    }, 1000) 
  }
  // Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.
  setHungerTimer(){     
    // grabbing the hunger span from html
    const $hungerTimer = $('#hunger');
    const interval = setInterval(() =>{
        if(this.shouldPetDie()){
          clearInterval(interval); // stops the interval
          this.killPet();
          return;
        }
        this.hunger++
        // update the hunger on the dom
        $hungerTimer.text(`Hunger: ${this.hunger}`)
    }, 1250) 
  }
  setSleepinessTimer(){     
  // Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.
  // grabbing the sleepiness span from html
    const $sleepinessTimer = $('#sleepiness');
    const interval = setInterval(() =>{
        if(this.shouldPetDie()){
          clearInterval(interval); // stops the interval
          this.killPet();
          return;
        }
        this.sleepiness++
        // update the sleepiness on the dom
        $sleepinessTimer.text(`Sleepiness: ${this.sleepiness}`)
    }, 1500) 
  }
  setBoredomTimer(){     
  // Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.
  // grabbing the bored span from html
    const $boredomTimer = $('#boredom');
    const interval = setInterval(() =>{
        if(this.shouldPetDie()){
          clearInterval(interval); // stops the interval
          this.killPet();
          return;
        }
        this.boredom++
        // update the boredom on the dom
        $boredomTimer.text(`Boredom: ${this.boredom}`)
    }, 1750)
  }
  shouldPetDie(){
    if(this.hunger === 10 || this.sleepiness === 10 || this. boredom === 10){
      
      return true;
    }

    return false;
  }

  killPet()
  {
    if (this.alive)
    {
      const $section = $('<section/>');
      $section.text('Game Over.  Your Pet has died.');
      $('body').prepend($section);
      this.alive = false;
    }
    else
    {
      //do nothing, pet is already dead
    }
  }
};
  
// Display a character of your choice on the screen to represent your pet
$('#tampic').width(219);
$('#tampic').height(300);

// Add the ability to name your pet.

let petName = '';
// Instatiate your Tomagotchi
let pet = new Tamagotchi('');


$('form').on('submit', (e) => {
    // console.log('clicked');  
    // console.log($('#input-box').val());
    petName = $('#input-box').val();
    const $petName = $('#petName');
    $petName.text(petName);// adds pet name to the DOM   
    
    pet.name = petName;// updates Tamagotchi name
    pet.setAgeTimer();
    pet.setHungerTimer();
    pet.setSleepinessTimer();
    pet.setBoredomTimer();
    console.log(pet); 
    event.preventDefault();
    $('#input-box').val('');   
  });



//You do not need a game object here...Try to make all functions in 
// the class and call the functions in the name input form functions
// const game = {
//   setAgeTimer(){
//     // Increase your pet's age every x minutes
//     // grabbing the age span from html
//     const $timer = $('#age');

//     const interval = setInterval(() =>{

//         while(pet.age <= 10){
//           pet.age++

//           clearInterval(interval); // stops the interval
//         } 
//         // update the age on the dom
//         $timer.text(`age: ${pet.age}`)

//     }, 1000) 
//   }
// }

// game.setAgeTimer();














