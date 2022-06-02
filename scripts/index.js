import request from "./request.js"

document.getElementById("loginbutton").addEventListener("click", (e) => {
  e.preventDefault();

  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;
  let logindata = {"username": username,"password": password};  

  
  let requestOptions = {
          method: 'POST',
          // headers: {
          //   Accept: "application/json, text/plain, */*",
          //   "Content-Type": "application/json"},
          body: JSON.stringify(logindata)}

  request("login/", requestOptions, 3)
    .then(res => { if (res.username == username) {
    console.log(res)
    sessionStorage.setItem("status", "loggedin")
    sessionStorage.setItem("username", res.username)
  } else {console.error("Something went wrong.")};
    window.open("userpage.html");
  }
  ).catch((err) => {console.error(err);})})





