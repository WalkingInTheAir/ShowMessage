/**
 * @author BlackHorse
 * this component is used to show message friendly from HTTP response 
 */

//记录前一次class
var lastClass;
/**
 * @param jsonData: {type:xxx, title:xxx, msg:xxx}
 */
var ShowMsg = function(jsonData) {
	var $showMsgBox = $("#ShowMsgBox");
	
	var msgClass = getMsgClass(jsonData.type);
	var title = jsonData.title || '提示';
	var content = jsonData.msg;
	if ($showMsgBox.length > 0) {	
		//当前页面已生成过消息层，直接跟换class和内容
		$showMsgBox.removeClass(lastClass).addClass(msgClass);
		$showMsgBox.children('.ShowMsg-title').text(title);
		$showMsgBox.children('p').text(content);
	} else { 
		// 当前页面没有生成过消息层，动态创建
		$showMsgBox = $(
				"<div id='ShowMsgBox' class='ShowMsg'></div>")
				.addClass(msgClass);
		var $close = $("<span class='ShowMsg-close'>×</span>");
		var $title = $("<span class='ShowMsg-title'></span>").text(title);
		var $content = $("<p></p>").text(content);
		$showMsgBox.append($close).append($title).append($content);
		$("body").append($showMsgBox);
	}
	lastClass = msgClass;
	//采用slide特效显示，并启动计时器
	$showMsgBox.slideDown(1000, function(){
		startTimer();
	});
	var timer = 0;
	function startTimer() {
		//消息显示2s，自动fade out
		timer = setTimeout(function() {
			$showMsgBox.fadeOut(5000);
		}, 2000);
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
		$showMsgBox.slideUp(1000, function() {
			$showMsgBox.removeClass(msgClass);
			clearTimeout(timer);
		});
	});
	
	//根据class flag 确定具体的样式class
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
};
  
