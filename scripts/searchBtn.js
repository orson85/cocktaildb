import searchOutput from "./searchOutput.js"


//Variablen erstellen
const searchBar = document.getElementById("searchBar");
const searchButton = document.getElementById("searchButton");

//getData -> Funktion die einen Suchbegriff als Parameter entgegennimmt und dann die auf der cocktailAPI gefundenen Drinks ausgiebt.
const getData = async(Term) => {
    const request = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${Term}`);
    const data = await request.json();
    if (data.drinks !== null) { return data } else {console.error("Nothing found.")}
}

//Bei Click auf den Search-Button wird getData mit dem Suchbegriff im Suchfeld ausgeführt...
searchButton.addEventListener("click", () => getData(searchBar.value).then(daten => {
    //... danach werden die Daten mit der Funktion searchOutput auf der Webseite aufgeführt...
    searchOutput(daten)
    //... zudem wird der Suchbegriff jeweils im sessionStorage gespeichert.
    sessionStorage.setItem("searchTerm", searchBar.value)
}))

//Suche initieren per "Enter" Tastte
searchBar.addEventListener("keyup", function(event){
    event.preventDefault();
    if (event.key === "Enter") {
        sessionStorage.setItem("searchTerm", searchBar.value)
        getData(searchBar.value).then(daten => {searchOutput(daten)}
)}})

//Beim Laden der Seite schauen, ob zuvor ein Suchbegriff im sessionStorage gespeichert wurde. Falls ja, wird die selbe Suche beim Laden der Hauptseite ausgeführt.
//Quality of life change, damit Nutzer, nachdem sie einen Drink in der Detailansicht angeschaut haben, wieder zurück auf die Hauptseite können und die Suche nicht noch einmal starten
window.addEventListener("load", () => {if (sessionStorage.searchTerm != null) {
    getData(sessionStorage.searchTerm).then(daten => {searchOutput(daten)})
}})

