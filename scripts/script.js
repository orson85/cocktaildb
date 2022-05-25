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
    localStorage.setItem("daten", JSON.stringify(daten));
    sessionStorage.setItem("searchTerm", searchBar.value)
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







