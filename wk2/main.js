// Step 1A:
function Node(brand, model){
  this.brand = brand;
  this.models = model;
  this.next = null;
  return this
}
// search(Cars, 'bmw')

// Start making a linked list! Create an instance of Node with the value of blue. Create another instance of Node with the value of green. Set the .next of the blue node to the green node. You just made a linked list!

var h1 = new Node('blue')
console.log(h1)
var h2 = new Node('green')

// How do you get to the end or tail of a linked list? The .next of the tail should be null! Write a function addNode that receives the head of the linked list and value. It should use the value to create a new Node and add it to the end of the list. Hint: You'll need to access the tail of the linked list through the head.

function addNode(head, value) {
  var tail;
  var currentNode = head;
  while(currentNode) { // while currentNode is NOT null
    if (currentNode.next === null) {
        tail = currentNode
    }
    currentNode = currentNode.next
  }

  tail.next = new Node(value)
  return tail.next
}


// Write a function genLinkList that receives an array and generates a linked list with nodes corresponding to the index within the array.
function genLinkList0 (array) {
  var head = new Node(array[0]);

  for (var i = 1; i < array.length; i++) {
    var newNode = new Node(array[i]);
    head.next = newNode; 
  }

  return head;
}

function genLinkList (array) {
  var head = new Node(array[0]);

  for (var i = 1; i < array.length; i++) {
    addNode(head, array[i])
  }
  return head;
}

function genLinkList2 (array) {
  var head;
  array.forEach(function(elem, i){
    if (i == 0) head = new Node(elem);
    else addNode(head, elem)
  })
  return head;
}
// console.log(genLinkList([1,2,3]))

// Write a function displayList that receives the linked list and returns an array with all the nodes in the linked list. For example: ('a') => ('c') => ('d') => ('c')

// function displayList (head) {
//   var list = [];
//   var currentNode = head;
//   while (currentNode) {
//     list.push(head)
//   }
  

//   return list;
// }

// var LL = genLinkList([1,2,3]);

// // Given a linked list and a value we check the head of the linked list and see if that head is equal to the value. If so, return that head. If not, reassign said head and to its next property until reassigned head is equavalent to value parameter.

// function search(head,value){
//     var currentNode = this.head;
//     while(currentNode.next!==null){
//         currentNode = currentNode.next;
//         if(currentNode.value == value){
//             return currentNode
//         }
//     }
//     return "node not found"
// } 



