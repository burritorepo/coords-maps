
const map = L.map('mapid');

// Base layer

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiaGFjb2RlIiwiYSI6ImNqd2lubmhidzA0czc0M240MGt1Y3pxb3cifQ.qeNB4c74SVlCw_DaLY33EQ'
}).addTo(map);


let marker = null;
let circle = null;
function onLocationFound(e) {
    const radius = e.accuracy / 20; // set accuracy
    if (marker !== null) {
        map.removeLayer(marker);
        map.removeLayer(circle);
    }

    marker = L.marker(e.latlng).addTo(map)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    circle = L.circle(e.latlng, radius).addTo(map);
    console.log(e);
}

map.locate({ setView: true, watch: true, maxZoom: 20 })
    .on('locationfound', onLocationFound);; // triggers locationfound


// IF user disconnects map.stopLocate(), to stop location  tracking

var myId = 'abc'; // My user id

// other user id's and their markers
var markers = {
    'def': L.marker([51.441767, 5.470247]).addTo(map),
    'ghi': L.marker([51.441767, 5.480247]).addTo(map),
    'jkl': L.marker([51.441767, 5.490247]).addTo(map)
};

/* map.on('click', function (e) {
    // check if my user id in marker object and thus on the map
    if (markers.hasOwnProperty(myId)) {
        // remove the marker
        map.removeLayer(markers[myId]);
    }
    // place (or overwrite) marker with my uid in object and add to map
    markers[myId] = L.marker(e.latlng).addTo(map);
}); */