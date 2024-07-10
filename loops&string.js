// forloop

// for (let i = 0; i < 10; i++){
//     console.log(i);
// }

let str1 = "monmoy";

// like python here also can iterate over string
for(let i of str1){
    console.log(i);
}
// for objects we do "in" forloop and for strings and arrays we do "of" forloop
let student = {
    name: "Monmoy",
    roll: 1803125,
    CGPA: 3.00,
};

for(let key in student){
    console.log(key,": ", student[key]);
}

//Template literals

let name = `This is Monmoy And Age is ${18} years old`;
console.log(name); 

//escape characters like "\n" counts as only one character

let s = "Monmoy\nAlam";

console.log(s.length); //result is 11 characters

//string methods
//***Strings are immutable***
//toUpperCase
console.log(s.toUpperCase());

//toLowerCase
console.log(s.toLowerCase());

//trim- Removes whitespace 
let s1 = "   Monmoy   ";
console.log(s1.trim());

//split
let s2 = "Monmoy Alam";
console.log(s2.split(" "));

//slice- Returns a portion of a string
let s3 = "Monmoy";
console.log(s3.slice(0, 4));  //Ending value is non-inclusive

//concat
let s4 = "Monmoy";
let s5 = "Alam";
console.log(s4.concat(s5));

//replace
let s6 = "Monmoy";
console.log(s6.replace("Monmoy", "Hafiz"))

//charAt
let s7 = "Monmoy";
console.log(s7.charAt(0));