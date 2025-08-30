//100 Days of Code Day 4
// Conditionals in JavaScript

//if else 

let marks = 555;

if (marks>=500) {
    console.log("Congrats You passed examination")
}else{
    console.log("Work Hard next time.")
}


let age = 18;
let qualification = "Inter";

if(age>=18 && qualification==="Inter"){
    console.log("You are eligible for scholarship")
}else{
    console.log("You are not eligible")
}


let number = 40;
if(number%2==0){
      console.log("number is even")
}else{
    console.log("number is odd")
}


// if else if conditionals

let num = 85;

if(num>=90){
    console.log("A Grade")
}else if (num>=80) {
    console.log("B Grade")
}else if (num>=70) {
    console.log("C Grade")
}else if (num>=60) {
    console.log("D Grade")
}else if (num<60) {
    console.log("Fail")
}