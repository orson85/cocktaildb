function login (username, password) {

    let logindata = {"username": username,"password": password};
    
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(logindata),
    };
  
    fetch("https://343505-26.web.fhgr.ch/api/gaming/login/", requestOptions)
      .then(response => {
        if (response.ok==true) {
          sessionStorage.setItem('username', username);
          sessionStorage.setItem("status", "loggedin");

          window.open("userpage.html");
<<<<<<< HEAD
      
        }
=======
          
        }

      })


>>>>>>> 587151ff996f3f2666374462e24a1f422265c336

        else {
          alert("Beim Login ist ein Fehler aufgetreten. Bitte versuche es noch einmal.")
          }

      })
      
}





function checklogin (username, password) {

    if (username == "" || password == "") {
        alert("Eingabe Fehlerhaft. Bitte fülle das Formular vollständig aus.");
    }

    else {
        login (username, password);
    }

}




function loginstatus() {
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
