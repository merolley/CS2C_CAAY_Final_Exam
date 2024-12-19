//creating a class node
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  //defining the lonked list
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  //appending the new node
    append(value) {
      const newNode = new Node(value);
  
      if (this.head === null) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next !== null) {
          current = current.next;
        }
        current.next = newNode;
      }
      this.size++;
      this.print(); //then printing after appending
    }
  //printing the link lis
    print() {
      if (this.head === null) {
        console.log("Linked list is empty.");
        return;
      }
  
      let current = this.head;
      let listString = "";
  
      while (current !== null) {
        listString += current.value;
        if (current.next !== null) {
          listString += " -> ";
        }
        current = current.next;
      }
  
      console.log( listString);
    }
  }
  const myLinkedList = new LinkedList();
  //printing the results
  myLinkedList.append("Data Structures-Array");
  myLinkedList.append("Variable Type-Integer");
  myLinkedList.append("Sorting Algorithm-Bubble Sort");
   
   