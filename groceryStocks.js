//array for the input
let groceryStack = [];
// function for peek for cart
function peek() {
  if (groceryStack.length === 0) {
    return "Stack is empty.";
  } else {
    return groceryStack[groceryStack.length - 1];
  }
}
// function for push, adds an item to the stack
function push(item) {
  groceryStack.push(item);
  console.log("Updated Stack:", groceryStack);
}
//function for pop, removes the last item from the stack
function pop() {
  if (groceryStack.length === 0) {
    console.log("Stack is empty.");
  } else {
    let removedItem = groceryStack.pop();
    console.log("Removed item:", removedItem);
    console.log("Updated Stack:", groceryStack);
  }
}
//collect 5 grocery items from the user
for (let i = 0; i < 5; i++) {
  let item = prompt(`Enter grocery item ${i + 1}:`);
  push(item);
}
console.log("Peek:", peek()); //printing the item
pop(); //removing the last item

