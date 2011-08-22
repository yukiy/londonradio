function addTestForms(){
	$("#test").append("<select id='select_vid'></select>");
	for(var i=0; i<placeObjs.length; i++){
		$("#select_vid").append("<option>"+i+"</option>");
	}
	$("#test").append("<input type='button' value='test play' id='testplay_btn' /></div>");
	$("#test").append("<input type='button' value='get status' id='getstatus_btn' /></div>");
}
function test(){
	var val = $("#select_vid").val();
	play(placeObjs[val]);
}
function getStatus(){
	console.log("isPlaying: " + isPlaying);
	console.log("videoPlaying: " + videoPlaying.id);
}
function setEventListners(){
	$("#testplay_btn").click(function(){test();});
	$("#getstatus_btn").click(function(){getStatus();});
}
function addTestElements(){
	addTestForms();
	setEventListners();
}

////////////////////////////////////////////////////////////////////////////////////


$(function() {
	addTestElements();
	setMap();
	for(var i=0; i<placeObjs.length; i++){
		setHTML(placeObjs[i]);
		setInitialInfo(placeObjs[i]);
		google.setOnLoadCallback(setVideo(placeObjs[i]));
		setLoop(placeObjs[i]);
	}
})


function setHTML(placeObj){
	$("#videos").append("<span id='"+placeObj.id+"' class='container'><div id='"+placeObj.id+"_vid'>Loading...</div></span>");
	$("#"+placeObj.id).append("<div id='"+placeObj.id+"_info' class='place_info'></div>");
	var style = {
		width: videoW,
		"margin-left": "1px",
		"margin-right": "1px",
		"margin-top": "0px",
		"margin-bottom": "0px"
	}
	$('.container').css(style);
}

function setInitialInfo(placeObj){
	var graphUrl = "http://graph.facebook.com/";
	var placeId = placeObj.place;
	var url = graphUrl + placeId +"?callback=?";
	$.getJSON(url, function(data) {
		placeObj.checkins= data.checkins;
		updateInfo(placeObj);
		placeObj.location = data.location;
	});
}

function setLoop(placeObj){
	var checkinLoop= setInterval(function(){
			monitorCheckins(placeObj);
		},5000);

	var displayLoop= setInterval(function(){
		updateInfo(placeObj);
	},15000)
}


function updateInfo(placeObj){
		var infoElementId = placeObj.id + "_info";
		$("#"+infoElementId).empty();
	//	$("#"+infoElementId).append("<p class='place_name'>"+placeObj.placename+"</p>");
	//	$("#"+infoElementId).append("<p class='place_checkins'>"+placeObj.checkins+" times checked in</p>");
		$("#"+infoElementId).append("<marquee class='scroll'>"+placeObj.songname+" / "+placeObj.artist+" @"+placeObj.placename+" - currently "+placeObj.checkins+" checkins</marquee>");
		var style= {
			"margin-top": "0",
			"background": "#000000",
		}
		$(".scroll").css(style);
}


function play(placeObj){
	setPlayerSize(placeObj, "100%", "100%");
//	setPlayerSize(placeObj, videoW*4, videoH*4);
	playVideoSection(placeObj, placeObj.startTime, placeObj.endTime);
	$("#nowplaying").html("NOW PLAYING... "+placeObj.songname+" / "+placeObj.artist+" @"+placeObj.placename+" - "+placeObj.checkins+" checkins");

}


function monitorCheckins(placeObj){
	var graphUrl = "http://graph.facebook.com/";
	var placeId = placeObj.place;
	var url = graphUrl + placeId +"?callback=?";
	$.getJSON(url, function(data) {
		if(placeObj.marker == undefined || placeObj.marker.position == undefined || placeObj.marker.position.lat() == undefined){
			placeObj.marker= createMarkerFor(placeObj);
			console.log(placeObj.marker);
		}
		var newCheckins = data.checkins;
		if(newCheckins > placeObj.checkins){
			placeObj.checkins = newCheckins;
			play(placeObj);
		}
	});
}



//google maps////////////////////////////////////////////////////////////////////
function setMap(){
	var london_latlng = new google.maps.LatLng(51.500152,-0.126236);
	mainMap = createMap(london_latlng);
}

function createMarkerFor(placeObj){
	var lat= placeObj.location.latitude;
	var lng= placeObj.location.longitude;
	var placeLatlng= new google.maps.LatLng(lat, lng);
	var marker = createMarker(mainMap, placeLatlng, placeObj.id);
	var infoStr= "<div style='color:black; overflow:hidden'>\"" + placeObj.songname + "\"<br/>" + placeObj.artist + "<br/>" + placeObj.placename + "<br/>" + placeObj.checkins + " checkins </div>";
	marker.infoWindow = createInfoWindow(mainMap, marker, infoStr);
	return marker;
}
