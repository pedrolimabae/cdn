setTimeout(function(){
 var body = document.body;
 var H = document.documentElement; 
 var height_body = Math.max( body.scrollHeight, body.offsetHeight, H.clientHeight, H.scrollHeight, H.offsetHeight);
 var height_window = window.innerHeight;
 var height_scroll, touchstart=0;
 var porcent = parseInt((height_body/100)*(window.porcentScroll ? porcentScroll : 30));

 document.addEventListener('touchstart', function(e){
     touchstart++;
     //log('touchstart')
 });

 function checkScroll(){
  return(height_scroll>=porcent&&(touchstart>=1))
 }


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
  var reff = url.split('.')[1];
  if(!reff) return 0;
  if(reff=='facebook') return 1;
  if(reff=='co') return 1; //twitter
  if(reff=='youtube') return 1;
  if(reff=='instagram') return 1;
  if(reff=='pinterest') return 1;
  if(reff=='whatsapp') return 1;
  if(reff=='google') return 1;


}
isMobile = function(){
   return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|PlayBook|Opera Mini/i.test(navigator.userAgent));
}

var utm_content = get_id('utm_content');

//log(utm_content);
 
var scroll=0, time=0;
setTimeout(function(){
    time=1;
    //log(time)
}, (window.myTime ? myTime : 1000))

document.addEventListener("scroll", function(){
    height_scroll = window.pageYOffset || document.documentElement.scrollTop;    
    if(height_scroll>=porcent&&scroll==0&&time==1){
          if(utm_content&&!getCookie('_view_article')&&isMobile()&&checkScroll()){
            $_http.post('https://granasocial.com.br/adsense/ads/adsbygoogle', utm_content);
            setCookie('_view_article', 'ok', 1);
          }
      scroll=1;
      //log(scroll)
    }else if(time==0&&scroll==1){
      //log(scroll);
      scroll=0;
    }else{
      //log(height_scroll)
    }
})
}, 1000);