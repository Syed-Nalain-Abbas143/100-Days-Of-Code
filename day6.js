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