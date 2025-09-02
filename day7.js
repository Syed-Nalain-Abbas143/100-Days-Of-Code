//Day 7 - 100 Days of Code JavaScript


/* Exercise
Faulty calculator in Js that gives wrong calculations 10% of the time
*/

function funnyCalculator(){
    let a = prompt("Enter first number");

    let c = prompt("Enter operation");

    let b = prompt("Enter second number");

let random = Math.random();

let obj = {
    "+" : "-",
    "-" : "*",
    "*" : "/",
    "/" : "**"
}

if(random>0.1) {
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
} else{
 c = obj[c];
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
}

funnyCalculator();