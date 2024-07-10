function myFunction(){
    console.log("Hello World!");
};

myFunction();

function printFunction(str){
    console.log(str);
}
printFunction("Hello World!");

//Arrow functions
//example-sum
const sum = (a, b) => {
    console.log(a+b);
}
sum(4,9);
//Practice Problem

function vowelIdentifiers(str){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u"){
            count++;
}

    }
    return count;
}

let vowels = vowelIdentifiers("my name is monmoy alam");
console.log(vowels);

//Foreach loop its a callback function, meaning functions can be passed as parameters.
//Its an unique feature of JS
arr = [1,2,3,4,5];

arr.forEach(function printFunction(val) {
    console.log(val);
    
});

//using arrow function

arr.forEach((val) => console.log(val));

// Interview question: What is a higher order function in JS? 
// Callback function is a higher order function like forEach. This function (forEach) is a function which has a parameter which is a function itself.

//map function is also a callback function which returns a new array similar to forEach but the only differance is that a new array is returned from the map function.

arr.map( (val) => console.log(val*val) ) 
let newArray = arr.map(function squareFunction(val){
    return val*val;
}) 

console.log(newArray);

//filter function is also a callback function which returns a new array similar to forEach. Returns a new array where the condition is true.

let arrayEven = arr.filter(function printFunction(val) {
    return val%2 == 0;
    }
    
);
console.log(arrayEven);

//reduce function is also a callback function which returns a new array similar to forEach. It is used to reduce an array to a single value.

let sum1 = arr.reduce(function printFunction(total, val){
    return total + val;
});

console.log(sum1);

//finding the largest number using reduce function

let largest = arr.reduce(function printFunction(total, val){
    return total > val ? total : val;
});
console.log(largest);




