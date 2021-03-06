import { SpaceLocation } from './SpaceLocation';

// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 

// Part 1: Declare (5) Variables With Type

// Part 1: Declare (5) Variables With Type---------------

//let spacecraftName : string = "Determination";
//let speedMph: number = 17500;
let kilometersToMars : number =225000000;
let kilometersToTheMoon : number = 384400;
//let milesPerKilometer : number = 0.621;

//Part 2: Print Days to Mars----------

// let milesToMars : number = kilometersToMars*milesPerKilometer;
// let hoursToMars : number = milesToMars / speedMph ;
// let daysToMars : number = hoursToMars / 24;

// // Code an output statement here (use a template literal):

// console.log(`${spacecraftName} would take ${daysToMars} days to get to Mars`);

// // Part 2: Print Days to Mars
// console.log(daysToMars);


// // Code an output statement here (use a template literal):



// // Part 3: Create a Function ("getDaysToLocation")
// function getDaysToLocation(kilometerAway: number) : number {
//     let milesAway : number = kilometerAway * milesPerKilometer;
//     let hoursToLocation : number = milesAway / speedMph ;
//     let daysToMoon : number = hoursToLocation /24;
//     return daysToMoon;
    
//     }
//     console.log( `${spacecraftName} would take ${getDaysToLocation(kilometersToTheMoon)} days to get to Moon`);
    
//     //Move your output statement from part 2 here. Update the template literal to call
    
//     console.log( `${spacecraftName} would take ${getDaysToLocation(kilometersToTheMoon)} days to get to Moon`);
//     //the function and print the outputs for a Mars trip and a moon trip.


// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.



// create a spacecraft class here
class Spacecraft{
    milesPerKilometer: number = 0.621;
    name: string;
speedMph: number;
    constructor(name : string,speedMph: number){
        this.name = name;
        this.speedMph = speedMph;
    }
    // Create an instance of the class here:
    // instance of the class.
    getDaysToLocation(kilometerAway: number) : number {
        let milesAway : number = kilometerAway *this.milesPerKilometer;
        let hoursToLocation : number = milesAway / this.speedMph ;
        let daysToMoon : number = hoursToLocation /24;
        return daysToMoon;
    }
    printDaysToLocation(location: SpaceLocation) {
        console.log(`${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
     }

}


let spaceShuttle = new Spacecraft("Determination",17500);
// Move your output statements from part 3 here. Update the template literals use the

//console.log( `${spaceShuttle.name} would take ${spaceShuttle.getDaysToLocation(kilometerToTheMoon)} days to get to Moon`);
//console.log( `${spaceShuttle.name} would take ${spaceShuttle.getDaysToLocation(kilometersToMars)} days to get to Moon`);

// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.


// Add the printDaysToLocation function to the Spacecraft class.

// Paste in the code from step 6 here:
spaceShuttle.printDaysToLocation(new SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation('the Moon', kilometersToTheMoon));