var mainMap;
var iconImg = 'http://wavearts.com/_img/img-mic.png';

function setTestMap(){
	var london_latlng = new google.maps.LatLng(51.500152,-0.126236);
	mainMap = createMap(london_latlng);
	var mainMarker = createMarker(mainMap, london_latlng, "London", iconImg);
	var infoStr = '<iframe width="280" height="172" src="http://www.youtube.com/embed/i7mgO4arDWU" frameborder="0" allowfullscreen></iframe>';
	createInfoWindow(mainMap, mainMarker, infoStr);
}


function createMap(latlng) {
	var myOptions = {
		zoom: 12,
		center: latlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);
	return map;
}


function createMarker(map, latlng, title, iconImg){
	var marker = new google.maps.Marker({
		position: latlng,
		map: map,
		title: title,
		icon: iconImg
	});
	return marker;
}


function createInfoWindow(map, marker, content){
	var infowindow = new google.maps.InfoWindow({
		content: content,
		maxWidth: 400,
	});
	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map,marker);
	});
	return infowindow;
}

