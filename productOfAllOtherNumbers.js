// You have an array of integers, and for each index you want to find the product of every integer except the integer at that index. Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products. However, do not use division in your answer.

var arr = [10,2,3,7,6];


function getProductsOfAllIntsExceptAtIndex(intArray) {
  var answerArray = intArray.map(x => arr.slice());

  return answerArray.map((x, i) =>
    x.slice(0, i).concat(x.slice(i + 1))
  ).map(arr => arr.reduce((y, z) => y*z));

}

console.log(getProductsOfAllIntsExceptAtIndex(arr));