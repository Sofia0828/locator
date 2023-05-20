let ip = document.querySelector(".ip").children[0];
//console.log(ip);
async function json() {
    let arrIp = await fetch("https://api.ipify.org/?format=json");
    let ipText = await arrIp.json()
    ip.textContent = ipText.ip;
}
json()
let geoL = {
    btn:document.querySelector('.btn'),
    geo:document.querySelector('.geo'),
    getGeo(position){
        console.log(position);
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        console.log(lat, lon);
        let geo = document.querySelector('.geo');
        geo.innerHTML=`
        <p>Широта:${lat}</p>
        <p>Довгота:${lon}</p>
        <a href="https://www.google.com/maps/@${lat},${lon},14z?authuser=0" target = "blank">Чекай в гості!</a>
        `
    },
    error(){
        console.log(this.geo);
        this.geo.textContent = "Геолокація не запущена";

    },
    return(){
        this.btn.addEventListener('click', () => {
        navigator.geolocation.getCurrentPosition(this.getGeo, this.error);
        console.log(this.btn);
    })

    }
}
geoL.return();