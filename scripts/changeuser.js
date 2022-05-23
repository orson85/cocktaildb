function changeuser(username, password) {

  let changeid = sessionStorage.getItem('userid');

  let data = {"userid": changeid, "username": username, "password": password};

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: JSON.stringify(data),
  };

  fetch("https://343505-26.web.fhgr.ch/api/gaming/user/" + email, requestOptions)
    .then(response => response.json())
    .then(result => {console.log(result)})
    .catch(error => {console.log('error', error);});

}

function checkchange (username, confirmusername, password, confirmpassword) {

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