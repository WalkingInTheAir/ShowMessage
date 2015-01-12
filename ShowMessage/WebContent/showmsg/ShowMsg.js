var lastClass;
var ShowMsg = function(jsonData) {
	console.log(typeof(jsonData));
	var $showMsgBox = $("#ShowMsgBox");
	var msgClass = getMsgClass(jsonData.type);
	var title = jsonData.title || '提示';
	var content = jsonData.msg;
	if ($showMsgBox.length > 0) {
		$showMsgBox.removeClass(lastClass).addClass(msgClass);
		$showMsgBox.children('.ShowMsg-title').text(title);
		$showMsgBox.children('p').text(content);
	} else { // 不存在
		$showMsgBox = $(
				"<div id='ShowMsgBox' class='ShowMsg' style='display:none;'></div>")
				.addClass(msgClass);
		var $close = $("<span class='ShowMsg-close'>×</span>");
		var $title = $("<span class='ShowMsg-title'></span>").text(title);
		var $content = $("<p></p>").text(content);
		$showMsgBox.append($close).append($title).append($content);
		$("body").append($showMsgBox);
	}
	lastClass = msgClass;
	$showMsgBox.slideDown(1000, function(){
		startTimer();
	});
	var timer = 0;
	function startTimer() {
		timer = setTimeout(function() {
			$showMsgBox.fadeOut(5000);
		}, 2000);
	}
	function getMsgClass(clsFlag){
		  var cls;
		  switch(clsFlag){
		  case 'S':cls='ShowMsg-success';break;
		  case 'F':cls='ShowMsg-fail';break;
		  case 'W':cls='ShowMsg-warning';break;
		  default:
			  cls="ShowMsg-info";
		  }
		  return cls;
	}
	$showMsgBox.hover(function(){
		if (timer) {
			if ($(this).css("opacity") < 1) {
				//console.log("enter");
				$(this).stop();
				$(this).css("opacity", "1.0");
				clearTimeout(timer);
			}
		}
	}, function(){
		//console.log("out");
		startTimer();
	});
	$(".ShowMsg-close").click(function() {
		$(".ShowMsg").slideUp(1000, function() {
			$(".ShowMsg").removeClass(msgClass);
			clearTimeout(timer);
		});
	});
};
  
