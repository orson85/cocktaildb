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


function openHit() {
    var opened = window.open("");
    opened.document.write(`
    `);
}

export default openHit

