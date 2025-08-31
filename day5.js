//100 Days Of Code Day 4

//Loops In JavaScript

//for loop

for(let i=0; i<=10;i++){
    console.log(i);
}

//for in loop used for objects

let std = {
    "name" : "Syed Nalain",
    "Class " : 10,
    "Roll no" : 1125
}

for (const key in std) {
     const element = std[key];
     console.log(key,element);
}

//for of loop

for (const char of "SYED") {
    console.log(char)
}

// while loop
let i = 0
while (i<6) {
    console.log(i);
    i++;
}

// do while loop
let a = 0
do {
    console.log(a);
    a++;
} while (a<=2);


//Practice questions 

// Print the multiplication table of 5

let num = 5;
for(let i = 1; i<=10; i++){
    console.log(
    `${num} x ${i} = ${num*i}`
    )
}


// Print all even numbers between 1 and 20.


for(let i = 0; i<=20;i+=2){

    console.log(i)
  
}

// Print all odd numbers between 1 and 20.


for(let i = 1; i<=20;i+=2){

    console.log(i)
  
}

//Print sum of numbers from 1 to 100

let sum = 0;

for(let i = 1; i<=100; i++){
 sum += i
}
console.log(sum)

