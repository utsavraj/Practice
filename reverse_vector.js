n_vector = [1,2,3,4,5,6,7,8,9]

//Without Recursion
function reverse_vector(a) {
  var reversing_vector = []
  for(var i = a.length - 1; i > -1; i--) {
    reversing_vector.push(a[i])
  }
  return reversing_vector
}

//With Recursion
function reverse_recursion(a) {
  //If array empty, return array
    if (!a.length) {
      return a;
    } 
    //Removing the head and adding it to the tail.
     return reverse_recursion(a.slice(1)).concat(a[0]);
}

console.log(reverse_vector(n_vector))
console.log(reverse_recursion(n_vector))
