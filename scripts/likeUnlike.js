import request from "./request.js"

//Variablen erstellen
//User in SessionStorage holen
const user = sessionStorage.username 
//Drink ID aus URL holen
const drinkIdURL = JSON.stringify(window.location.search).replace(/[^0-9]/g,'')

//SessionStorage Setup
//favList in SessionStorage speichern
request("user/0/", {method: 'GET', headers: { 'Content-Type': 'application/json' }}, 10)
    .then(res => {return res.find(element => element.username == user)})
    .then(e => {sessionStorage.setItem("favList", e["anythingelse..."] )})
//userID in SessionStorage speichern
request("user/0/", {method: 'GET', headers: { 'Content-Type': 'application/json' }}, 10)
    .then(res => {return res.find(element => element.username == user)})
    .then(e => {sessionStorage.setItem("userid", e.userid)}) 

//Like-Button wird angezeigt, wenn "loggedin" in Sessionstorage
if (sessionStorage.getItem("status") == "loggedin") {
    //Erstellung Button
    let button = document.createElement("input")
    button.setAttribute("id","like")
    button.setAttribute("type","button")
    button.setAttribute("value","")
    document.getElementById("likeBtn").appendChild(button)
    button.addEventListener('click', updateButton);
    }

const button = document.getElementById("like");


//Steuerung Like/Unlike-Button. Like-Status des jeweiligen Drinks wird zuerst in die Favoritenliste im SessionStorage geschrieben und danach an die interne API weitergeleitet.
function updateButton() {
    //Die Favoritenliste aus dem sessionStorage holen...
    let array = sessionStorage.getItem("favList").split(",").filter(Number) 
    //... schauen, ob der Button-Wert "Like" oder "Unlike" ist ...
    switch (button.value) {
        //... wenn Like, dann wird der Drink an die Favoritenliste angefügt, sofern noch nicht darin enthalten...
        case 'Like': 
            array.indexOf(drinkIdURL) === -1 ? array.push(drinkIdURL) : console.log("Bereits ins Liste")
            button.value = "Unlike"
            break;
        //... wenn Unlike, wird der Drink aus der Favoritenliste enfernt...
        case 'Unlike': 
            array.pop(drinkIdURL);
            (array == "") ? array="," : ""; //Leere Werte ("") werden bei Patch-Request von der API ignoriert - deshalb wird nun ein Komma gesendet, damit der Patch umgesetzt wird und nicht der letzte Drink weiterhin gelistet ist.
            button.value = "Like"
            break;
    }
    //... dann wird die Favoritenliste im sessionStorage gespeichert....
    sessionStorage.setItem("favList", array )
    console.log(sessionStorage.getItem("favList"));
    //... von dort wird dann die Liste noch per Request an die interne API gesendet.
    let requestOptions = {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'} ,
        body: JSON.stringify({
            userid: sessionStorage.userid,
            username: sessionStorage.getItem("username"),
            ["anythingelse..."] : sessionStorage.favList
        })
    };
      console.log(requestOptions.body)
      request(`/user/`, requestOptions, 3)
    }

//Wenn der Like-Button angezeigt wird....    
if (button != null) {
//...schauen, ob der User diesen Drink bereits in seiner Favoritenliste hat. So feststellen, ob Button auf "Like" / "Unlike" geschaltet sein soll.        
request("user/0/", {method: 'GET', headers: { 'Content-Type': 'application/json' }}, 10)
    //User holen, der in SessionStorage angegeben ist
    .then(res => {return res.find(element => element.username == user)})
    //Favoritenliste des Users aus SessionStorage
    .then(e => {return e["anythingelse..."]})
    /*In der Favoritenliste des Users schauen, ob der auf der Seite angezeigte Drink bereits ein Favorit ist oder nicht.
    Wenn der Drink in der Liste vorkommt, wird beim Like Button der Wert auf "Unlike" gestellt */
    .then(value => (value.split(",")).includes(drinkIdURL)
    ? button.setAttribute("value","Unlike") 
    : button.setAttribute("value","Like"))
}



            





