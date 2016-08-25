// This is the template for all problem-based hw assignments

function mainFunction () {
  return;
}

function asyncExample() {
  console.log('a');
  setTimeout(function() {
      console.log('b');
  }, 1000);
  setTimeout(function() {
      console.log('c');
  }, 1000);
  setTimeout(function() {
      console.log('d');
  }, 1000);
  console.log('e');
}

console.log(mainFunction())


