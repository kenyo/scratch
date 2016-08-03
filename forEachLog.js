arr = [2, 8, 3, 12, 6, 10, 4, 1];
function quicksort(arr){
    console.log('quicksort called!!!!!!!', arguments)
    if(arr.length === 0) return arr;
    var left = [];
    var right = [];
    var pivot = arr[0];
    arr.forEach(function(num, index){
        if(index >0){
             if(num < pivot) left.push(num);
             else right.push(num);
        }
        console.log(num, left, right)
    })

    return quicksort(left).concat(pivot, quicksort(right));
}

console.log(quicksort(arr))