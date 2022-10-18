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
