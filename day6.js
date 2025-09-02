// Functions in JavaScript 

function greeting(name) {
    console.log("Hey"+ name +"How are you doing?");
}
greeting("Syed Nalain ");
greeting(" Abbas ");
greeting(" Ali ");


function sum(a,b){
 return a+b;
}

console.log(sum(7,15));


function product(a,b,c=4) {
    return a*b*c;
}

console.log(product(5,2))


//Arrow Functions

const add = (a,b)=>{
    return a+b;
}
console.log(add(10,50));



//Factorial of a number using function

function factorial(n){
    let result = 1;
    for (let i = 1; i <=n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5));


//right traingle
function rightTriangle(n){
  for(let i=1; i<=n;i++){
    let row = ""
    for(let j=1;j<=i;j++){
        row+="* ";
    }
    console.log(row)
  }
}
rightTriangle(4);