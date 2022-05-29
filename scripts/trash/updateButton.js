import request from "../request.js"



    

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


//Wird 
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
            userid: sessionStorage.getItem("userid"),
            username: sessionStorage.getItem("username"),
            ["anythingelse..."] : sessionStorage.favList
        })
    };
    
    console.log(requestOptions.body)

    request(`/user`, requestOptions, 3)
    }

    

export default updateButton
            

