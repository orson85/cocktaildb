//Fetch Funktion, die wiederholt versucht die Daten zu holen, wenn Server Response nicht "ok" ist.
const request = (path, options = {}, retries) =>
        fetch(`https://343505-26.web.fhgr.ch/api/gaming/${path}`, options)
        
        .then(res => {
          if (res.ok) {
            return res.json()
          }
          if (retries>0) {
            console.log("retries left", retries)
            return request(path, options, retries-1)
          }
        })
        .catch(error => console.error(error))

export default request


function login (username, password) { //Diese Funktion ist dazu da, den Request für das Login zu stellen. 

  let logindata = {"username": username,"password": password};
  
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(logindata),
  };


  const request = (path, options = {}, retries) =>
  fetch(`https://343505-26.web.fhgr.ch/api/login`, requestOptions)
  
  .then(res => {
    if (res.ok) {
      sessionStorage.setItem('username', username);
      sessionStorage.setItem("status", "loggedin");
      window.open("userpage.html");
    }
    if (retries>0) {
      console.log("retries left", retries)
      return request(path, options, retries-1)
    }
  })
  .catch(error => console.error(error))
}

login("mo","ntdag")
