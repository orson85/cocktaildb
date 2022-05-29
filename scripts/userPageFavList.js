import request from "./request.js"

let user = sessionStorage.username 
        
//Holt Liste favorisierte Drinks des Users im sessionStorage. Fetched Namen dieser Drinks von cocktaildb und listet sie auf der Favoritenliste des Users
request("user/0/", {method: 'GET', headers: { 'Content-Type': 'application/json' }}, 10)
    .then(res => {return res.find(element => element.username == user)})
    .then(e => {return e["anythingelse..."]})
    .then(value => fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${value}`))
    .then(e => e.json())
    .then(e => e.drinks.forEach(element => {
        let link = document.createElement("a");
        let url = new URL("http://127.0.0.1:5500/view.html")
        url.searchParams.set('i', element.idDrink)
        link.setAttribute('href', url);
        document.getElementById("favList").innerHTML = element.strDrink;}));
     
    