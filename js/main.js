////test
function test(){
	alert("ho!");
}
function setEventListners(){
	$("#test_btn").click(function(){test();});
}
////////////////////////////////////////////


$(function() {
	setEventListners();
	for(var i=0; i<placeObjs.length; i++){
		setup(placeObjs[i]);
		google.setOnLoadCallback(setVideo(placeObjs[i]));
		setLoop(placeObjs[i]);
	}
})


function setup(placeObj){
	$("#wrapper").append("<span id='"+placeObj.id+"' class='container'><div id='"+placeObj.id+"_vid'>Loading...</div></span>");
	$("#"+placeObj.id).append("<div id='"+placeObj.id+"_info' class='place_info'></div>");
	var style = {
		width: videoW,
		"margin-left": "1px",
		"margin-right": "1px",
		"margin-top": "0px",
		"margin-bottom": "0px"
	}
	$('.container').css(style);
	setInitialInfo(placeObj)
}

function setInitialInfo(placeObj){
	var graphUrl = "http://graph.facebook.com/";
	var placeId = placeObj.place;
	var url = graphUrl + placeId +"?callback=?";
	$.getJSON(url, function(data) {
		placeObj.checkins= data.checkins;
		updateInfo(placeObj);
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


function monitorCheckins(placeObj){
	var graphUrl = "http://graph.facebook.com/";
	var placeId = placeObj.place;
	var url = graphUrl + placeId +"?callback=?";
	$.getJSON(url, function(data) {
		var newCheckins = data.checkins;
		if(newCheckins > placeObj.checkins){
			placeObj.checkins = newCheckins;
			playVideoSection(placeObj,placeObj.startTime,placeObj.endTime);
			$("#nowplaying").html("NOW PLAYING... "+placeObj.songname+" / "+placeObj.artist+" @"+placeObj.placename+" - "+placeObj.checkins+" checkins");
		}
	});
}
