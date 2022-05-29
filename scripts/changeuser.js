function changeuser(username, password) {   //Diese Funktion ist dazu da, den Request für die Änderungen der Userdaten zu stellen.

  let changeid = sessionStorage.getItem('userid');

  let data = {"userid": changeid, "username": username, "password": password};

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let requestOptions = {
    method: 'PATCH',
    headers: myHeaders,
    body: JSON.stringify(data),
  };

  /*const request = (path, options = {}, retries) =>
  fetch(`https://343505-26.web.fhgr.ch/api/gaming/${path}`, options)
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      if (retries>0) {
        console.log(retries)
        return request(path, options, retries-1)
      }
    })
    .catch(error => console.error(error))*/

  const request = (retries) =>              //Testing, Fehlervermeidung auf Serverseite
  fetch("https://343505-26.web.fhgr.ch/api/gaming/user/", requestOptions)
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      if (retries>0) {
        console.log(retries)
        return request(retries-1)
      }
    })
    .catch(error => console.error(error))

    .then(response => {                       //Dieser Teil der Funktion ist dazu da, allfällige Fehlermeldungen abzufangen. 
      if (response.ok==true) {
        alert("Deine Userdaten wurden erfolgreich geändert!")
      }

      else {
        alert("Deine Userdaten konnten nicht geändert werden, da ein Fehler aufgetreten ist. Bitte versuche es noch einmal.")
        }
    })
}

function checkchange (username, confirmusername, password, confirmpassword) {   //Diese Funktion ist dazu da, zu überprüfen, ob die Eingabe- und Bestätigungsfelder übereinstimmen, sowie, ob alle Felder ausgefüllt wurden.

    if (username == "" || confirmusername == "" || password == "" || confirmpassword == "") {
      alert("Eingabe Fehlerhaft. Bitte fülle das Formular vollständig aus.");
    }
  
    else if (username == confirmusername && password == confirmpassword) {
      changeuser (username, password);
      window.open("userpage.html");
      alert("Deine Userdaten wurden erfolgreich angepasst.")
    }
  
    else {
      alert("Eingabe Fehlerhaft. Fülle bitte das Formular nochmals aus.");
    }
  }