const map = L.map('map'); 

map.setView([51.505, -0.09], 1.5); 

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map); 

let marker = L.marker([25.6802019, -100.3152580]).addTo(map);

let marker2 = L.marker([10.5, -66.933333]).addTo(map);

let marker3 = L.marker([40.416944, -3.703333]).addTo(map);