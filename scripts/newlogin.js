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
      .then(result => console.log(result))
      .catch(error => {console.log('error', error);});

    }
