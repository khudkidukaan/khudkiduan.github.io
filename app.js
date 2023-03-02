setTimeout(() => {
    document.location.reload();
  }, 300000);

const admin = "sysadmin32"
const adminPassword = "sysadminAdmin32"
let username = document.getElementById("email");
let pass = document.getElementById("pass");

function adminLogin() {
  if (username == admin && pass == adminPassword) {
    window.location.href = "admin.html"
  }
};

function error404() {
  alert("Error 228 Javascript function not defined ")
};

function h1change() {
  document.getElementById("h1") = "Welcome to Khudki Dukaan"
};

function loginValaidator() {
  const fs = require('fs')
  let email = document.getElementById("email")
  let password = document.getElementById("pass")
  let data = `Email:${email}\nPassword:${password}`

  fs.writeFile(loginvalues.txt,data,(err));

  if (err) throw err;
  
}






