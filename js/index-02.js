let body = document.getElementsByTagName("body")[0]
let ul = document.createElement("ul")
body.appendChild(ul)

let students = ["A", "B", "C", "D", "E"];
let count = 0;
while (count < students.length) {
    console.log("<li>" + students[count] + "</li>")
    ul.innerHTML += "<li>" + students[count] + "</li>";
    count++;
}

// let tax = 2.5

// let food = (180 + 120 + 123) * tax
// let cloth = (23 + 22 + 123) * tax
// let game = (180 + 54 + 234) * tax

// let count = 1
// // document.getElementById("result").innerText = count
// let h1 = document.getElementsByTagName("h1")
// console.log(h1)
// h1[0].innerText = count

let anyType = "SC";
let output;
switch (anyType) {
    case "PT":
        output = "Painting";
        console.log(output)
    // break;
    case "SC":
        output = "Sculpture";
        console.log(output)
    // break;
    case "AL":
        output = "AL";
        console.log(output)
    // break;
    default:
        output = "Other"
        console.log(output)
}

// console.log(output)

// let x;
// let y;
// x = (y == 4) ? "y is 4" : "y is not 4";
// console.log(x)

// let actors = ["Will Smith", "Tom Hanks", "Brad Pitt", "Samuel L. Jackson", "Denzel Washington"]
// console.log(actors)

// let count = 0;
// while (count < 10) {
//     console.log(count)
//     count++;
// }

// count = 0;
// do {
//     console.log(count);
//     count++;
// } while (count < 10)

// count = 0;
// do {
//     console.log(++count);
// } while (count < 10)

// let actors = ["Will Smith", "Tom Hanks", "Brad Pitt", "Samuel L. Jackson", "Denzel Washington"]
// let count = 0;
// while (count < actors.length) {
//     console.log(actors[count])
//     count++;
// }

// let years = [20, 50, 2, 12, 85, 89, 67, 102, 1, 25];
// let maximum = years[0]
// let minimum = years[0]
// let sum = 0
// let average = 0
// let count = 0

// while (count < years.length) {
//     maximum = (years[count] > maximum) ? years[count] : maximum;
//     minimum = (years[count] < minimum) ? years[count] : minimum;
//     // if (years[count] > maximum) {
//     //     maximum = years[count]
//     // }
//     // if (years[count] < minimum) {
//     //     minimum = years[count]
//     // }
//     sum += years[count]
//     count++
// }

// average = sum / years.length

// console.log(maximum)
// console.log(minimum)
// console.log(sum)
// console.log(average)

// let studentName = "C"
// let students = ["A", "B", "C", "D", "E"]
// let count = 0
// let isExist = false

// while (count < students.length) {
//     if (studentName == students[count]) {
//         isExist = true
//         console.log(count)
//         break
//     }
//     count++
// }
// if (!isExist) {
//     console.log("Not found")
// }

// count = 0

// while (count < students.length) {
//     if (studentName == students[count]) {
//         break;
//     }
//     count++
// }
// if (count == students.length) {
//     console.log("Not found")
// } else {
//     console.log(count)
// }
