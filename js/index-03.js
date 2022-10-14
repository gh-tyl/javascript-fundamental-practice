let body = document.getElementsByTagName("body")[0]

function sayHi() {
    alert("Hey");
}
// sayHi()

// let studentName = "E"
// let students = ["A", "B", "C", "D", "E"]
// for (i = 0; i < students.length; i++) {
//     if (studentName == students[i]) {
//         break;
//     }
// }
// if (i == students.length) {
//     console.log("Not found")
// } else {
//     console.log(i)
// }

// let numbers = [20, 23, 25, 23, 68, 34, 67, 34, 56, 86]

// let numbers = []
// let length = 10
// for (i = 0; i < length; i++) {
//     numbers.push(Math.floor(Math.random() * 100))
// }

// let even = document.getElementsByTagName("ul")[0]
// let odd = document.getElementsByTagName("ul")[1]

// for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 == 0) {
//         even.innerHTML += "<li>" + numbers[i] + "</li>";
//     } else {
//         odd.innerHTML += "<li>" + numbers[i] + "</li>";
//     }
// }

// let student = {
//     fname: "Lucas",
//     country: "Brazil",
//     byear: "1920",
//     program: "Web Developer",
//     course: "Java Script"
// }

// let h2 = document.getElementsByTagName("h2");
// h2.innerHTML = `${student.fname} from ${student.country} is studying ${student.program}`

// let count = 0;
// for (let [key, value] of Object.entries(student)) {
//     h2[count].innerHTML = `${key} : ${value}`
//     count++;
// }

// let ul = document.getElementsByTagName("ul")[0]
// for (let property in student) {
//     ul.innerHTML += `<li> ${property} : ${student[property]}</li>`
// }

let numbers = []
let length = 10
for (i = 0; i < length; i++) {
    numbers.push(Math.floor(Math.random() * 100))
}
console.log(numbers)

function calculator(operator, number1, number2) {
    switch (operator) {
        case "+":
            answer = number1 + number2;
            break;
        case "-":
            answer = number1 - number2;
            break;
        case "*":
            answer = number1 * number2;
            break;
        case "/":
            answer = number1 / number2;
            break;
        case "%":
            answer = number1 % number2;
            break;
    }
    alert(answer);
}
// calculator("+", 2, 3)

// let student = {
//     fname: "Lucas",
//     country: "Brazil",
//     byear: "1920",
//     program: "Web Developer",
//     course: "Java Script",
//     showDetails: function () {
//         return `${this.fname} from ${this.country} born on ${this.byear}`;
//     }
// }

// let h2 = document.getElementsByTagName("h2")
// h2[0].innerHTML = `${student.fname} details`
// h2[1].innerHTML = student.showDetails()

// let ul = document.getElementsByTagName("ul")[0]
// for (let property in student) {
//     ul.innerHTML += `<li> ${property} : ${student[property]} : ${typeof student[property]}</li>`
// }

let student = {
    firstName: "Tyler",
    lastName: "Inari",
    country: "Japan",
    singers: ["aaa", "bbb", "ccc", "ddd", "eee"],
    showDetails: function () {
        let output = "";
        for (singer in this.singers) {
            output += `<li> ${this.singers[singer]}</li>`
        }
        return output
    }
}

let h2 = document.createElement("h2")
body.appendChild(h2)
h2.innerHTML = `${student.firstName} details`

let ul = document.createElement("ul")
let ol = document.createElement("ol")
body.appendChild(ul)
body.appendChild(ol)

for (let property in student) {
    (typeof student[property] != "function") ? ul.innerHTML += `<li> ${student[property]} </li>` : ol.innerHTML = student[property]();
}
    // ol.innerHTML = student.showDetails();
