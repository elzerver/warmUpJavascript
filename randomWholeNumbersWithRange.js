// Example
function ourRandomRange(ourMin, ourMax) {

    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
  }
  
  ourRandomRange(1, 9);
  
  // Only change code below this line.
  
  function randomRange(myMin, myMax) {
    
    if(!myMin){
        return console.error("myMin is undefined fix it");
    }

    if(!myMax) {
        return console.error("myMax is undefined fix it");
    }

    var randomNumber = Math.floor(Math.random() * (myMin - myMax +1 )) + myMin;

    console.log(randomNumber);

    var result;
    
    if(randomNumber >= myMin && randomNumber <= myMax) {

        result = randomNumber;

    }

    return result;
  
  }
  
  // Change these values to test your function
  var myRandom = randomRange(5, 15);
  