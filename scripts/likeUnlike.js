import request from "./request.js"

function init() {
    console.log("hi")
}

    
if (sessionStorage.getItem("username") != null) {
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

    //Favoritenliste User     
        //NACHHER IN EIGENES MODUL ÜBERTRAGEN
        // const request = (path, options = {}, retries) =>
        // fetch(`https://343505-26.web.fhgr.ch/api/gaming/${path}`, options)
        // .then(res => {
        //   if (res.ok) {
        //     return res.json()
        //   }
        //   if (retries>0) {
        //     console.log(retries)
        //     return request(path, options, retries-1)
        //   }
        // })
        // .catch(error => console.error(error))
    
    
        const params = {"anythingelse..." : "{178332, 13196}"}
        const content = {method: 'GET', headers: { 'Content-Type': 'application/json' }}  
        //body: JSON.stringify(params)
        
        
        //API Request: Input = username aus SessionStorage, Output = Index des Users
        //Schaut welcher User "online" ist 
        let user = sessionStorage.username 
        
        //UserListe holen
        function getVal() {return request("user/0/", {method: 'GET', headers: { 'Content-Type': 'application/json' }}, 10)}
        
        //getUser = User holen, der in SessionStorage angegeben ist
        const getUser = getVal().then(res => {return res.find(element => element.username == user)})
        
        //getUserID
        const getUserID = getVal().then(res => {return res.find(element => element.username == user)}).then(e => {return(e.userid)})
        
        //getFavList = Favoritenliste des Users aus SessionStorage
        const getFavList = getUser.then(e => {return e["anythingelse..."]})
        
        //drinkIdURL = Drink ID aus URL-Param. In String umgewandelt & per replace() reine ID extrahiert.
        const drinkIdURL = JSON.stringify(window.location.search).replace(/[^0-9]/g,'')
        
        /*In der Favoritenliste des Users schauen, ob der auf der Seite angezeigte Drink bereits ein Favorit ist oder nicht.
        Wenn der Drink in der Liste vorkommt, wird beim Like Button der Wert auf "Unlike" gestellt */
        getFavList.then(value => {switch(typeof value){
                //case "string": console.log("num"); break;
                case "number": return (value.toString()==drinkIdURL) ? button.setAttribute("value","Unlike") : button.setAttribute("value","Like"); break;
                case "object": return (value.includes(drinkIdURL)) ? button.setAttribute("value","Unlike") : button.setAttribute("value","Like"); break;
            }
        })
        
        //ENDE: Favoritenliste User
    
export default init();