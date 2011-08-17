function setVideo(placeObj){
	var videoId = placeObj.video;
	var params = { allowScriptAccess: "always" };
	var atts = { id: placeObj.name + "_player", class: "player"};
//	var swfUri = "http://www.youtube.com/v/"+videoId+"&enablejsapi=1&playerapiid="+ placeObj.name;
	var swfUriWOC = "http://www.youtube.com/apiplayer?enablejsapi=1&playerapiid="+ placeObj.name;
	swfobject.embedSWF(swfUriWOC, placeObj.name + "_vid", "300", "225", "8", null, null, params, atts);
}

// This function is automatically called by the player once it loads
function onYouTubePlayerReady(playerId) {
	var obj;
	for(var i=0; i<placeObjs.length;i++){
		if(playerId == placeObjs[i].name){
			obj = placeObjs[i];
		}
	}
	var objId = getPlayerId(obj);
	objId.cueVideoById(obj.video);
}



function getPlayerId(obj){
	var objId = document.getElementById(obj.name + "_player");
	return objId;
}

function playVideo(obj) {
	var objId = getPlayerId(obj);
	if (objId) {
		objId.playVideo();
	}	
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
	}
}

function seekTo(obj,startSec) {
	var objId = getPlayerId(obj);
	if (objId) {
		objId.seekTo(startSec,true);
	}	
}

function getCurrentTime(obj) {
	var objId = getPlayerId(obj);
	if (objId) {
		var now = objId.getCurrentTime();
		return now;
	}
}

function playVideoSection(obj, startSec, endSec){
	seekTo(obj, startSec);
	obj.interval = setInterval(function(){
		if(getCurrentTime(obj) > endSec){
			stopVideo(obj);
			clearInterval(obj.interval);
		}
	},500);
}
