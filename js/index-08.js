var body = document.querySelector('body');
var h1 = document.createElement('h1');
h1.innerText = 'Hello World!';
body.appendChild(h1);
var h1 = document.createElement('h1');
h1.innerText = 'Hello World!';
h1.innerText += ' JQUERY';
body.appendChild(h1);

// JQUERY
var h1 = $('h1')[0];
$(h1).attr('class', 'title');
$(h1).text('Hello World! SOMETHING');
let styles = {
    color: 'red',
    fontSize: '50px',
    backgroundColor: 'black'
};
// $(h1).css('background-color', 'pink');
$(h1).css(styles);

// prepare input element
var input = document.createElement('input');
input.value = 'Hello World!';
body.appendChild(input);
// prepare button element
var button = document.createElement('button');
button.innerText = 'Click Me!';
body.appendChild(button);

var input = $('input');
$(input).attr('type', 'password');
var button = $('button');
$(button).attr('class', 'btn btn-primary');
$(button).on('click', function () {
    if ($(input).attr('type') === 'password') {
        $(input).attr('type', 'text');
    } else {
        $(input).attr('type', 'password');
    }
}
);
