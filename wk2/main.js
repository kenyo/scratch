// Step 1A:
function Node(value){
  this.value = value;
  this.next = null;
}

// Start making a linked list! Create an instance of Node with the value of blue. Create another instance of Node with the value of green. Set the .next of the blue node to the green node. You just made a linked list!

var h1 = new Node('blue')
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

function genLinkList1 (array) {
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

console.log(genLinkList2([1, 2, 3]))