function setVideo(placeObj){
	var videoId = placeObj.video;
	var params = { allowScriptAccess: "always" };
	var atts = { id: placeObj.name + placeObj.video };
//	var swfUri = "http://www.youtube.com/v/"+videoId+"&enablejsapi=1&playerapiid="+ placeObj.name;
	var swfUriWOC = "http://www.youtube.com/apiplayer?enablejsapi=1&playerapiid="+ placeObj.name;
	swfobject.embedSWF(swfUriWOC, placeObj.name + "_vid", "300", "225", "8", null, null, params, atts);
}

// This function is automatically called by the player once it loads
function onYouTubePlayerReady(playerId) {
	var placeObj;
	for(var i=0; i<placeObjs.length;i++){
		if(playerId == placeObjs[i].name){
			placeObj = placeObjs[i];
		}
	}
	
	var objId = document.getElementById(placeObj.name + placeObj.video);
	objId.cueVideoById(placeObj.video);
}


function playVideo(obj) {
	var objId = document.getElementById(obj.name + obj.video);
	if (objId) {
		objId.playVideo();
	}	
}

function pauseVideo(obj) {
	var objId = document.getElementById(obj.name + obj.video);
	if (objId) {
		objId.pauseVideo();
	}	
}

function stopVideo(obj) {
	var objId = document.getElementById(obj.name + obj.video);
	if (objId) {
		objId.stopVideo();
	}
}

function seekTo(obj,startSec) {
	var objId = document.getElementById(obj.name + obj.video);
	if (objId) {
		objId.seekTo(startSec,true);
	}	
}

function getCurrentTime(obj) {
	var objId = document.getElementById(obj.name + obj.video);
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

