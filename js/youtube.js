//300x225
var videoW = 300;
var videoH = 200;
var isPlaying = false;
var videoPlaying;


function setVideo(placeObj){
	videoW = $(document).width()/placeObjs.length;
	videoH = videoW * 2/3;
	var videoId = placeObj.video;
	var params = { allowScriptAccess: "always" };
	var atts = { id: placeObj.id + "_player", class: "player"};
//	var swfUri = "http://www.youtube.com/v/"+videoId+"&enablejsapi=1&playerapiid="+ placeObj.id;
	var swfUriWOC = "http://www.youtube.com/apiplayer?enablejsapi=1&playerapiid="+ placeObj.id;
	swfobject.embedSWF(swfUriWOC, placeObj.id + "_vid", videoW, videoH, "8", null, null, params, atts);
}

// This function is automatically called by the player once it loads
function onYouTubePlayerReady(playerId) {
	var obj;
	for(var i=0; i<placeObjs.length;i++){
		if(playerId == placeObjs[i].id){
			obj = placeObjs[i];
		}
	}
	var objId = getPlayerId(obj);
	objId.cueVideoById(obj.video);
}



function getPlayerId(obj){
	var objId = document.getElementById(obj.id + "_player");
	return objId;
}


function getCurrentTime(obj) {
	var objId = getPlayerId(obj);
	if (objId) {
		var now = objId.getCurrentTime();
		return now;
	}
}


function playVideo(obj) {
	var objId = getPlayerId(obj);
	if (objId) {
		isPlaying = true;
		videoPlaying = objId;
		objId.playVideo();
	}	
}

function seekTo(obj,startSec) {
	var objId = getPlayerId(obj);
	if (objId) {
		isPlaying = true;
		videoPlaying = obj;
		objId.seekTo(startSec,true);
	}
}

function setPlayerSize(obj, w, h){
	var objId = getPlayerId(obj);
	if (objId) {
		$("#"+obj.id).width(w);
		$("#"+obj.id).height(h);
		$("#"+obj.id+"_player").attr("width", w);
		$("#"+obj.id+"_player").attr("height", h);
//		objId.setSize(w,h);
	}
}

function playVideoSection(obj, startSec, endSec){
	
	if(isPlaying){
		stopVideo(videoPlaying);
	}
	seekTo(obj, startSec);
	
	console.log(obj);
	
	mainMap.setZoom(18);
	
	//change marker icon to microphone
	obj.marker.setIcon(iconImg);
	
	//open the info window for the current location/song
	openInfoWindow(mainMap, obj.marker);
	
	//change centre of map to new location
	moveMapCenter(obj.location.latitude, obj.location.longitude);
	
	obj.interval = setInterval(function(){
		if(getCurrentTime(obj) > endSec){
			stopVideo(obj);
			$("#nowplaying").html("WAITING FOR CHECKINS");
			clearInterval(obj.interval);
		}
	},500);
}

function pauseVideo(obj) {
	var objId = getPlayerId(obj);
	if (objId) {
		objId.pauseVideo();
	}	
}

function stopVideo(obj) {
	var objId = getPlayerId(obj);
	if (objId) {
		objId.stopVideo();
		isPlaying = false;
		obj.marker.setIcon(undefined);
		
		//close the info window for the current location/song
		closeInfoWindow(mainMap, obj.marker);
		
		setPlayerSize(obj,videoW, videoH);
	}
}
