// "==" even compares a int to a string if the string contains a number 
// " === " compares int to int or string to string data type is strict

let age = 15;

if (age > 18){
    console.log("yes you can vote");
} else {
    console.log("No you cant vote");
}

// Ternary operator
age > 18 ? console.log("yes you can vote") : console.log("No you cant vote");

//promt for input

let name = prompt("Enter your name = ");
console.log(name);