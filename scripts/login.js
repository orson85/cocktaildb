function login (username, password) { //Diese Funktion ist dazu da, den Request für das Login zu stellen. 

    let logindata = {"username": username,"password": password};
    
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(logindata),
    };

    const request = (retries) =>    //Testing, Fehlervermeidung auf Serverseite
    fetch("https://343505-26.web.fhgr.ch/api/gaming/login/", requestOptions)
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

      .then(response => {             //Dieser Teil der Funktion ist dazu da, allfällige Fehlermeldungen abzufangen. 
        if (response.ok==true) {
          sessionStorage.setItem('username', username);
          sessionStorage.setItem("status", "loggedin");

          window.open("userpage.html");
      
        }

        else {
          alert("Error ",error,". Beim Login ist ein Fehler aufgetreten. Bitte versuche es noch einmal.")
          }
      })   
}

function checklogin (username, password) { //Diese Funktion ist dazu da, zu überprüfen, ob die Eingabe nicht einfach leer ist. 

    if (username == "" || password == "") {
        alert("Eingabe Fehlerhaft. Bitte fülle das Formular vollständig aus.");
    }

    else {
        login (username, password);
    }
}

function loginstatus() {  //Diese Funktion ist dazu da, den Login-Button auf index.html so zu ändern, damit man auf sein eigenes User-Konto kommt.
  let status = sessionStorage.getItem('status');

  const btn  = document.getElementById("indexlogin");
  const btnlink = document.getElementById("btnlink")
  const konto = "Dein Konto";

  if (status == "loggedin") {
    btn.innerText = konto;
    btn.onclick = "";
    btnlink.href = "userpage.html";
  }

  else {
    btn.innerText="Login";
  }

  console.log(btn);
  console.log(status);
}
