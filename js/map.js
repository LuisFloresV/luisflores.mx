var options = {
    zoom: 5,
    center: new google.maps.LatLng(66, -18),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true,
    scrollwheel: false,
    draggable: false,
    styles: [
    {
      featureType: "administrative",
      elementType: "labels",
      stylers: [{
        visibility: "off"
      }]
    }, {
      featureType: "poi",
      elementType: "labels",
      stylers: [{
        visibility: "off"
      }]
    }, {
      featureType: "poi",
      elementType: "geometry",
      stylers: [{
        color: "#000000"
      }, {
        lightness: 21
      }]
    }, {
      featureType: "water",
      elementType: "labels",
      stylers: [{
        visibility: "off"
      }]
    }, {
      featureType: "water",
      elementType: "geometry",
      stylers: [{
        color: "#000000"
      }, {
        lightness: 5
      }]
    }, {
      featureType: "road",
      elementType: "labels",
      stylers: [{
        visibility: "off"
      }]
    }, {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#000000"
        }, {
            "lightness": 17
        }]
    }, {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#000000"
        }, {
            "lightness": 29
        }, {
            "weight": 0.2
        }]
    }, {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [{
            "color": "#000000"
        }, {
            "lightness": 18
        }]
    }, {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [{
            "color": "#000000"
        }, {
            "lightness": 16
        }]
    }, {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [{
        color: "#000000"
      }, {
        lightness: 20
      }]
    }, {
      elementType: "labels.icon",
      stylers: [{
        visibility: "off"
      }]
    }, {
      featureType: "transit",
      elementType: "geometry",
      stylers: [{
        color: "#000000"
      }, {
        lightness: 19
      }]
    }, {
      featureType: "administrative",
      elementType: "geometry.fill",
      stylers: [{
        color: "#000000"
      }, {
        lightness: 20
      }]
    }, {
      featureType: "administrative",
      elementType: "geometry.stroke",
      stylers: [{
        color: "#000000"
      }, {
        lightness: 17
      }, {
        weight: 1.2
      }]
    }]
};

var map = new google.maps.Map(document.getElementById('map'), options);
