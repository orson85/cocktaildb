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
  }