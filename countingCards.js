var count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        count += 1;
        var response = count + " Bet";
        console.log(response);
        return response;
        break;
    case 7:
    case 8:
    case 9:
        // console.log(count);
        var response = count + " Hold";
        console.log(response);
        return response;
        break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
        count -= 1;
        var response = count + " Hold";
        console.log(response);
        return response;
       // console.log(count);
        break;
    default:
        break;
}

  // Only change code above this line
  console.log(count);
}


// Add/remove calls to test your function.
// Note: Only the last will display
// cc(2); cc(3); cc(7); cc('K'); cc('A');
// console.log("########");
// cc(2); cc(3); cc(4); cc(5); cc(6);
// console.log("########");
cc(2); cc('J'); cc(9); cc(2); cc(7);
// console.log("########");
// cc(2); cc(2); cc(10);
