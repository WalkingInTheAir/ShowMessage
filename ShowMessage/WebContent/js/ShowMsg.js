  var ShowMsg = function(content, title, effect){
	  //var json=jQuery.parseJSON(jsonData);
	 var $showBox = $("<div class='ShowMsg ShowMsg-info' style='display:none;'><span class='ShowMsg-close'>×</span></div>");
	 var $title = $("<span class='ShowMsg-title'></span>").text(title);
	 var $content = $("<p></p>").text(content);
	 $showBox.append($title).append($content);
	 $("body").append($showBox);
	 $showBox.slideDown(1000);
	 $(".ShowMsg-close").click(function(){
			$(".ShowMsg").slideUp(1000);
		});
  };
