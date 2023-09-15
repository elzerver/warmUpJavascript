function count(n) {
    if (n === 1) {
      return [1];
    } else {
      var numbers = count(n - 1); 
      numbers.push(n);
      return numbers;
    }
  }

  console.log(count(10));