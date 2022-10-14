let body = document.getElementsByTagName("body")[0]
body.innerHTML = "<h1 id='title'></h1>"
body.innerHTML += "<h1 id='answer'></h1>"
document.getElementById("title").innerText = "Hello World"
// var numBase = 5;
// var numAdd = 10;
// document.getElementById("title").innerText = numBase + numAdd
let userAge = 18;
let total = 150;
let discount = 0;
let payment = 150;
if (userAge < 18) {
    discount = 0.25
} else if (userAge >= 18 && userAge < 25) {
    discount = 0.15
} else if (userAge >= 25 && userAge < 35) {
    discount = 0.05
} else { }
payment = total - (total * discount)
// console.log(payment)
document.getElementById("answer").innerText += payment
