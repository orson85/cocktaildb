function newlogin (email, username, password) { //Diese Funktion ist dazu da, den Request für das Erstellen eines neuen Users zu stellen. 

  let data = {"userid": email,"username": username,"password": password,"anythingelse...": ""};

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(data),
  };

  //const request = (retries) =>
  fetch("https://343505-26.web.fhgr.ch/api/gaming/user/", requestOptions)
    // .then(res => {                              //Testing, Fehlervermeidung auf Serverseite
    //   if (res.ok) {
    //     return res.json()
    //   }
    //   if (retries>0) {
    //     console.log(retries)
    //     return request(retries-1)
    //   }
    // })
    // .catch(error => console.error(error))

    .then(response => {                           //Dieser Teil der Funktion ist dazu da, allfällige Fehlermeldungen abzufangen und auszugeben. 
    if (response.ok==true) {
      localStorage.setItem('userid', email);
      sessionStorage.setItem('username', username);
      sessionStorage.setItem("status", "loggedin");

      window.open("userpage.html");
  
    }

    else {
      alert("Error ",error,". Beim Login ist ein Fehler aufgetreten. Bitte versuche es noch einmal.")
      }

  })
  }

function checkdata (email, confirmemail, username, confirmusername, password, confirmpassword) { //Diese Funktion ist dazu da, zu überprüfen, ob die Eingabe- und Bestätigungsfelder übereinstimmen, sowie, ob alle Felder ausgefüllt wurden.

  if (email == "" || confirmemail == "" || username == "" || confirmusername == "" || password == "" || confirmpassword == "") {
    alert("Eingabe Fehlerhaft. Bitte fülle das Formular vollständig aus.");
  }

  else if (email == confirmemail && username == confirmusername && password == confirmpassword) {

    validateEmail(email);

  }

  else {
    alert("Eingabe Fehlerhaft. Fülle bitte das Formular nochmals aus.");
  }

  function validateEmail(email) { //Diese Funktion ist dazu da, zu validieren, ob beim Feld "E-Mail" auch wirklich eine E-Mail-Adresse angegeben wurde. 

    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email.match(regexEmail)) {
      newlogin (email, username, password);
      window.open("userpage.html")
      return true; 
    } else {
      alert('Die von dir angegebene E-Mail-Adresse ist ungültig.');
      return false;
      
    }
}
}

