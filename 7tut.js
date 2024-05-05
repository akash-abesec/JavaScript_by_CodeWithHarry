// Functions in Java Script
console.log("This is tut56");

function great(name, time){
    let name1 = "Name1";
    console.log(greatText + " " + name);
    console.log(name + " is a good boy");
}

 function sum(a,b,c) {
    let d = a+ b + c;
    return d;
    // this line will never execute(Unreacheble code)
    // console.log("Function is returned;")
}

let name = "Harry";
let name1 = "Akash";
let name2 = "Aman";
let name3 = "Star";
let greatText = "Good morning";
great(name,greatText);
great(name1,greatText);
great(name2,greatText);
great(name3,greatText);
let returnval = sum(1,2,3);

console.log(returnval);

// console.log(name + " is a good boy");
// console.log(name1 + " is a good boy");
// console.log(name2 + " is a good boy");
// console.log(name3 + " is a good boy");