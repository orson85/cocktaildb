import searchOutput from "./searchOutput.js"



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
    sessionStorage.setItem("searchTerm", searchBar.value)
}))

searchBar.addEventListener("keyup", function(event){
    event.preventDefault();
    if (event.key === "Enter") {
        console.log("yes")
        getData(searchBar.value).then(daten => {searchOutput(daten)}
)}})

window.addEventListener("load", () => {if (sessionStorage.searchTerm != null) {
    getData(sessionStorage.searchTerm).then(daten => {searchOutput(daten)})
}})

