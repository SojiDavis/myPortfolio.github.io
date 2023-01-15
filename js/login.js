var loginbtn = document.getElementById('login');
var registerbtn = document.getElementById('register');
var btn = document.getElementById('btn');
function register() {
    loginbtn.style.left = '-400px';
    registerbtn.style.left = '50px';
    btn.style.left = '110px';
}
function login() {
    loginbtn.style.left = '50px';
    registerbtn.style.left = '450px';
    btn.style.left = '0px';
}

var modal = document.getElementById('login-form');
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}