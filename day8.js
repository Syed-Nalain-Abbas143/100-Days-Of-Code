//100 Days of Code - Day 8

// Strings in JavaScript

let lastName = "Abbas"

console.log(lastName[0]);
console.log(lastName[1]);
console.log(lastName[2]);
console.log(lastName[3]);
console.log(lastName[4]);

console.log(lastName.length);

//template literals  ``

let firstName = "Nalain";

console.log(`My Name is ${firstName} ${lastName}`);

//Escape Sequence Characters

console.log("Nalain\nAbbas");

console.log("Syed\tNalain");

console.log("Syed \"Nalain\"");

console.log("Syed\'s");

console.log("C:\\Hello\\Murshad")

/* Strings are immutable Original String can't be changed 
We can save changes in another string. */


// String Properties & Methods

let friendName = "Ahmed";

console.log(friendName.toUpperCase());

console.log(friendName.toLowerCase());

console.log(friendName.concat(firstName));

console.log(friendName.slice(1,4));

console.log(friendName.replace("Ahmed","Jamil Ahmed"))

console.log(friendName.trim());
