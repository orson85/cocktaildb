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
      .then(response => response.json())
      .then(result => {console.log(result)})
      .catch(error => {console.log('error', error);});

    if (result.status === 401) {
      return alert('Eingabe ungültig, deine Login-Daten sind inkorrekt.');
    }
  
    else if (result.status === 404) {
      return alert('Eingabe ungültig, dieser User existiert nicht.');
    }
  
    else if (result.status === 500) {
      return alert('Serverfehler, der User konnte nicht erstellt werden.');
    }

    else {
      sessionStorage.setItem('username', username);
      sessionStorage.setItem("userid", email);
      sessionStorage.setItem("status", "loggedin");
    }

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



function loginstatus () {
  let status = sessionStorage.getItem('status')

  while (status == "loggedin") {
    document.getElementById("loginbutton").text="Dein Konto";
    document.getElementById("loginbutton").onclick="window.open(userpage.html)";
  }

}
