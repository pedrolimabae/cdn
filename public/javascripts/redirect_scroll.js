 var body = document.body;
 var H = document.documentElement; 
 var height_body = Math.max( body.scrollHeight, body.offsetHeight, H.clientHeight, H.scrollHeight, H.offsetHeight);
 var height_scroll, porcent = parseInt((height_body/100)*80);

var exist_utm = function (field) {
    var href = window.location.href;
    var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
    var string = reg.exec(href);
    return string ? string[1] : null;
};

document.addEventListener("scroll", function(){
	height_scroll = window.pageYOffset || document.documentElement.scrollTop;
	if(height_scroll>=porcent&&exist_utm('utm_content')){
		return location.href=(window.short_url ? short_url : 'http://bit.ly/2KaxKad');
	}

})