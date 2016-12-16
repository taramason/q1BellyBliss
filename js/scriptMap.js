"use strict";
console.log("I'm here!");

mapboxgl.accessToken = 'pk.eyJ1IjoidGFyYWxlZW1hc29uIiwiYSI6ImNpd21vNXQxbzAwODQyb3FtanF4dGdvejkifQ.tzi33cE8lgRc5RYaj9jmQg';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v9', //stylesheet location
    center: [-104.9, 39.7 ], // starting position
    zoom: 10 // starting zoom
});



map.on('load', function () {
    map.addSource("points", {
        "type": "geojson",
        "data": {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-104.957896, 39.721211]
                },
                "properties": {
                    "title": "BellyBliss Main",
                    "icon": "star"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-104.8773, 39.7530]
                },
                "properties": {
                    "title": "BellyBliss Stapleton",
                    "icon": "star"
                }
            }]
        }
    });

    map.addLayer({
        "id": "points",
        "type": "symbol",
        "source": "points",
        "layout": {
            "icon-image": "{icon}-15",
            "text-field": "{title}",
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            "text-offset": [0, 0.6],
            "text-anchor": "top"
        }
    });
    map.addControl(new mapboxgl.GeolocateControl());
    map.addControl(new mapboxgl.NavigationControl());
});


$.get("https://api.aerisapi.com/forecasts/80521?client_id=TkN8FrefoQ9qK0Kc9ffbG&client_secret=JIxkj7ki1JSqck8Mxel9hJGtGfNtSiSD4IaOUwNl", function(weatherObj) {
  console.log(weatherObj);
  console.log(weatherObj.response[0].periods[0].weather);
  var denverWeather = weatherObj.response[0].periods[0].weather;
  var denverMaxF = weatherObj.response[0].periods[0].maxTempF;
  var denverMinF = weatherObj.response[0].periods[0].minTempF;
  console.log(denverWeather);
  console.log(denverMaxF);
  console.log(denverMinF);
  $(".weatherContainer").append("<div class="+'weatherP'+"><p> Todays weather for Denver is: " + denverWeather + ", a max temp of " + denverMaxF + " degrees F. </p></div>");
});
