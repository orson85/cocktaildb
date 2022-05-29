//Refresht die Seite sobald geladen.
//Grund: Bei Verwendung des Back-Buttons wurde auf einigen Seiten alte Werte gelistet. (Beispiel: Nutzer hat Drink geliked -> ist dann mit Back-Button zurück zur Userpage -> Drink war nicht gelistet)

function refreshHTML() {
window.addEventListener( "pageshow", function ( event ) {
  var historyTraversal = event.persisted || ( typeof window.performance != "undefined" && window.performance.navigation.type === 2 );
  if ( historyTraversal ) {
    // Handle page restore.
    //alert('refresh');
    window.location.reload();
  }
});}

refreshHTML()