function newlogin (email, username, password) {

  let data = {"userid": email,"username": username,"passwort": password,"anythingelse...": ","};

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(data),
  };

  fetch("https://343505-26.web.fhgr.ch/api/gaming/user/", requestOptions)
    .then(response => response.json())
    .then(result => {console.log(result)})
    .catch(error => {console.log('error', error);});

  if (result.status === 400) {
    return alert('Eingabe ungültig, der User konnte nicht erstellt werden.');
  }

  else if (result.status === 409) {
    return alert('Dieser User existiert bereits.');
  }

  else if (result.status === 500) {
    return alert('Serverfehler, der User konnte nicht erstellt werden.');
  }

  else {
    sessionStorage.setItem("username", username);
    sessionStorage.setItem("userid", email);
    sessionStorage.setItem("password", password);
  }

  }

function checkdata (email, confirmemail, username, confirmusername, password, confirmpassword) {

  if (email == "" || confirmemail == "" || username == "" || confirmusername == "" || password == "" || confirmpassword == "") {
    alert("Eingabe Fehlerhaft. Bitte fülle das Formular vollständig aus.");
  }

  else if (email == confirmemail && username == confirmusername && password == confirmpassword) {

    validateEmail(email);

  }

  else {
    alert("Eingabe Fehlerhaft. Fülle bitte das Formular nochmals aus.");
  }

  function validateEmail(email) {

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

