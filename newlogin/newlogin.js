function newlogin (param1, param2, param3) {

    var data = "{\r\n  \"userid\": \""+ param1 +"\",\r\n  \"username\": \""+ param2 +"\",\r\n  \"password\": \""+ param3 +"\",\r\n  \"anythingelse...\": }";
    var xhr = new XMLHttpRequest();
    console.log(data);

    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
      if(this.readyState === 4) {
        console.log(this.responseText);
      }
    });

    xhr.open("POST", "https://343505-26.web.fhgr.ch/api/gaming/user/");
    xhr.setRequestHeader("Content-Type", "text/html");
    xhr.send(JSON.stringify(data))

}