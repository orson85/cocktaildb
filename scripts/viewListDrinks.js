//Alles um drinkId aus der URL zu lesen, die CocktailAPI abzufragen und Inhalte darzustellen.

                //Bestellung aufnehmen
                const drinkId = window.location.search; // Variable mit URL Param
                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php${drinkId}` //Fetch Request mit URL Param als Drink ID
                
                //Zutaten holen
                async function getData() {
                    const response = await fetch(url);
                    const data = await response.json();

                    //ACHTUNG -> Untere Funktion muss noch ein NULL Check für Measures rein (siehe Vodka Fizz ID:169767
                    // Array erstellen mit allen Zutaten & Measures, die nicht null sind (QuickNDirty)
                    let ingredArr = [] 
                    if (data.drinks[0].strIngredient1 != null ) { ingredArr.push(`${data.drinks[0].strMeasure1 } ${data.drinks[0].strIngredient1 }`)}
                    if (data.drinks[0].strIngredient2 != null ) { ingredArr.push(`${data.drinks[0].strMeasure2 } ${data.drinks[0].strIngredient2 }`)}
                    if (data.drinks[0].strIngredient3 != null ) { ingredArr.push(`${data.drinks[0].strMeasure3 } ${data.drinks[0].strIngredient3 }`)}
                    if (data.drinks[0].strIngredient4 != null ) { ingredArr.push(`${data.drinks[0].strMeasure4 } ${data.drinks[0].strIngredient4 }`)}
                    if (data.drinks[0].strIngredient5 != null ) { ingredArr.push(`${data.drinks[0].strMeasure5 } ${data.drinks[0].strIngredient5 }`)}
                    if (data.drinks[0].strIngredient6 != null ) { ingredArr.push(`${data.drinks[0].strMeasure6 } ${data.drinks[0].strIngredient6 }`)}
                    if (data.drinks[0].strIngredient7 != null ) { ingredArr.push(`${data.drinks[0].strMeasure7 } ${data.drinks[0].strIngredient7 }`)}
                    if (data.drinks[0].strIngredient8 != null ) { ingredArr.push(`${data.drinks[0].strMeasure8 } ${data.drinks[0].strIngredient8 }`)}
                    if (data.drinks[0].strIngredient9 != null ) { ingredArr.push(`${data.drinks[0].strMeasure9 } ${data.drinks[0].strIngredient9 }`)}
                    if (data.drinks[0].strIngredient10 != null) { ingredArr.push(`${data.drinks[0].strMeasure10} ${data.drinks[0].strIngredient10}`)}
                    if (data.drinks[0].strIngredient11 != null) { ingredArr.push(`${data.drinks[0].strMeasure11} ${data.drinks[0].strIngredient11}`)}
                    if (data.drinks[0].strIngredient12 != null) { ingredArr.push(`${data.drinks[0].strMeasure12} ${data.drinks[0].strIngredient12}`)}
                    if (data.drinks[0].strIngredient13 != null) { ingredArr.push(`${data.drinks[0].strMeasure13} ${data.drinks[0].strIngredient13}`)}
                    if (data.drinks[0].strIngredient14 != null) { ingredArr.push(`${data.drinks[0].strMeasure14} ${data.drinks[0].strIngredient14}`)}
                    if (data.drinks[0].strIngredient15 != null) { ingredArr.push(`${data.drinks[0].strMeasure15} ${data.drinks[0].strIngredient15}`)}
                        // forEach der die Ingredients in ein Listenelement stopft und diese dann an den Span "strIngredient" anhängt.
                        ingredArr.forEach(element => {
                        let item = document.createElement("li")
                        item.append(element)
                        document.getElementById("strIngredient").append(item)
                        
                    });

                    //Mixen und servieren
                    document.getElementById("strDrink").textContent = data.drinks[0].strDrink;
                    document.getElementById("strInstructions").textContent = data.drinks[0].strInstructions;
                    document.querySelector("img").src=  data.drinks[0].strDrinkThumb+"/preview"     
                }

                window.onload = getData()