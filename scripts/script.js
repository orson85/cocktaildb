import searchOutput from "./searchOutput.js"
//import openHit from "./openHit.js"

const searchBar = document.getElementById("searchBar");
const searchButton = document.getElementById("searchButton");

// fetch-Abfrage 
const getData = async(Term) => {
    const request = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${Term}`);
    const data = await request.json();
    if (data.drinks !== null) { return data } else {alert("Nothing found.")}
}

// Search-Button Click
searchButton.addEventListener("click", () => getData(searchBar.value).then(daten => {
    searchOutput(daten)
    localStorage.setItem("daten", daten);
}))



//----------------------------------------------//

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == loginform) {
        modal.style.display = "none";
    }
}

//----------------------------------------------//

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





//----------------------------------------------//




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
