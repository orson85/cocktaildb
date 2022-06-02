import request from "./request.js"

let user = sessionStorage.getItem("username");
//userID in SessionStorage speichern
request("user/0/", {method: 'GET', headers: { 'Content-Type': 'application/json' }}, 10)
    .then(res => {return res.find(element => element.username == user)})
    .then(e => {sessionStorage.setItem("userid", e.userid)}) 


document.getElementById("logout").addEventListener("click", (e) => {
    e.preventDefault();

    let logoutid = sessionStorage.getItem('userid');
    
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

  let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        }

  request("logout/"+logoutid, requestOptions, 3)
  sessionStorage.clear();
  window.open("logout.html");
    })