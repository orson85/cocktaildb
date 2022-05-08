function searchOutput(daten){
    //Reset-Output
    document.getElementById("hits").innerHTML='';

    //Trefferansicht: Anzahl Treffer
    let hitCnt = document.createElement("p")
    hitCnt.innerText = "Anzahl Treffer: "+daten.drinks.length
    document.getElementById("hits").appendChild(hitCnt)

    //Trefferansicht: Trefferliste
    daten.drinks.forEach(element => {
        let image = document.createElement("img")
        let link = document.createElement("a")
        let name = document.createElement("p")
        let container = document.createElement("div")

        let url = new URL("http://127.0.0.1:5500/view.html")
        url.searchParams.set('i', element.idDrink)
        link.setAttribute('href', url);


        container.setAttribute("id", element.idDrink)
        image.setAttribute("src", element.strDrinkThumb+"/preview")
        //link.setAttribute("href", `${element.idDrink}`)
        link.appendChild(image)
        container.appendChild(link)
        container.appendChild(name)
        name.innerText=element.strDrink

        
        document.getElementById("hits").appendChild(container)
    });
}


    



export default searchOutput



