setTimeout(function(){ 
  $_ajax = (function(){ 
    var http = new XMLHttpRequest(); 
    http.onreadystatechange = function(){}; 
    return { 
      post : function($url, $_id){ 
        http.open("POST", $url, true); 
        http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); 
        http.send("_id="+$_id); 
      } 
    } 
  })(); 
  var get_id = function (field) { 
    var href = ia_document.shareURL; 
    var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i'); 
    var string = reg.exec(href); 
    return string ? string[1] : null; };
    var _id = get_id('utm_content'); 
    if(_id){ 
      $_ajax.post('https://granasocial.com.br/analytics/facebook', _id) 
    } 
}, 5000)