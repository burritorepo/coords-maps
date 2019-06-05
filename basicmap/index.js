// New instance of map, with a setView(Initial coordinates and Zoom options)

const map = L.map('mapid').setView([41.66, -4.72],15);

// Base layer

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiaGFjb2RlIiwiYSI6ImNqd2lubmhidzA0czc0M240MGt1Y3pxb3cifQ.qeNB4c74SVlCw_DaLY33EQ'
}).addTo(map);

// Scale control
L.control.scale().addTo(map);

// Draggable marker
L.marker([41.66, -4.71],{draggable: true}).addTo(map);