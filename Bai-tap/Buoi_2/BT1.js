var condition_email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // không chứa khoảng trắng, có @, có dấu chấm
var condition_password = /^[A-Za-z0-9]{6,}$/; // ít nhất 6 ký tự, không chứa ký tự đặc biệt

var current_email = 'abc@123.com';
var current_password = '123456';

if (!condition_email.test(current_email)) {
    if (!condition_password.test(current_password))
        console.log("email và password không đc chấp nhận");
    else
        console.log("email không đc chấp nhận");
}
else if (!condition_password.test(current_password))
    console.log("password không đc chấp nhận");
else
    console.log("email và password được chấp thuận");

function checkAccount() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (email === current_email && password === current_password) {
        alert('Tài khoản tồn tại!');
    } else {
        alert('Tài khoản không tồn tại!');
    }
}