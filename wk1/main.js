// Step 1A:
function Node(value){
  this.value = value;
  this.next = null;
}

// // Step 2A:
// var head = new Node ('blue');
// var head1 = new Node('green');

// // Step 3A:
// function addNode(head,value) {
//   var currentNode = head;
//   var nextNode = new Node(value);
  
//   while(currentNode.next !== null){
//   currentNode = currentNode.next;
  
//   }
//   currentNode.next = new Node(value); //New Tail.
// }

// // addNode(head,'purple');

// // Step 4A:
// function getLinkList(array) {
//     var head = new Node(array[0]); //Constructor Function
//     // console.log(head)
//   for(var i = 1; i <= array.length; i++){
//     var arrayNode = addNode(head,array[i])

//   }
//   return head;
// }
// // getLinkList([8, 'meow','purple']);


// // Step 5A:
// // (ADVANCED TO QUESTION 1B)

// // Step 6A:
// // (ADVANCED TO QUESTION 1B)

// // Step 1B:
// function LinkedList() { //construction function
//   this.head = undefined,
//   this.tail = undefined
// }

// // Step 2B:
// var linklist = new LinkedList()

// LinkedList.prototype.addTail = function (value) {
//   if (this.head && this.tail) {
//     this.tail = new addNode(this.head, value)
//   }  else {  
//     this.head = new Node(value)
//     this.tail = this.head
//   }
// }


// LinkedList.prototype.addHead = function (value) {
//   if (this.head && this.tail) {
//     var oldHead = this.head;
//     this.head = new Node(value);
//     this.head.next = oldHead;
//   } else {
//     this.head = new Node(value);
//     this.tail = this.head
//   }
// }
var person = new Node('kenny')
console.log(Node)

