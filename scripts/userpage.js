document.getElementById("usernameeinfügen") = username; 

function logout () {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
        console.log(this.responseText);
    }
    });

    xhr.open("GET", "/logout/%7Buserid%7D");

    xhr.send();
}
