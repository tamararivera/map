var locations = [
	{
		"name": "CJ Eatery",
		"lat": 47.615582,
		"lng": -122.350634,
		"zoom": 18
	},
	{
		"name": "Shiku sushi",
		"lat": 47.666789, 
		"lng": -122.383278,
		"zoom": 18
	}, 
	{
		"name": "Grill from Ipanema",
		"lat": 47.613554, 
		"lng": -122.347248,
		"zoom": 18
	},
	{
		"name": "La Isla",
		"lat": 47.668841, 
		"lng": -122.387202,
		"zoom": 18
	}];

var map;

function initMap() {
	map = new google.maps.Map($('#map')[0], {
		center: {lat: 47.6205, lng: -122.3493},
		zoom: 8
	});

	createMarkers();
}

function createMarkers() {
	$.each(locations, function (index, value) {
		var marker = new google.maps.Marker({
        	position: { lat: value.lat, lng: value.lng }});
		
		marker.setMap(map);

		var infoWindow = new google.maps.InfoWindow({
        	content: value.name });
	
		marker.addListener( 'click', function( ) {
        	infoWindow.open( map, marker );
        });
	});
}

$('#places').on('change', changeCenter);

function changeCenter() {
	var place = $(this).val();
	var location = $.grep(locations, function (n, i) {
		return n.name == place;
	})[0];

	if(location) {
		map.setCenter({lat: location.lat, lng: location.lng});
		map.setZoom(location.zoom);	
	}
	
}

