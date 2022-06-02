function searchOutput(daten){
    //Reset-Output
    document.getElementById("hits").innerHTML='';
    document.getElementById("hitCnt").innerHTML='';

    if (daten != null) {
        //Trefferansicht: Anzahl Treffer
        let hitCnt = document.createElement("p")
        hitCnt.innerText = "Anzahl Treffer: "+daten.drinks.length
        document.getElementById("hitCnt").appendChild(hitCnt)

        //Trefferansicht: Trefferliste
        daten.drinks.forEach(element => {
            let image = document.createElement("img")
            let link = document.createElement("a")
            let name = document.createElement("a")
            name.setAttribute("class","name")
            let container = document.createElement("div")
            container.setAttribute("class","hit")

            let url = new URL("http://127.0.0.1:5500/view.html")
            url.searchParams.set('i', element.idDrink)
            name.setAttribute('href', url);
            


            container.setAttribute("id", element.idDrink)
            image.setAttribute("src", element.strDrinkThumb+"/preview")
            //link.setAttribute("href", `${element.idDrink}`)
            link.appendChild(image)
            link.setAttribute("class","link")
            
            container.appendChild(link)
            container.appendChild(name)
            container.setAttribute("class","container")
            name.innerText=element.strDrink

            
            document.getElementById("hits").appendChild(container)
        });
    } else {hitCnt.innerText = "Keine Drinks gefunden."}
}


    



export default searchOutput



