let marks = [10, 20, 30, 40, 50];
let studentNames = ["Monmoy", "Sakib", "Tamim", "Rakib"];
console.log(marks);
console.log(marks.length);

//***Arrays are mutable***
//Pop- Delets Item from the end 
let poppedItem = marks.pop();
console.log(poppedItem);

//Push-Adds item at the end

marks.push("60");
console.log(marks);

//toString-Converts arrys to string, Doesn't change original array

console.log(marks.toString());

//concat-Combines two arrays
let concatArray = marks.concat(studentNames);
//console.log(concatArray.toString());

//unshift-Adds item at the beginning when push adds item at the end
marks.unshift("70");
console.log(marks);

//slice-Extracts part of an array, doesnt change the original array

console.log(marks.slice(2, 5));

//splice-Adds or removes items from an array, changes the original array
//array(start, deleteCount, add_item1, add_item2.....)

marks.splice(2, 0, "80");



