//asking user for the input
let numb = prompt("Enter the numbers (24, 65, 21, 5, 9, 32, 42, 80, 57):");
let namess = prompt("Enter the names (Zenvo, Erica, Jordie, Alicia, Redon):");
//merging the 2 arrays
let merged = [...numbers, ...names];
console.log("Merged Array:", mergedArray);
//then sorting the numbers in reverse order
let sortNum = [...numbers].sort((a, b) => b - a);
console.log("In reverse order:", sortNum);
//lastly sorting the names in alphabetic order
let sortNames = [...names].sort();
console.log("Sorted in alphabetic order:", sortNames);
