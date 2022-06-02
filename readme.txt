Dokumentation: 

Diese Anwendung ist ein Projekt der beiden IW-Studierenden Jannik Christen und Urs Grossenbacher, welche im Rahmen des Moduls "DGUI/FRONT2"
erstellt wurde. Ziel des Projekts war die Darstellung diverser Daten von einem Server, über eine API-Schnittstelle. Als Datensatz wurde hierfür
die Free-API "The CocktailDB" verwendet. Der User kann mittels Schlagwortsuche den Datenbestand an Coktail-Rezepten bequem durchsuchen und liken. Weiter kann
dieser ein eigenes Konto erstellen, auf welchem die gelikten Rezepte angezeigt werden. 

Die Anwendung besteht aus drei Dokumenttypen: Den HTML-Files, den CSS-Files und den JavaScript-Files. Im Ordner CSS sind zudem noch die Mediendateien dabei.
Zugehörige Files sind jeweils gleich, nach der jeweiligen Funktionalität benannt. Dadurch soll ein schnelles Verständnis über die Struktur des Projekts übermittelt werden. Konkret sind dies folgende
Funktionalitäten: 

Startseite:

Die Startseite ist die erste Seite, welche der User aufrufen kann und gleichzeitig auch das Herzstück der Anwendung. Von hier aus kann der User
den Datenbestand durchstöbern, sich einzelne Rezepte in der Detailansicht anzeigen lassen, sowie sich auf der Seite anmelden oder ein neues Konto 
erstellen. Das Login-Formular wird direkt auf der Startseite aufgerufen und dargestellt. Folgende Files beziehen sich auf diese Seite:

- index.html (Struktur der Startseite)
- index.css (Design der Startseite)
- index.js (Funktionalität/Dynamik der Startseite)

- searchOutput.css (Design der angezeigten Resultate)
- searchOutput.js (Funktionalität der angezeigten Resultate)
- searchBtn.js  (Funktionalität des Suchbuttons)

- style.css.map 

Detailansicht der Rezepte: 

Hat der User ein interessanter Cocktail gefunden, kann er in der Detailansicht das detaillierte Rezept ansehen. Weiter kann er das Rezept liken und damit, falls er angemeldet ist,
dies seiner Favortienliste auf seinem Konto hinzufügen. Folgende Files beziehen sich auf diese Seite:

- view.html (Struktur der Detailansicht)
- view.css (Design der Detailansicht)
- index.css (Design der Startseite)
- request.js
- likeUnlike.js
- refreshHTML.js
- viewListDrinks.js

Neues Konto erstellen: 

Vom Login-Formular aus hat der User die Option, ein neues Konto zu erstellen. Klickt dieser auf den Link, gelangt er auf eine neue Seite, welche
das benötigte Formular darstellt. Um ein neues Konto anzulegen, muss er eine E-Mail-Adresse (userid), ein Username, sowie ein Passwort angeben und bestätigen. 
Gelingt dies, wird der User auf sein neues Konto weitergeleitet, falls nicht, erscheint eine Fehlermeldung. Folgende Files beziehen sich auf diese Seite:

- newlogin.html (Struktur des Formulars)
- newlogin.css (Design des Formulars)
- newlogin.js (Funktionalität des Formulars)

Userpage/Konto

Auf seiner Userpage kann der User seine gelikten Rezepte anschauen, sowie seine Userdaten ändern. Ausserdem kann er von hier aus auf die Startseite zurückkehren
oder sich ausloggen. Folgende Files beziehen sich auf diese Seite:

- userpage.html (Struktur der Userpage)
- userpage.css (Design der Userpage)
- userpage.js (Funktionalität der Userpage)
- userPageFavList.js (Funktionalität der Favoritenliste)

Userdaten ändern

Das Formular, welches dazu dient, die Userdaten zu ändern ist ähnlich gestaltet, wie das Formular zur Erstellung eines Users. Auch hier erhält der User eine Fehlermeldung,
falls die Änderungen fehlschlagen. Falls dies glückt, erhält der User ebenfalls eine Meldung, jedoch wird er nicht auf eine andere Seite geleitet. Folgende Files beziehen sich auf diese Seite:

- changeuser.html (Struktur des Formulars)
- changeuser.css (Design des Formulars)
- changeuser.js (Funktionalität des Formulars)

Logout

Nachdem der User den Logout-Button betätigt hat, kommt er auf eine kleine Seite, welche ihm bestätigt, dass er ausgeloggt wurde. Falls er möchte,
kann er von hier wieder auf die Startseite gelangen. Folgende Files beziehen sich auf diese Seite:

- logout.html (Struktur der Logoutpage)
- logout.css (Design der Logoutpage)
- logout.js (Funktionalität der Logoutpage)