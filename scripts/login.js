function login (username, password) {

    let logindata = {"username": username,"passwort": password};
  
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(logindata),
    };
  
    fetch("https://343505-26.web.fhgr.ch/api/gaming/login/", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

        sessionStorage.setItem('username', username);
        sessionStorage.setItem("status", "loggedin");
      }
    

function checklogin (username, password) {

    if (username == "" || password == "") {
        alert("Eingabe Fehlerhaft. Bitte fülle das Formular vollständig aus.");
    }

    else {
        login (username, password);
        window.open("userpage.html");
    }

}

function loginstatus() {
  let status = sessionStorage.getItem('status');

  const btn  = document.getElementById("loginbutton");
  const konto = "Dein Konto";

  if (status == "loggedin") {
    btn.innerText = konto;
    /*btn.onclick = window.open("userpage.html"); */
  }

  else {
    btn.innerText="Login";
  }

  console.log(btn);
  console.log(status);
}

