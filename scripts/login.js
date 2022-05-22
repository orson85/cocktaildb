function login (username, password) {

    let logindata = {"username": username,"passwort": password,"anythingelse...": ","};
  
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(logindata),
    };
  
    fetch("https://343505-26.web.fhgr.ch/api/gaming/user/", requestOptions)
      .then(response => response.json())
      .then(result => {console.log(result)})
      .catch(error => {console.log('error', error);});

    sessionStorage.setItem('username', username);

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
