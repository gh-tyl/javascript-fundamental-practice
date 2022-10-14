let body = document.getElementsByTagName("body")[0]
body.innerHTML += "<input/>"
input = document.getElementsByTagName("input")[0]

input.addEventListener("keydown", function (event) {
    if ((event.keyCode < 65 || event.keyCode > 90) && (event.keyCode != 8 && event.keyCode != 32)) {
        console.log(event.keyCode)
        event.preventDefault();

    }
})
