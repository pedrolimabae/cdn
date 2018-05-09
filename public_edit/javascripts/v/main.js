 $plusMenuOff = (function(){return{view:function(){document.getElementById('ergfrgdr4').style.display='block'},close:function(l){l.parentElement.style.display='none'}}})()


 var body = document.body; var H = document.documentElement; 
 var height_body = Math.max( body.scrollHeight, body.offsetHeight, H.clientHeight, H.scrollHeight, H.offsetHeight);
 var height_window = window.innerHeight;
 var height_scroll, touchstart=null;
 var porcent = parseInt((height_body/100)*80);

 


isMobile = function(){
   return (/Android|webOS|iPhone|iPad|iPod|PlayBook|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
}

Id = function(id){
	 return document.getElementById(id);
}

var stop=0;
if(Id('gdtrgde5e5t')){
document.addEventListener("scroll", function(){
    height_scroll = window.pageYOffset || document.documentElement.scrollTop;
    if(height_scroll>porcent&&stop==0&&Id('rtgdtrgdrt')){    		
    	stop=1;
    	Id('rtgdtrgdrt').click()    	
    }
    
});
}

if(Id('sgsrtgws4g')){
Id('sgsrtgws4g').addEventListener("change", function(){
	if(this.value=='category'){
		var html = '<select id="drtgdrttd"><option>Escolhe uma categoria</option>';
		category.forEach(function(element){
			html += '<option value="'+element._id+'">'+element.name+'</option>';
		})
		html += '</select>'
		infoBlog('Buscar por categoria', html);
			
        Id('drtgdrttd').addEventListener("change", function(){
	        location.href='/articles/category/'+this.value;
        }) 
	}else if(this.value=='date'){
		var html = '<input type="date" id="trghrtyrrty" placeholder="informe uma data">';
	   infoBlog('Buscar por data', html);
	   Id('trghrtyrrty').addEventListener("change", function(){
	        location.href='/articles/date?q='+this.value;
       }) 

	}else{
		location.href='/articles/'+this.value;
	}
})
}

loadClass = '<div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>';
var intern;
  getFc = function(){
	  var cls = document.getElementsByClassName('getFc');
	  for(var i in cls){
		  cls[i].onclick = function(ev){
			  ev.preventDefault();
			  var _fc = this.getAttribute('data-fc');
			  try{
			  	var fc = eval(_fc);
			    return fc(this);
			  }catch(e){
		 	  	//console.log(e);
			  	if(e==undefined)return;
			     var href = this.getAttribute('href');
			     if(href=='#')return infoBlog();
			     if(href) return location.href = href;
			     infoBlog();
			  }

		  }
	  }
  }
  getFc();

  newTime = function(){
	  setTimeout(getFc);
	  hoverInput();
  }
  getWidth = function(){
	  return window.innerWidth;
  }
  getHeight = function(){
	  return window.innerHeight;
  }

  __loadClass = 'fa fa-circle-o-notch fa-spin';
  $ajax = (function(){
              var r=0;

	  var http = new XMLHttpRequest();
	  var callback, html=null;

	  http.onreadystatechange = function(){
		 if (this.readyState == 4 && this.status == 200 || this.status == 404 || this.status == 500 || this.status == 403 || this.status==502 || this.status==400 || this.status==504) {
		           return checkRequest(this.responseText);
                           }
	  };
	  function send($data, $callback){
		callback = $callback;
                          if(r==0){
		    http.send($data);
                              r=1;
                          }
	  }
	  function checkRequest(result){
                            r=0;
		  $load.stop();
		  try{
			var data = JSON.parse(result);
		  }catch(e){
			var data = result;
		  }
		  if(typeof(data) != 'object' && !html) data = {Exit : {}};
		  if(data){
			  if(data.Exit){
				  infoBlog(data.Exit.title, data.Exit.info);
			  }
		  }
		  if(typeof(callback) == 'function'){
		      if(data.newLogin) return newLogin();
			  callback(data);
		  }
		  function newLogin(){
		  	 infoBlog('Fazer Login', 'A sua sessão expirou, você deve fazer login novamente para fazer esta alteração.<br><br><iframe src="'+mb.url+'/login?location=close" style="width:100%;height:700px;"></iframe>')
		  }

	  }
	  return {
		  get : function($url, $callback, btn, _html){
			http.open("GET", $url, true);
			if(btn) $load.start(btn);
			html = _html;
			send('', $callback);
		  },
		  post : function($url, $vars, $callback, btn){
			http.open("POST", $url, true);
			http.setRequestHeader('Content-Type', 'application/json');
			if(btn) $load.start(btn);
			send(JSON.stringify($vars), $callback);
		  },
		  upload : function($url, $data, $callback, btn){
			http.open("POST", $url, true);
			if(btn) $load.start(btn);
            send($data, $callback);
		  }
	  }
  })();
  $modal = (function(){
	  var modal = {
		  close : function(){
			 Id('modal').innerHTML = '';
			 //if($menu.isHidden())
			 Id('body').className='';


		  },
		  info : function(title, info, twoBtn){
			  setData(title, info);
			  if(!twoBtn){
				  return setOneBtn();
			  }
			  setTwoBtn(twoBtn);
	      },
	      existInfo : function(){
	      	if(window.info){
	      		$modal.info(info.title, info.content, info.data);
	      	}
	      }
	  };
	  var html;
	  function setData(title, info){
		  html = '<div class="modal-fixed" id="modalInfo"><div class="modal" id="rgtertg"><div class="modal-header"><p>'+title+'</p><i class="fa fa-close getFc" data-fc="$modal.close"></i></div>';
		  html += '<div class="modal-body" id="modalBody"><p>'+info+'</p></div><div class="modal-footer">';

	  };
	  function setOneBtn(name, fc){
		  if(!name) name = 'Fechar';
		  if(!fc)fc = '$modal.close'
		  html += '<button class="btn getFc" data-fc="'+fc+'" id="srgfsrtg45555">'+name+'</button>';
		  view();
	  };
	  function setTwoBtn(data){
		  if(!data.nameTwo) data.nameTwo = 'Cancelar';
		  if(!data._fc) data._fc = '$modal.close';
		  if(!data.fc) data.fc = '$modal.close';
		  html += '<button class="btn srgstr getFc" data-fc="'+data.fc+'">'+data.nameOne+'</button><button class="btn getFc" data-fc="'+data._fc+'">'+data.nameTwo+'</button>';
		  view();
	  }
	  function view(){
	  	  Id('body').className='hidden';
		  Id('modal').innerHTML = html;
		  Id('modalInfo').classList.remove('none');
		  if(Id('srgfsrtg45555')) Id('srgfsrtg45555').focus();
		  newTime();
	  }
	  return modal;
  })();
  infoBlog = function(title, info, twoBtn){
  	if(!title) title = 'Erro encontrado';
  	if(!info) info = 'Atualize a página e tente novamente, se o erro persistir contate o suporte';
	$modal.info(title, info, twoBtn);
  }
  $modal.existInfo();
  $load = (function(){
	  var button,
	  data = {};
	  var load = {
		  start : function(btn){
			  button = btn;
			  startLoad();
		  },
		  stop : function(){
			  stopLoad();
		  }
	  }
	  function startLoad(){
		  data.title = button.getAttribute('title');
		  data.html = button.innerHTML;
		  button.setAttribute('title','Carregando...');
		  button.setAttribute('disabled','disabled');
		  var content = 'Aguarde <i class="'+__loadClass+'"></i>';
		  button.innerHTML = content;
	  }
	  function stopLoad(){
	  	  if(!button) return;
		  button.setAttribute('title',(data.title ? data.title : ''));
		  button.removeAttribute('disabled');
		  button.innerHTML = data.html;
	  }
	  return load;
  })();
  isExit = function(res, key){
  	if(!key){
		if(!res.Exit) throw infoBlog()
	}
  }

function search(){
    var search = document.getElementsByClassName('search');
    for(i in search){
        search[i].onkeyup = function(ev){
 	        if(ev.keyCode==13 && this.value){
                locationSearch(null, this);
 	        }
        }
    }
}
search();
function $search(btn, q){
	if(btn) var q = btn.parentElement.children[0].value
	location.href= '/search/posts?q='+q;
}
submitSearch = function(icon){
   var input = icon.parentElement.children[0];
   locationSearch(input);
}
function locationSearch(input){
	if(!input.value)return infoBlog('Campo vazio','Informe a sua pergunta no campo de pesquisa');
	var url = location.origin+'/search/posts?query='+input.value;
	location.href=url;
}



function hoverInput(){
	inputs = document.getElementsByTagName('input');
	for(i=0; i<inputs.length;i++){
		inputs[i].onfocus = function(){
			if(this.type=='text' || this.type=='search' || this.type=='password'){
	    	    this.classList.add('hoverInput');
	        }
	    }
		inputs[i].onblur = function(){
		    this.classList.remove('hoverInput');
	    };
	}
}
hoverInput();

if(window.info){
	infoBlog(info.title, info.content, info.data)
}

removeString = function(v){
   return v.replace(/\D/g,"");
}

 $posts = (function(){
    return {
      get : function(btn){
        var _id = btn.getAttribute('data-id');
        var w = btn.getAttribute('data-where');
        var d = btn.getAttribute('data-option');
		var n = btn.getAttribute('data-numview');
		var ct = btn.getAttribute('data-category');
		var dt = btn.getAttribute('data-date');
		
        $ajax.get('/posts/get/'+w+'/'+_id+getQuery(), function(res){
          if(res&&res.posts) return setHtml(res.posts, res.adm, btn);
        }, btn);
       function getQuery(){
        	var q = '?type=ajax';
        	if(d) q+='&option='+d;
			if(ct) q+='&_idcategory='+ct;
			if(dt) q+= '&date='+dt;
			q+='&last_numview_number='+(n ? n : 1);

			

        	if(window.query&&window.query.length) q+= '&q='+window.query;
        	return q;
        }
      }
    }

    function setHtml(posts, adm, btn){
      var html = '';
      posts.forEach(function(element){

      	html += ' <div class="drtgdtdt55 col-lg-4"><div class="drgdtrtg"><div class="rtgdtrgdt"><div class="ertgdtr"><span><a href="'+mb.url+'/articles/'+element.domain+'">'+element.domain+'</a></span>';
		
	   if(element.category){
		   html += '<span><a href="'+mb.url+'/articles/category/'+element.category._id+'">'+element.category.name+'</a></span>';
		}
		if(element.numView){
           html += '<span class="dgtdr"  title="Todas as visitas"><i class="fa fa-eye"></i><strong>'+element.numView+'</strong></span>';
        }
		if(element.myView){
           html += '<span class="dgtdr"  title="Minhas visitas"><i class="fa fa-eye"></i><i class="fa fa fa-user"></i><strong>'+element.myView+'</strong></span>';
        }
        html +='</div><a href="'+element.url+'"><img src="'+element.cover+'"></a><p><a href="'+element.url+'">'+element.title+'</a><span><i class="fa fa-calendar"></i>'+element.date+'</span></p>';

        if(element.admin||adm){
          html += '<div class="drtgdrttt"><a href="'+mb.url+'/redactor/updatepost/'+element._id+'">Editar</a><a href="'+mb.url+'/redactor/deletepost/'+element._id+'" class="getFc" data-fc="$redactor.del" data-id="'+element._id+'">Excluir</a></div>';
        }
        html += '</div><div class="drtghdthty">';
        if(element.adm&&element.short_url){
          html +='<a href="#" class="drtgrtw getFc rdgdtrstr" data-fc="$share.showLink" data-link="'+element.short_url+'" data-url="'+element.long_url+'"><i class="fa fa-link"></i>Obter link</a>';
        }else{
           html += '<a href="#" class="drtgrtw getFc rdgdtrstr" data-fc="$share.link" data-id="'+element._id+'"><i class="fa fa-link"></i>Gerar link</a>'
        }

       html += '<a class="ddrdt" target="_blank" href="https://developers.facebook.com/tools/debug/sharing/?q='+element.url+'"><i class="fa fa-facebook"></i> Depurar link</a><a class="drgdtrght" target="_blank" href="'+element.url+'"><i class="fa fa-eye"></i> Visualizar artigo</a><a href="#" class="dtfthfthy getFc" data-fc="$matter.alert" data-id="'+element._id+'"><i class="fa fa-exclamation-triangle"></i> Relatar problema</a></div></div></div>';
 });

      var dv = document.createElement('span');dv.innerHTML=html;
      Id('gdtrgde5e5t').appendChild(dv);
      newTime();
      if(posts.length==24){
          btn.setAttribute('data-id', posts[23]._id)    
          btn.setAttribute('data-numview', posts[23].numViewReal);
		  btn.setAttribute('data-category', posts[23].category);
		  btn.setAttribute('data-date', posts[23].dateReal);
          height_body = Math.max( body.scrollHeight, body.offsetHeight, H.clientHeight, H.scrollHeight, H.offsetHeight);      
		  porcent = parseInt((height_body/100)*80);
          stop = 0;
      }else{
		  stop = 0;
      	  btn.remove();
      }
    }
  })()

  $share = (function(){
  	var _id;
    return {
    	link : function(btn){
            _id = btn.getAttribute('data-id');
            infoBlog('Gerar Link','Você tem certeza que deseja gerar link para esse post?', {fc : '$share.generateLink', nameOne : 'Sim'});
    	},
      generateLink : function(btn){

        $ajax.post('/generate/'+_id, {}, function(res){
          if(res&&res.link||res.url){
          	viewLink(res);
          }
        }, btn);
      },
      showLink : function(btn){
      	     var link = btn.getAttribute('data-link');
             var url = btn.getAttribute('data-url');
             viewLink({link : link, url : url})
       }
    }
    function viewLink(res){
        infoBlog('Link gerado',(res.exist ? '<b>Nota: Você já gerou este link anteriomente</b><br><br>' : '')+'<span class="dghthtfy"><span>O seu link foi gerado com sucesso.</span><input class="rtgdrte45" type="text" value="'+res.link+'" class="input" id="drtghdftty"><i class="segsgsgfyuy fa fa-clone getFc" data-fc="copyLink"></i></span>'+((res.link!=res.url) ? '<span class="dghthtfy"><span>Link Normal</span><input class="rtgdrte45" type="url" value="'+res.url+'" class="input" id="drtghdftty"><i class="segsgsgfyuy fa fa-clone getFc" data-fc="copyLink"></i></span>' : '')+'<strong class="dttyyr6" id="dftyhtyft"></strong>')    	
    }
  })()

$matter = (function(){
    var _id;
	return {
		confirm : function(btn){
			infoBlog('Solicitar Artigos','Descreva um pouco que tipo de artigo você gostaria de ver na plataforma ou o link de algum artigo especifico.<textarea style="height:100px;margin-top:50px" placeholder="Sua resposta" id="serdrteggg"></textarea>',  {nameOne : 'Enviar', fc : "$matter.send"})
		},
		send : function(btn){
            var msg =  Id('serdrteggg').value;
            if(!msg) return infoBlog('Solicitar artigo','Nos informe qual tipo de artigo você gostaria de compartilhar');
            var message = '<b>Solicitação de artigos:</b><br><br>'+msg;
			$ajax.post('/matter', {msg : message}, function(){}, btn);
		},
        alert : function(btn){
            _id = btn.getAttribute('data-id');
            infoBlog('Informar problema', 'Informe abaixo o problema que você encontrou neste artigo.<br><br><textarea style="height:100px" placeholder="Relate o problema" id="dgdtrgd"></textarea>', {nameOne : 'Informar', fc : '$matter.sendAlert'});
        },
        sendAlert : function(btn){
            var msg = Id('dgdtrgd').value;            
            if(!msg) return infoBlog('Formulário vazio', 'Por favor nos informe qual é o erro que você encontrou neste artigo!');
            message = 'Problema com artigo <a href="'+mb.url+'/post/'+_id+'">'+_id+'</a><br><br>:'+msg;
            $ajax.post('/articles/alert', {msg : message, _id : _id}, function(){}, btn)

        }

	}
})();

$support = (function(){
	return {
		sendMsg : function(){
			infoBlog('Falar com o suporte','Nos informe através deste formulário sua reclamação ou dúvida, nós lhe responderemos o mais breve possível.<br><br><textarea placeholder="Informe sua reclamação ou dúvida" style="height:120px" id="rtrdrtgr"></textarea>', {nameOne : 'Enviar', fc : '$support.send'});
		},
		send : function(btn){
			var msg = Id('rtrdrtgr').value;
			var message = '<b>Suporte:</b><br><br>'+msg;
			$ajax.post('/support', {msg : message}, function(){
				
			}, btn);
		}		
	}
			
})();
$redactor = (function(){
	return {
		confirm : function(){
			infoBlog('Quero ser redator','Que tipo de assunto você gostaria de publicar? ou em que site cadastrado na plataforma você gostaria de ser redator?<textarea style="height:100px;margin-top:50px" placeholder="Sua resposta" id="yyrtde45et5"></textarea>',  {nameOne : 'Enviar', fc : "$redactor.send"})
		},
		send : function(btn){
			var msg = Id('yyrtde45et5').value;
			var message = '<b>Solicitação de redator:</b><br><br>'+msg;
			$ajax.post('/matter', {msg : message}, function(){}, btn);
		},
		createPost : function(_btn){
			$ajax.post('/redactor'+Id('newPost').getAttribute('action'), {title : Id('title').value, cover : Id('cover').value, url : Id('url').value, category : Id('categoryPost').value, sendEmail : (Id('sendEmail') ? Id('sendEmail').getAttribute('data-active') : '')}, function(res){
				if(res&&res.urlPost){
					location.href=res.urlPost;
				}
			}, _btn)
		},
		setSendEmail : function(btn){
            var active = btn.getAttribute('data-active');
            if(active==1){
                btn.setAttribute('data-active',0);
                btn.children[0].className='fa fa-square'
            }else{
                btn.setAttribute('data-active',1);
                btn.children[0].className='fa fa-check-square'
            }
		},
	}
})();

if(Id('wte45t45te56')){
Id('wte45t45te56').addEventListener("change", function(){
	if(this.value=='redactor') return $redactor.confirm();
	if(this.value=='matter') return $matter.confirm();
	if(this.value=='add') return location.href = '/redactor/add'
    if(this.value=='default') return;
    return infoBlog();
})
}



$notifications = (function(){
    var idAppend = 'serfs4r43t';
  return {
    get : function(icon){
      load(icon);

      $ajax.get('/notifications/get?type=ajax', function(res){
        if(!res.notifications) return empty();
                if(res.notifications.length){
                  show(res.notifications);
                }else{
                    empty();
                }
      }, icon);
    },
        plus : function(link){
            var last_id = link.getAttribute('data-last');
            idAppend = link.getAttribute('data-append');
            link.innerHTML = '<i class="'+__loadClass+'"></i>';
            $ajax.get('/notifications/plus?_id='+last_id+'&type=ajax', function(res){
                link.remove();
                if(res.notifications){
                    show(res.notifications, true);
                }

            }, link);

        },
        del : function(icon){
            var _id = icon.getAttribute('data-id');
            if(!_id) return infoBlog();
            icon.className = __loadClass+' xdfgdf';
            $ajax.post('/notifications/delete', {_id :_id}, function(res){
                if(res.del){
                    icon.parentElement.parentElement.parentElement.remove();
                    if(Id('serfs4r43t') && Id('serfs4r43t').innerHTML == '') empty();
                    if(Id('ey56y5y55re5') && Id('ey56y5y55re5').innerHTML==''){
                        newStatus();
                    }
                }else{
                    icon.className = 'fa fa-trash xdfgdf getFc opc_trs';
                }

            });
        },
        deleteAll : function(link){
            var icon = link.children[0];
            icon.className = __loadClass;
            $ajax.post('/notifications/deleteAll', {}, function(res){
                if(!res.data) return icon.className='fa fa-trash';
                newStatus();
                if(Id('serfs4r43t')) empty();
            });
        }
  }
    function newStatus(){
      Id('efsrte5y5tggdt').innerHTML = '<div class="srgtdsr"><p>Suas notificações</p><span>Você não tem nenhuma nova notificação</span></div>';

    }
  function empty(){
    Id('serfs4r43t').innerHTML = '<div class="gtse45tesregf"><p class="rtgd5te">Você não tem nenhuma nova notificação</p>';
  }
  function load(icon){
        num = Id('srgte45tewtw4');
        if(num){
            num.remove();
        }
        icon.setAttribute('title','Você não tem nenhuma nova notificação');
        $menu.setLoadNews();
  }


  function show(notifications, plus){
    var html = '';
        notifications.forEach( function(element, index) {
            html += '<div class="dtrgdtrdtr '+(!element.click ? 'rgtd65e5tdgtr' : '')+'"><div class="lft_wdt"><div class="drtdg5rte54"><div class="tghfuylokgjuyf"><div class="trghdthykmhol"><img class="lft_wdt" src="'+element.avatar+'"></div><div class="drtgd6y56yr6"><span class="lft_wdt"><a class="roboto_bold opc_trs" href="'+element.address+'">'+element.name+'</a></span><span class="lft_wdt"><i class="fa fa-clock-o"></i>'+element.date+'</span></div></div><i class="fa fa-trash drtgd56ey56 getFc opc_trs" data-fc="$notifications.del" data-id="'+element._id+'" title="Excluir"></i></div></div><a href="'+element.url+'" class="sdrgtr">'+element.title+'</a></div>';
        });
        if(notifications.length == 10){
            html += '<span class="rgtdt56y getFc" data-fc="$notifications.plus" data-last="'+notifications[9]._id+'" data-append="'+idAppend+'">Mostrar mais notificações</span>';
        }

        var idView = Id(idAppend);
        if(plus){
            idView.innerHTML += html;
        }else{
            idView.innerHTML = html;
        }
        newTime();
  }

})();
$menu = (function(){
	var html = '<div class="dtrgdrtrt"><div class="rfsr45te54t"></i>';
	return{
		open : function(btn){
			if(getWidth()>=770) return location.href='/logout';
			btn.setAttribute('class', 'fa fa-close sgtddtgd545t opc_trs getFc');
			btn.setAttribute('data-fc', '$menu.close');
			Id('body').classList.add('hidden');
			Id('dtrgdtget').classList.add('etrtggggg');
		},
		close : function(btn){
			btn.setAttribute('class', 'fa fa-bars sgtddtgd545t opc_trs getFc');
			btn.setAttribute('data-fc', '$menu.open');
			Id('body').classList.remove('hidden');
			Id('dtrgdtget').classList.remove('etrtggggg');
		},
		setLogout : function(){
			if(getWidth()>=770&&Id('gdt5rr')){
			Id('gdt5rr').setAttribute('title','Sair');
			}
		}
	}
})();
$menu.setLogout();

copyLink = function(btn){
	
	input = btn.parentElement.children[1];
	if(!input.getAttribute('type')) input = btn.parentElement.children[0];
	input.select();
    try {
        document.execCommand('copy');
        Id('dftyhtyft').innerHTML='Link copiado com sucesso';
    }catch(e){
        Id('dftyhtyft').innerHTML='Não foi possível copiar o link, tente manualmente';
    }
}

if(Id('dgetgeeee5e')&&getWidth()<1000){
	Id('dgetgeeee5e').classList.remove('none')
}

var numberPainel=(Id('v_day') ? parseInt(Id('v_day').innerHTML) : 0);
var num=numberPainel;
function updatePainel(){
	$ajax.get('/api/update', function(res){
        if(res&&res.views){
            var element = res.views;
            showHtmlPainel(element.v_day, parseInt(Id('v_day').innerHTML));
			showHtmlLinks(res.links)
        }
	}, null, true)    
}
var timeUpdate=0;
function showHtmlPainel(number, atual){	

	if(numberPainel==number) return;

	
	numberPainel = number;

    if(timeUpdate) return;

    var m = (numberPainel-num), t=200;
    if(m>=100) t = 100;
    if(m>=500) t = 35;
    if(m>=1000) t = 15;
	if(m>=5000) t = 3;
    if(m>=10000) t = 1;

    
    var loop = setInterval(insertViews, t);

    function insertViews(){
    	if(num<=numberPainel){
            Id('v_day').innerHTML = num;
            num++;
            timeUpdate=1;
    	}else{
    		clearInterval(loop);
    		timeUpdate=0;
    	}     
    }


}
function showHtmlLinks(links){
	var html = '<h3>Últimos links gerados</h3>';
	links.forEach(function(element){
		html += '<p class="yr65ry trgdtget5"><span class="tgdtg"><a href="'+element.url+'" target="_blank">'+element.title+'</a></span><span class="dtgdtr">'+(element.myView ? element.myView : 0)+'</span></p>';
	})
	if(links.length){
		Id('dtgdtgdtdg').innerHTML = html;
	}
}
if(Id('dtrghdtgdtg')){
   setInterval(updatePainel, 20000);
}

$transaction = (function(){
    var v;
    return {
        check : function(btn){
            v = btn.getAttribute('data-value');
            if(!v) return infoBlog('Saldo indisponível','Você não possui saldo disponível')
            infoBlog('Transferir saldo', 'Você tem disponível <b>R$ '+v+'</b><br><br>Informe o valor a ser transferido para o seu amigo<br><br><input id="transactionValue" type="number" value="'+v+'" placeholder="Saldo disponível" min="0" max="'+v+'"><br><br><input type="email" placeholder="Email do seu amigo" id="emailUser">', {nameOne : 'Transferir', fc : '$transaction.send'});
        },
        send : function(btn){
            var data = {value : Id('transactionValue').value, email : Id('emailUser').value}
            if(!data.value) return infoBlog('Saldo Vazio', 'Informe um saldo para transferir');
            if(!data.email) return infoBlog('Email inválido','Informe o email do seu amigo');
            if(data.value>v) return infoBlog('Saldo indisponível', 'Informe um valor igual ou inferior ao seu saldo');
            $ajax.post('/transaction', data, function(res){
                if(res&&res.location) return location.href = res.location;
            }, btn)
        }
    }

})();

$avatar = (function(){
     var data = {};
    data.types = ['PNG','png','JPG','jpg','jpeg','JPEG'];
    data.reader = new FileReader();
    data.image = new Image();

return {
    get : function(link){
            createInput();
            data.input.click();
            data.url = link.getAttribute('data-url');
            link.classList.add('none');
            data.input.onchange = function(){
                checkPhoto(this.files[0]);
                loadFile(this.files[0]);
               data.img = this.files[0];
            }

    function loadFile(file){
        data.reader.onload = function() {
            data.image.onload = function() {
                showFile(this);
            }
            data.image.src = this.result;
        }
        data.reader.readAsDataURL(file);
    }
    function createInput(){
        data.input = document.createElement('input'),
        data.input.type='file';
    }
    function checkPhoto(img){
        checkSize(img.size);
        checkType(img.type);
    }
    function checkSize(size){
         if(size > 5 * 1024 * 1024) throw  infoBlog('Foto muito grande', 'A foto enviada é muito grande, Por favor envie uma foto que tenha no máximo 5MG');
    }
    function checkType(type){
       var array = type.split('/', 2);
       if(array[0] !== 'image') throw infoBlog('Arquivo inválido','O arquivo escolhido não é uma foto');
       if(data.types.indexOf(array[1]) === -1) throw infoBlog('Foto não permitida','Não aceitamos este tipo de foto');
    }

    function showFile(img){
         var resize_canvas = document.createElement("canvas"),
        width = 200,
        height = img.height / img.width * width;
        if(height>200) height=200;
        resize_canvas.width = width;
        resize_canvas.height = height;
        resize_canvas.getContext('2d').drawImage(img, 0, 0, width, height);
        data.width = width;
        data.height = height;
        data.base64 = resize_canvas.toDataURL("image/jpeg");
        Id('fsrgsdrgtdrt').innerHTML = '<div class="drtgdtrgtdgrt"><img class="drtgdtrgtdgrt" src="'+data.base64+'"><i class="fa fa-close regdrgd getFc" data-fc="$avatar.close"></i><span class="getFc" data-fc="$avatar.send">Salvar</span></div>';
        newTime();

    }
},
send : function(btn){
    var formData = new FormData();
    var photo = new Blob([data.base64], {type: 'doc/base64'});
    formData.set('file', photo);
    formData.set('width', data.width);
    formData.set('height', data.height);

    $ajax.upload('/upload/avatar', formData, function(res){
        if(res&&res.reload) location.reload();
    }, btn);

},
close : function(btn){
    if(data.url){
        html = '<div class="drtgdtrgtdgrt"><img  src="'+data.url+'"><i class="fa fa-camera dgrtdrtgtrgdtr getFc" data-fc="$avatar.get" data-url='+data.url+'"></i></div>';
         Id('fsrgsdrgtdrt').innerHTML = html;
    }else{
         Id('fsrgsdrgtdrt').innerHTML='<span class="drtgdtr"><i class="fa fa-user sfeserfsfges"></i><i class="fa fa-camera dgrtdrtgtrgdtr getFc" data-fc="$avatar.get"></i></span>';
    }
             newTime();

}
}
})();

$affiliates = (function(){
    return {
        generate : function(l){
            var link = l.getAttribute('data-link');
            infoBlog('Link de indicação','Use este link para que seus amigos possam registrar na plataforma como seu indicado.<span class="dghthtfy"><input class="rtgdrte45" type="text" value="'+link+'" class="input" id="drtghdftty"><i class="segsgsgfyuy fa fa-clone getFc" data-fc="copyLink"></i></span><strong class="dttyyr6" id="dftyhtyft"></strong>')
        }
    }
})()

removeNotification = function(btn){
	btn.parentElement.remove();
	$ajax.post('/removenotification', {}, function(){})
}

$color = (function(){
	var btn;
	return {
		set : function(btn){
		    var value = btn.getAttribute('data-color');
	        Id('dtrgdtget').style.background=value;
	        Id('fixed_menu').style.background=value;
	        save(value);
		},
		click : function(btn){
			btn = btn;
			var input = document.createElement('input');
			input.type="color";
			input.click();
			input.addEventListener('change', function(e){
				if(this.value=='#ffffff') return infoBlog(null, 'Cor não permitida')
                Id('dtrgdtget').style.background=this.value;
	            Id('fixed_menu').style.background=this.value;
	            btn.style.color=this.value;
	            save(this.value);
			})
		}
	}
	function save(value){
		$ajax.post('/color', {color : value}, function(){});

	}
})();

