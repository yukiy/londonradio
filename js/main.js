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
	$("body").append("<span id='"+placeObj.name+"'><div id='"+placeObj.name+"_vid'>Loading...</div></span>");
	$("#"+placeObj.name).append("<div id='"+placeObj.name+"_info' class='place_info'></div>");
	setInitialInfo(placeObj)
}


function setLoop(placeObj){
	setInterval(function(){
			monitorCheckins(placeObj);
	},5000)
}


function updateInfo(placeObj){
	var infoElementId = placeObj.name + "_info";
	$("#"+infoElementId).empty();
	$("#"+infoElementId).append("<p class='place_name'>"+placeObj.officialName+"</p>");
	$("#"+infoElementId).append("<p class='place_checkins'>"+placeObj.checkins+" times checked in</p>");
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


function monitorCheckins(placeObj){
	var graphUrl = "http://graph.facebook.com/";
	var placeId = placeObj.place;
	var url = graphUrl + placeId +"?callback=?";
	$.getJSON(url, function(data) {
		var newCheckins = data.checkins;
		if(newCheckins > placeObj.checkins){
			placeObj.checkins = newCheckins;
			playVideoSection(placeObj,placeObj.startTime,placeObj.endTime);
		}
		updateInfo(placeObj);
	});
}
