import request from "./request.js"

let user = sessionStorage.username 
        
//Holt Liste favorisierte Drinks des Users im sessionStorage. Fetched Namen dieser Drinks von cocktaildb und listet sie auf der Favoritenliste des Users
request(`user/`, {method: 'GET', headers: { 'Content-Type': 'application/json' }}, 10)
    .then(res => {return res.find(element => element.username == user)})
    .then(e => {return e["anythingelse..."]})
    //Geht per forEach durch die Favoritenliste...
    .then(e => e.split(',').filter(Number).forEach(element => {
        //...und macht pro Drink einen Request an die CocktailDB...
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${element}`)
        .then(e => e.json())
        .then(element => {
            //... und fügte diese dann auf der Seite ein als <li> Element
            let li = document.createElement("li");
            let link = document.createElement("a");
            let url = new URL("http://127.0.0.1:5500/view.html")
            
            url.searchParams.set('i', element.drinks[0].idDrink)
            link.setAttribute('href', url);
            link.innerText = element.drinks[0].strDrink
            li.appendChild(link)
            document.getElementById("favList").appendChild(li)}
            )
        })
    )
            



        
        

      