for (var i = 1; i <= 100; i++) {

    if ((i % 3) && !(i % 5)) {
        console.log("Fizz");
    } else if (!(i % 3) && (i % 5)) {
        console.log("Buzz");
    } else if (!(i % 3) && !(i % 5)) {
        console.log("Fizzbuzz");
    } else {
        console.log(i);
    }
}