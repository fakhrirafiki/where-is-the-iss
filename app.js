const mymap = L.map('issMap').setView([0, 0], 1);
const marker = L.marker([0, 0]).addTo(mymap)



L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);


const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';

async function getISS() {
    const response = await fetch(api_url);
    const data = await response.json();
    const { latitude, longitude } = data;

    marker.setLatLng([latitude, longitude]);

    document.getElementById('lat').textContent = latitude;
    document.getElementById('lon').textContent = longitude;
}

getISS()