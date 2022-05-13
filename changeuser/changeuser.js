document.getElementById("emaileinfügen").innerHTML = email;


function changeuser(email, param2, param3) {

    var data = "{\r\n  \"userid\": \""+ email +"\",\r\n  \"username\": \""+ param2 +"\",\r\n  \"password\": \""+ param3+"\",}";

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
        console.log(this.responseText);
    }
    });

    xhr.open("PATCH", "https://343505-26.web.fhgr.ch/api/gaming/user%20");
    xhr.setRequestHeader("Content-Type", "text/plain");

    xhr.send(JSON.stringify(data));

}