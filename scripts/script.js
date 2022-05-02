

// const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";


// async function getData(url) {

// const response = await fetch(url)
//     return response;
// }

// getData(url).then(data => { data.json()
//     console.log(data)
// })

// www.thecocktaildb.com/api/json/v1/1/list.php?c=list
// www.thecocktaildb.com/api/json/v1/1/list.php?g=list
// www.thecocktaildb.com/api/json/v1/1/list.php?i=list
// www.thecocktaildb.com/api/json/v1/1/list.php?a=list



// fetch-Abfrage 
const daten = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mary")
.then(response => response.json())
.then(data => data);

// console.log(...daten.drinks)
// console.log(daten.drinks[2])





// console.log( eval("daten.drinks[0].strIngredient"+"1") ) //bis 15
// console.log(daten.drinks[0].strMeasure1) //bis 15







// console.log("Anzahl Treffer: "+daten.drinks.length)
// console.log(daten.drinks[0].idDrink)
// console.log(daten.drinks[0].strDrink)
// console.log(daten.drinks[0].strGlass)
// console.log(daten.drinks[0].strAlcoholic)
// console.log(daten.drinks[0].strInstructions)
// console.log(daten.drinks[0].strInstructionsDE)
// console.log(daten.drinks[0].strDrinkThumb)
// console.log(daten.drinks[0].strImageSource)

// console.log(daten.drinks[0].strIngredient1) //bis 15
// console.log(daten.drinks[0].strMeasure1) //bis 15


//Trefferansicht: Anzahl Treffer
let hitCnt = document.createElement("p")
hitCnt.innerText = "Anzahl Treffer: "+daten.drinks.length
document.getElementById("hits").appendChild(hitCnt)

//Trefferansicht: Trefferliste
daten.drinks.forEach(element => {

    let image = document.createElement("img")
    let name = document.createElement("p")

    image.setAttribute("src", element.strDrinkThumb+"/preview")
    name.innerText=element.strDrink

    document.getElementById("hits").appendChild(image)
    document.getElementById("hits").appendChild(name)
});


//Drink-Ansicht

function iTitle() {
    let titel = document.createElement("h2")
    titel.innerText = daten.drinks[0].strDrink
    document.getElementById("drink").appendChild(titel)    
}

function iImg() {
    let image = document.createElement("img")
    image.setAttribute("src", daten.drinks[0].strDrinkThumb)
    document.getElementById("drink").appendChild(image)
}

function iZubereitung() {
    let zubereitung = document.createElement("p")
    zubereitung.innerText = daten.drinks[0].strInstructions
    document.getElementById("drink").appendChild(zubereitung)
    }

function iIngredients() {

        let liste = document.createElement("ul")
        liste.setAttribute("id", "liste")
        document.getElementById("drink").appendChild(liste)
        
        for (let index = 1; index < 16; index++) {
            const ingredient = "daten.drinks[0].strIngredient"
            const measure = "daten.drinks[0].strMeasure"
            if (eval(ingredient+index) !== null) {
                const element = `${eval(measure+index)} of ${eval(ingredient+index)}`
                console.log(element)
                let zutat = document.createElement("li")
            zutat.innerText = element
            document.getElementById("liste").appendChild(zutat)
            } 
}}

iTitle()
iImg()
iIngredients()
iZubereitung()











// Search cocktail by name
// www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita

// List all cocktails by first letter
// www.thecocktaildb.com/api/json/v1/1/search.php?f=a

// Search ingredient by name
// www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka

// Lookup full cocktail details by id
// www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007

// Lookup ingredient by ID
// www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=552

// Lookup a random cocktail
// www.thecocktaildb.com/api/json/v1/1/random.php

// Lookup a selection of 10 random cocktails (only available to $2+ Patreon supporters)
// www.thecocktaildb.com/api/json/v1/1/randomselection.php

// List Popular cocktails (only available to $2+ Patreon supporters)
// www.thecocktaildb.com/api/json/v1/1/popular.php

// List most latest cocktails (only available to $2+ Patreon supporters)
// www.thecocktaildb.com/api/json/v1/1/latest.php

// Search by ingredient
// www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin
// www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka

// Filter by multi-ingredient (only available to $2+ Patreon supporters)
// www.thecocktaildb.com/api/json/v1/1/filter.php?i=Dry_Vermouth,Gin,Anis

// Filter by alcoholic
// www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic
// www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic

// Filter by Category
// www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink
// www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail

// Filter by Glass
// www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass
// www.thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute

// List the categories, glasses, ingredients or alcoholic filters
// www.thecocktaildb.com/api/json/v1/1/list.php?c=list

// www.thecocktaildb.com/api/json/v1/1/list.php?g=list

// www.thecocktaildb.com/api/json/v1/1/list.php?i=list

// www.thecocktaildb.com/api/json/v1/1/list.php?a=list


// Images // Add /preview to the end of the cocktail image URL
// /images/media/drink/vrwquq1478252802.jpg/preview (100x100 pixels)


// Ingredient Thumbnails
// www.thecocktaildb.com/images/ingredients/gin-Small.png
// www.thecocktaildb.com/images/ingredients/gin-Medium.png
// www.thecocktaildb.com/images/ingredients/gin.png
