function setVideo(placeObj){
	var videoId = placeObj.video;
	var params = { allowScriptAccess: "always" };
	var atts = { id: placeObj.id + "_player", class: "player"};
//	var swfUri = "http://www.youtube.com/v/"+videoId+"&enablejsapi=1&playerapiid="+ placeObj.id;
	var swfUriWOC = "http://www.youtube.com/apiplayer?enablejsapi=1&playerapiid="+ placeObj.id;
	swfobject.embedSWF(swfUriWOC, placeObj.id + "_vid", "100%", "100%", "8", null, null, params, atts);
}

// This function is automatically called by the player once it loads
function onYouTubePlayerReady(playerId) {
	var obj;
	for(var i=0; i<placeObjs.length;i++){
		if(playerId == placeObjs[i].id){
			obj = placeObjs[i];
		}
	}
	var player = getPlayer(obj.id);
	player.cueVideoById(obj.video);
}

function setVideoSize(id, w, h){
	$("#"+id).width(w);
	$("#"+id).height(h);
}

function getPlayer(id){
	var playerEl = document.getElementById(id + "_player");
	return playerEl;
}


///////////////////////////////////////////////////////////////////////

function playVideoSection(player, startSec, endSec, func){
	player.seekTo(startSec,true);	
	var interval = setInterval(function(){
		if(player.getCurrentTime() > endSec){
			player.stopVideo();
			func();
			clearInterval(interval);
		}
	},500);
}
