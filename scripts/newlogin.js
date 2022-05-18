function newlogin (param1, param2, param3) {

    let data = {"userid": param1,"username": param2,"passwort": param3,"anythingelse...": ","};

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(data),
    };

    fetch("https://343505-26.web.fhgr.ch/api/gaming/user/", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

    }
