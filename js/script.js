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
                    "title": "BellyBliss",
                    "icon": "star"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-122.414, 37.776]
                },
                "properties": {
                    "title": "Mapbox SF",
                    "icon": "harbor"
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
});
