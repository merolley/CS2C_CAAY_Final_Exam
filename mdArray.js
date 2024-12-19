//asking the user for the inputs
let namy = prompt("Enter the names (Genevieve,Juan,Luna,Gabriel,Elise):");
let agey = prompt("Enter the ages ( 24,65,21,5,9):");
//then splitting it with comma
let names = namy.split(",");
let ages = agey.split(",").map(Number);
//restructuring multi-dimensional array
let array = names.map((name, index) => [name, ages[index]]);
//then printing the result per line
array.forEach(item => console.log(`[Name: ${item[0]}, Age: ${item[1]}]`));
