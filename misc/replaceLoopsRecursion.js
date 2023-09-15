function multiply(arr, n) {
    if (n <= 0) {
      return arr[0];
    } else {
      console.log(multiply(arr, n - 1) * arr[n]);
    }
  }

  multiply([1, 2, 3, 4], 4);