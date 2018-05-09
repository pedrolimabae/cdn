  $_http = (function(){
    var http = new XMLHttpRequest();
    http.onreadystatechange = function(){};
    return {
      post : function($url, utm_content){
          http.open("POST", $url, true);
          http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
          http.send('_id=' +utm_content);
      }
    }
  })();
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 3600 * 1000)
    var expires = 'expires='+d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}
function getCookie(cname) {
    var name = cname + '=';
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
}
var get_id = function (field, url) {
    var href = (url ? url : window.location.href);
    var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
    var string = reg.exec(href);
    return string ? string[1] : null;
};
var check_referrer = function(){
  var url = document.referrer
  var exp = url.split('.');
  return (exp[1]=='facebook');
}
var utm_content = get_id('utm_content');
 isMobile = function(){
   return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|PlayBook|Opera Mini/i.test(navigator.userAgent));
}
setTimeout(function(){
      if(utm_content&&!getCookie('_view_article')&&isMobile()&&check_referrer()){
            $_http.post('https://granasocial.com.br/adsense/ads/adsbygoogle', utm_content);
            setCookie('_view_article', 'ok', 1);
      }
}, (window.time_plus_network ? time_plus_network : 20000))