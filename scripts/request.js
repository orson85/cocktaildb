//Fetch Funktion, die wiederholt versucht die Daten zu holen, wenn Server Response nicht "ok" ist.
const request = (path, options = {}, retries) =>
        fetch(`https://343505-26.web.fhgr.ch/api/gaming/${path}`, options)
        .then(res => {
          if (res.ok) {
            return res.json()
          }
          if (retries>0) {
            console.log("retries left", retries)
            return request(path, options, retries-1)
          }
        })
        .catch(error => console.error(error))

export default request

