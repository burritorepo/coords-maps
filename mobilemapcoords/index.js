
// 1) New instance of map without setView

const map = L.map('mapid')

// 2) add Base layer to map

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiaGFjb2RlIiwiYSI6ImNqd2lubmhidzA0czc0M240MGt1Y3pxb3cifQ.qeNB4c74SVlCw_DaLY33EQ'
}).addTo(map);

// 3) when the geolocation is successful we add a marker using the current coords

function findgeolocation(e){
    L.marker(e.latlng).addTo(map);
}

// 4) when the geolocation fails we send an alert message

function geolocationfailed(e){
    alert('It is not possible to find your location, please activate geolocation');
}

// 5) add events to the above defined functions, on is the "addEventListener" of map

map.on('locationerror', geolocationfailed);
map.on('locationfound', findgeolocation);

// 6) we use the locate() method to stablish the map view, it has several options
//    in this part we are using only two: setView, maxZoom.
//    >>> setView has true/false values, when true it automatically detects the user location,
//    if cannot find user' coordinates, it will just show the world view.
//    >>> MaxZoom is the maximum zoom for the automatic adjustment of the view when we use setView option

map.locate({setView: true, maxZoom:12});