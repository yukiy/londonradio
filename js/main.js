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
	fbLoad();
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
	FB.api(placeObj.place, function(data) {
		if(data.error){
			console.log(placeObj.placename + data.error.message);
		}else{
			placeObj.checkins= data.checkins;
			updateInfo(placeObj);
			placeObj.location = data.location;
		}
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
	playVideoSection(placeObj, placeObj.startTime, placeObj.endTime);
	$("#nowplaying").html("NOW PLAYING... "+placeObj.songname+" / "+placeObj.artist+" @"+placeObj.placename+" - "+placeObj.checkins+" checkins");

}


function monitorCheckins(placeObj){
	FB.api(placeObj.place, function(data) {
		if(data.error){
			console.log(placeObj.placename + data.error.message);
		}else{
			if(placeObj.marker == undefined || placeObj.marker.position == undefined || placeObj.marker.position.lat() == undefined){
				placeObj.marker= createMarkerFor(placeObj);
			}
			var newCheckins = data.checkins;
			if(newCheckins > placeObj.checkins){
				placeObj.checkins = newCheckins;
				play(placeObj);
			}
		}
	});
}

//facebook app load ////////////////////////////////////////////////////////////////////
var MY_APP_ID = 189494814415750;
function fbLoad(){
	FB.init({
		appId  : MY_APP_ID,
		status : true, // check login status
		cookie : true, // enable cookies to allow the server to access the session
		xfbml  : true, // parse XFBML
		channelUrl : 'http://WWW.MYDOMAIN.COM/channel.html', // channel.html file
		oauth  : true // enable OAuth 2.0
	});
}

//google maps////////////////////////////////////////////////////////////////////
function setMap(){
//	console.log("set map");
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
