//Browser gives us an object in JS names window which can access the html css of the codebase. We can access elements of html using the window object or directly the document object as the window object is global.

//Console.dir() prints an object in the console
console.dir(window.document.head)

// We can select html elements using id or class name

document.getElementById("heading"); 

let class1 = document.getElementsByClassName("heading");

console.dir(class1)

//Acssessing the html elements by tag

let tag = document.getElementsByTagName("p");
console.dir(tag);

//Acssessing the html elements by query selector
// We can pass either id or class or tag

let classs = document.querySelectorAll(".heading");
console.dir(classs);

let query = document.querySelector("p");



