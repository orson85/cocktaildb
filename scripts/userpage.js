function usernameeinfuegen () {     //Diese Funktion ist dazu da, den UserName auf der UserPage des eingeloggten Users anzuzeigen. 
  let einfuegen = sessionStorage.getItem('username');
  document.getElementById("usernameeinfuegen").innerHTML = einfuegen;
}

function logout () {    //Diese Funktion ist dazu da, den Request für das Logout zu stellen. 

    let logoutid = localStorage.getItem('userid');
  
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    let requestOptions = {
      method: 'GET',
      headers: myHeaders,
    };

    const request = (retries) =>      //Testing, Fehlervermeidung auf Serverseite
    fetch("https://343505-26.web.fhgr.ch/api/gaming/logout/" + logoutid, requestOptions)
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

      .then(response => {               //Dieser Teil der Funktion ist dazu da, allfällige Fehlermeldungen abzufangen. 
        if (response.ok==true) {
          sessionStorage.clear();
          window.open("logout.html");
        }

        else {
          alert("Error ",error,". Beim Logout ist ein Fehler aufgetreten. Bitte versuche es noch einmal.")
          }
})
}










































































































































































































