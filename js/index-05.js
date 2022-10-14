
let body = document.getElementsByTagName("body")[0]
body.innerHTML += "<ul></ul>"
body.innerHTML += "<input placeholder='write your first name' />"
body.innerHTML += "<input placeholder='write your last name' />"
body.innerHTML += "<button type='submit' onClick='addName()'>Add</button>"

const drinks = ["Coffee", "Tea", "Code", "Monster", "Milk", "Water"]
let ul = document.querySelector("ul")
for (idx in drinks) {
    ul.innerHTML += `<li>${drinks[idx]}</li>`
    // if (idx == 1) {
    //     document.getElementsByTagName("li")[1].style = "background-color: yellow;"
    // }
}

let middle = ul.children.length / 2
ul.children[middle].style = "background-color: yellow;"
// second_li.style = "background-color: yellow;"

ul.addEventListener('click', function (event) {
    // for (idx in ul.children) {
    //     if (ul.children[idx] == event.target) {
    //         alert(event.target.innerText = `index: ${idx}`);
    //         ul.removeChild(ul.children[idx])
    //         break;
    //     }
    // }
})

// body.innerHTML += "<div class='names'></div>"
// body.innerHTML += "<input placeholder='write your first name' />"
// body.innerHTML += "<input placeholder='write your last name' />"
// body.innerHTML += "<button type='submit' onClick='addName()'>Add</button>"

// function addName() {
//     let names = document.querySelectorAll("input");
//     let textNode = document.createTextNode(`Full name: ${names[0].value} ${names[1].value}`)
//     let h2 = document.createElement("h2");
//     h2.appendChild(textNode);
//     document.querySelector("div").appendChild(h2);
// }

// let body = document.getElementsByTagName("body")[0]
// body.innerHTML += "<img src='../static/img/canada-flag.png' alt='canada-flag'></img>"
// body.innerHTML += "<button type='submit' onClick='changeFlag()'>Change Img</button>"

// function changeFlag() {
//     let img = document.getElementsByTagName("img")[0]
//     switch (img.alt) {
//         case "canada-flag":
//             console.log("a")
//             img.src = "../static/img/japan-flag.png";
//             img.alt = "japan-flag";
//             break;
//         case "japan-flag":
//             console.log("b")
//             img.src = "../static/img/canada-flag.png";
//             img.alt = "cacada-flag";
//             break;
//     }
// }

// body.innerHTML += "<main><div class='box'></div></main>"
// body.innerHTML += "<button type='submit' onClick='one()'>1</button>"
// body.innerHTML += "<button type='submit' onClick='two()'>2</button>"
// body.innerHTML += "<button type='submit' onClick='three()'>3</button>"

// var node = document.querySelector("main div");

// function one() {
//     node.classList.add("yellowish")
// }

// function two() {
//     node.classList.remove("yellowish")
// }

// function three() {
//     node.classList.toggle("hide")
// }
