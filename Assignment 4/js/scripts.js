var greeting = 'HEY! ';
var name = 'Dude';
var message = ',please check your order:';

var welcome = greeting + name + message;
document.getElementsById('greeting').textContent="welcome";

var price = 20,
var studentDiscount = .10,
var studentPrice = price - (price * studentDiscount);
document.getElementsById('price').textContent="newtext";
document.getElementsById('student-price').textContent="newtext";
