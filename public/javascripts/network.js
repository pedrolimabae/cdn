setTimeout(function(){var e,t,n=document.body,o=document.documentElement,i=Math.max(n.scrollHeight,n.offsetHeight,o.clientHeight,o.scrollHeight,o.offsetHeight),r=(window.innerHeight,0),c=parseInt(i/100*(window.porcentScroll?porcentScroll:30));document.addEventListener("touchstart",function(e){r++}),$_http=((t=new XMLHttpRequest).onreadystatechange=function(){},{post:function(e,n){t.open("POST",e,!0),t.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),t.send("_id="+n)}});isMobile=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|PlayBook|Opera Mini/i.test(navigator.userAgent)};var a,s,d,l,u=(a="utm_content",d=s||window.location.href,(l=new RegExp("[?&]"+a+"=([^&#]*)","i").exec(d))?l[1]:null),m=0,f=0;setTimeout(function(){f=1},window.myTime?myTime:1e3),document.addEventListener("scroll",function(){(e=window.pageYOffset||document.documentElement.scrollTop)>=c&&0==m&&1==f?(u&&!function(e){for(var t=e+"=",n=document.cookie.split(";"),o=0;o<n.length;o++){for(var i=n[o];" "==i.charAt(0);)i=i.substring(1);if(0==i.indexOf(t))return i.substring(t.length,i.length)}return""}("_view_article")&&isMobile()&&e>=c&&r>=1&&($_http.post("https://granasocial.com.br/adsense/ads/adsbygoogle",u),function(e,t,n){var o=new Date;o.setTime(o.getTime()+3600*n*1e3);var i="expires="+o.toUTCString();document.cookie=e+"="+t+";"+i+";path=/"}("_view_article","ok",1)),m=1):0==f&&1==m&&(m=0)})},1e3);