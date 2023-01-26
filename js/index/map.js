let map;
const API_KEY = config.apikey;

function initMap() {
    let cityHall = {lat: 37.566330, lng: 126.977943};

    let defaultOptions = {
        zoom: 15,
        center: cityHall,
        disableDefaultUI:true,
        zoomControl: true
        };
    map = new google.maps.Map(document.getElementById('map'), defaultOptions);

    var marker = new google.maps.Marker({position: cityHall, map: map});
}