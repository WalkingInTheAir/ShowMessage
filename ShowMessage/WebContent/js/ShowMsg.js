var ShowMsg = function(content, title, effect) {
	// var json=jQuery.parseJSON(jsonData);
	var $showBox = $("<div class='ShowMsg ShowMsg-info' style='display:none;'><span class='ShowMsg-close'>×</span></div>");
	var $title = $("<span class='ShowMsg-title'></span>").text(title);
	var $content = $("<p></p>").text(content);
	$showBox.append($title).append($content);
	$("body").append($showBox);
	$showBox.slideDown(1000, function() {
		startTimer();
	});
	$(".ShowMsg-close").click(function() {
		$(".ShowMsg").slideUp(1000);
		clearTimeout(timer);
	});

	var timer = 0;
	function startTimer() {
		timer = setTimeout(function() {
			$showBox.fadeOut(5000);
		}, 2000);
	}
	$showBox.hover(function(){
		if (timer) {
			if ($showBox.css("opacity") < 1) {
				//console.log("enter");
				$showBox.stop();
				$showBox.css("opacity", "1.0");
				clearTimeout(timer);
			}
		}
	}, function(){
		startTimer();
		//console.log("out");
	});
};
