var btn = document.getElementById('btn');
btn.addEventListener("click", function () {
    document.getElementById("list").classList = "block";
})


for (var i = 1; i <= 100; i++) {
    if ((i % 3) && !(i % 5)) {
        document.getElementById('list').innerHTML += "<li> Fizz </li>";
    } else if (!(i % 3) && (i % 5)) {
        document.getElementById('list').innerHTML += "<li> Buzz </li>";
    } else if (!(i % 3) && !(i % 5)) {
        document.getElementById('list').innerHTML += "<li> FizzBuzz </li>";
    } else {
        document.getElementById('list').innerHTML += "<li>" + i + "</li>";
    }
}