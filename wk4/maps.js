var map;
var marker;

var center = {
  lat: -34.397,
  lng: 150.644
};
var zoom = 8;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: center,
    zoom: zoom,
  });
  marker = new google.maps.Marker({
    position: center,
    map: map,
    title: 'Hello World!'
  });
}

function clearMarker () {
  marker.setMap(null);
}

function addMarker () {
  marker.setMap(map);
}

function toggleMarker () {
  marker.map ? clearMarker() : addMarker();
}

// below is just a hack; idk how to use html forms so this is just hard-coded lat longs
var newLatLong = {
  lat: 30,
  lng: 0
};

function setLatLong() {
  map.panTo(newLatLong);
}
