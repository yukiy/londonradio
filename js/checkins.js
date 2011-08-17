////test
function test(){
	alert("ho!");
}

function setEventListners(){
	$("#play_btn").click(function(){seekTo(placeObjs[1],10);});
	$("#playSection_btn").click(function(){playVideoSection(placeObjs[1],10,15);});
	$("#stop_btn").click(function(){pauseVideo(placeObjs[1]);});
}

////////////////////////////////////////////
var placeObjs = [
	chicago ={
			name: "chicago",
			officialName: "Gerry Rafferty - Baker Street",
			place: "ohareairport",
	//		place: "153350041353078",
			video: "SSd0pJSKzNY",
			checkins: 0,
			interval: null
	},
	heathrow ={
			name: "heathrow",
			officialName: "Heathrow International",
			place: "238343719514675",
			video: "Kej8DsnVVVk",
			checkins: 0,
			interval: null
	}
]

var chicago ={
		name: "chicago",
		officialName: "Gerry Rafferty - Baker Street",
		place: "ohareairport",
//		place: "153350041353078",
		video: "SSd0pJSKzNY",
		checkins: 0
};

var heathrow ={
		name: "heathrow",
		officialName: "Heathrow International",
		place: "238343719514675",
		video: "Kej8DsnVVVk",
		checkins: 0
};


$(function() {
	setEventListners();
	for(var i=0; i<placeObjs.length; i++){
		setup(placeObjs[i]);
		google.setOnLoadCallback(setVideo(placeObjs[i]));
		setLoop(placeObjs[i]);
	}
})


function setup(placeObj){
	$("#"+placeObj.name).append("<div id='"+placeObj.name+"_info'></div>");
	initialInfo(placeObj)
}

function initialInfo(placeObj){
	var checkinUri = "http://graph.facebook.com/";
	var placeId = placeObj.place;
	var url = checkinUri + placeId +"?callback=?";
	$.getJSON(url, function(data) {
			placeObj.checkins = data.checkins;
	});
	updateInfo(placeObj);
}

function updateInfo(placeObj){
	var infoElementId = placeObj.name + "_info";
	$("#"+infoElementId).empty();
	$("#"+infoElementId).append("<p>"+placeObj.officialName+"</p>");
	$("#"+infoElementId).append("<p>"+placeObj.checkins+" times checked in</p>");
}

function setLoop(placeObj){
	setInterval(function(){
			setCheckinMonitor(placeObj);
			updateInfo(placeObj);
	},5000)
}

function setCheckinMonitor(placeObj){
	var checkinUri = "http://graph.facebook.com/";
	var placeId = placeObj.place;
	var url = checkinUri + placeId +"?callback=?";
	$.getJSON(url, function(data) {
		var newCheckins = data.checkins;
		if(newCheckins != placeObj.checkins && newCheckins > placeObj.checkins){
			placeObj.checkins = newCheckins;
			playVideoSection(placeObj,10,15);
		}
	});
}

