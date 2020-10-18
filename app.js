const mymap = L.map('issMap').setView([0, 0], 1);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

var myIcon = L.icon({
    iconUrl: 'iss.png',
    iconSize: [38, 95],
    iconAnchor: [22, 94],
});
const marker = L.marker([0, 0], { icon: myIcon }).addTo(mymap)





const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';

// let firstTime = true;

async function getISS() {
    const response = await fetch(api_url);
    const data = await response.json();
    const { latitude, longitude } = data;
    marker.setLatLng([latitude, longitude]);
    // if (firstTime) {
    //     mymap.setView([latitude, longitude], 1);
    //     firstTime = false;
    // }

    document.getElementById('lat').textContent = latitude.toFixed(2);
    document.getElementById('lon').textContent = longitude.toFixed(2);
}

getISS()

setInterval(getISS, 1000)