//100 Days of Code -- Day 9

//Exercise : Random Business name Generator

let adj = {
    "1" : "Crazy",
    "2" : "Amazing",
    "3" : "Fire"
}

let shopName = {
    "1":"Engine",
    "2":"Food",
    "3":"Garments",
}

let anotherWord = {
   "1" : "Bros",
    "2": "Limited",
    "3": "Hub"
}

function random(){
    let randomNumber = Math.floor(Math.random()*3)+1;
    return randomNumber
}

function nameGen(){
    let first = adj[random()];
    let second = shopName[random()];
    let third = anotherWord[random()];

   console.log(`${first} ${second} ${third}`);
}
nameGen();