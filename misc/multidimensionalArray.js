function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
    // console.log(arr.length);
    // console.log(arr[0]);
    // console.log(arr[1]);
    // console.log(arr[2]);
  for(var i=0; i < arr.length; i++) {
      // console.log("elements of the array {}", arr[i]);
    for(var j=0; j < arr[i].length; j++) {
        // console.log("element of the inner array {}", arr[i][j]);
        product *= arr[i][j];
        console.log("The new result of product is {}", product);
    }
  }
    // Only change code above this line
    return product;
  }
  
  // Modify values below to test your code
  multiplyAll([[1,2],[3,4],[5,6,7]]);
  multiplyAll([[1],[2],[3]]);
  multiplyAll([[1,2],[3,4],[5,6,7]]);
  