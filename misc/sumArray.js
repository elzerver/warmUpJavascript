function simpleArraySum(ar) {
    /*
     * Write your code here.
     */
    var total = 0;

    for(var item in ar){
        // console.log(item);
        var index = item;
        value = ar[index];
        total = total + value;
    }
    console.log(total);
}

simpleArraySum([1, 2, 3, 4, 10, 11]);