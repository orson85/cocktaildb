import request from "./request.js"

//User in SessionStorage holen
const user = sessionStorage.username 
//Drink ID aus URL holen
const drinkIdURL = JSON.stringify(window.location.search).replace(/[^0-9]/g,'')

//Zeigt einen Like Button an, wenn ein User in SessionStorage ist.    
if (sessionStorage.getItem("status") == "loggedin") {
    let button = document.createElement("input")
    
    button.setAttribute("id","like")
    button.setAttribute("type","button")
    button.setAttribute("value","Like")
    document.getElementById("likeBtn").appendChild(button)
    button.addEventListener('click', updateButton);
    }

    const button = document.getElementById("like");

    function updateButton() {
        if (button.value === 'Like') {

            button.value = 'Unlike';
        } else {


            button.value = 'Like';
        }
    }

    request(`user/0`, {}, 3)
    .then(e => e.forEach(element => {
        if (element.username == user) { console.log(element["anythingelse..."])
        ;};}))

    //fügt drinkIDURL in aktuellen User ein. (überschreibt alles)
    request(`user/0`, {}, 3)
    .then(e => e.forEach(element => {
        if (element.username == user) { 
            request(`user/`, 
                {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userid: element.userid,
                    ["anythingelse..."] : "14456,13198,178332"
                    })
                }, 3)
            };
    }));
    

    request("user/ursgros@gmail.com", {}, 3).then(e => console.log("hier",e["anythingelse..."][0]))

    
//Schauen, ob der User diesen Drink bereits in seiner Favoritenliste hat. So feststellen, ob Button auf "Like" / "Unlike" geschaltet sein soll.        
request("user/0/", {method: 'GET', headers: { 'Content-Type': 'application/json' }}, 10)
    //User holen, der in SessionStorage angegeben ist
    .then(res => {return res.find(element => element.username == user)})
    //Favoritenliste des Users aus SessionStorage
    .then(e => {return e["anythingelse..."]})
    /*In der Favoritenliste des Users schauen, ob der auf der Seite angezeigte Drink bereits ein Favorit ist oder nicht.
    Wenn der Drink in der Liste vorkommt, wird beim Like Button der Wert auf "Unlike" gestellt */
    .then(value => {switch(typeof value){
            //case "string": console.log("num"); break;
            case "number": return (value.toString()==drinkIdURL) ? button.setAttribute("value","Unlike") : button.setAttribute("value","Like"); break;
            case "string": return (value.split(",")).includes(drinkIdURL) ? button.setAttribute("value","Unlike") : button.setAttribute("value","Like"); break;
            case "object": return (value.includes(drinkIdURL)) ? button.setAttribute("value","Unlike") : button.setAttribute("value","Like"); break;
        }
    })