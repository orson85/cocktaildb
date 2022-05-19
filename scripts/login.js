/* WIRD MOMENTAN GERADE NACH SCRIPT.JS MIGRIERT

function login (param1, param2) {

    var data = "{\r\n  \"username\": \""+ param1 +"\",\r\n  \"password\": \""+ param2 +"\"}";
    var xhr = new XMLHttpRequest();
    console.log(data);

    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
        console.log(this.responseText);
    }
    });

    xhr.open("POST", "https://343505-26.web.fhgr.ch/api/gaming/login");
    xhr.setRequestHeader("Content-Type", "text/plain");
    xhr.send(JSON.stringify(data));
}

*/