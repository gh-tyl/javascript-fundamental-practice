
// function student(fileName, lastName, country, bdate, program, singers) {
//     this.fileName = fileName;
//     this.lastName = lastName;
//     this.country = country;
//     this.bdate = bdate;
//     this.program = program;
//     this.singers = singers;
//     this.showDetails = function () {
//         return `${this.fileName} ${this.lastName}`
//     }
//     this.showSingers = function () {
//         let output = ""
//         for (singer in singers) {
//             output += `<li>${singers[singer]}</li>`
//         }
//         return output
//     }
// }
// const Tyler = new student("Tyler", "Inari", "Japan", "1999", "Web Developer", ["aaa", "bbb", "ccc", "ddd", "eee"])
// const Lucas = new student("Lucas", "Paglia Grisa", "Brazil", "1997", "Web Developer", ["aaa", "bbb", "ccc", "ddd", "eee"])
// let students = [Tyler, Lucas]
// let body = document.getElementsByTagName("body")[0]
// console.log(body)
// for (let idx in students) {
//     body.innerHTML += "<h1></h1>"
//     h1 = document.getElementsByTagName("h1")[idx]
//     h1.innerHTML = students[idx].showDetails()

//     body.innerHTML += "<ul></ul>"
//     body.innerHTML += "<ol></ol>"
//     let ul = document.getElementsByTagName("ul")[idx]
//     let ol = document.getElementsByTagName("ol")[idx]
//     for (let property in students[idx]) {
//         (typeof students[idx][property] != "function") ? ul.innerHTML += `< li > ${ students[idx][property] }</> ` : ol.innerHTML = students[idx][property]();
//     }
// }

// let body = document.getElementsByTagName("body")[0]
// body.innerHTML += "<input id='fname' value='Tyler'/>"
// body.innerHTML += "<input id='lname' value='Inari'/>"
// body.innerHTML += "<input type='submit' onClick='submit()' />"
// body.innerHTML += "<input type='submit' value='clean' onClick='clean()' />"
// let fname = document.getElementById("fname");
// let lname = document.getElementById("lname");
// function submit() {
//     alert(`Hello ${fname.value} ${lname.value}`)
// }

// function clean() {
//     fname.value = ""
//     lname.value = ""
// }

// let fname = document.getElementById("fname");
// let lname = document.getElementById("lname");
// function submit() {
//     alert(`Hello ${fname.value} ${lname.value}`);
// }

// function clean() {
//     fname.value = "";
//     lname.value = "";
// }

// let body = document.getElementsByTagName("body")[0]
// body.innerHTML += "<input id='num01' />"
// body.innerHTML += "<input id='num02' />"
// body.innerHTML += "<input id='answer' />"
// body.innerHTML += "<button type='submit' onClick='add()'>+</button>"
// body.innerHTML += "<button type='submit' onClick='sub()'>-</button>"
// body.innerHTML += "<button type='submit' onClick='mul()'>*</button>"
// body.innerHTML += "<button type='submit' onClick='div()'>/</button>"
// let num01 = document.getElementById("num01");
// let num02 = document.getElementById("num02");
// let answer = document.getElementById("answer");

// function add() {
//     answer.value = Number(num01.value) + Number(num02.value)
// }

// function sub() {
//     answer.value = Number(num01.value) - Number(num02.value)
// }

// function mul() {
//     answer.value = Number(num01.value) * Number(num02.value)
// }

// function div() {
//     if (Number(num02.value) != 0) {
//         answer.value = Number(num01.value) / Number(num02.value)
//     } else {
//         alert("No")
//     }
// }

// let body = document.getElementsByTagName("body")[0]
// body.innerHTML += "<input/>"
// body.innerHTML += "<input/>"
// body.innerHTML += "<input/>"
// body.innerHTML += "<button type='submit' onClick='cal(this)'>+</button>"
// body.innerHTML += "<button type='submit' onClick='cal(this)'>-</button>"
// body.innerHTML += "<button type='submit' onClick='cal(this)'>*</button>"
// body.innerHTML += "<button type='submit' onClick='cal(this)'>/</button>"
// let inputBoxes = document.getElementsByTagName("input")
// function cal(btn) {
//     switch (btn.innerText) {
//         case "+":
//             inputBoxes[2].value = parseInt(inputBoxes[0].value) + parseInt(inputBoxes[1].value);
//             console.log(inputBoxes[2].value)
//             break;
//         case "-":
//             inputBoxes[2].value = parseInt(inputBoxes[0].value) - parseInt(inputBoxes[1].value);
//             break;
//         case "*":
//             inputBoxes[2].value = parseInt(inputBoxes[0].value) * parseInt(inputBoxes[1].value);
//             break;
//         case "/":
//             if (parseInt(inputBoxes[1].value) != 0) {
//                 inputBoxes[2].value = parseInt(inputBoxes[0].value) / parseInt(inputBoxes[1].value);
//             } else {
//                 alert("No")
//             }
//             break;
//     }
// }

let body = document.getElementsByTagName("body")[0]
body.innerHTML += "<input/>"
body.innerHTML += "<input/>"
body.innerHTML += "<input/>"
body.innerHTML += "<button type='submit' onClick='cal(this)'>+</button>"
body.innerHTML += "<button type='submit' onClick='cal(this)'>-</button>"
body.innerHTML += "<button type='submit' onClick='cal(this)'>*</button>"
body.innerHTML += "<button type='submit' onClick='cal(this)'>/</button>"
let inputBoxes = document.getElementsByTagName("input")
function cal(btn) {
    switch (btn.innerText) {
        case "+":
            inputBoxes[2].value = parseInt(inputBoxes[0].value) + parseInt(inputBoxes[1].value);
            console.log(inputBoxes[2].value)
            break;
        case "-":
            inputBoxes[2].value = parseInt(inputBoxes[0].value) - parseInt(inputBoxes[1].value);
            break;
        case "*":
            inputBoxes[2].value = parseInt(inputBoxes[0].value) * parseInt(inputBoxes[1].value);
            break;
        case "/":
            if (parseInt(inputBoxes[1].value) != 0) {
                inputBoxes[2].value = parseInt(inputBoxes[0].value) / parseInt(inputBoxes[1].value);
            } else {
                alert("No")
            }
            break;
    }
}
