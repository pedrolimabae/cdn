if(Id('dhtyhr67uj')){
Id('dhtyhr67uj').addEventListener("change", function(){
	location.href=this.value;
})
}

$webmasterNews = (function(){
	var data = {};
	return {
		confirmDeleteAccount : function(link){
			data._id = link.getAttribute('data-id');
			infoBlog('Excluir conta','Você tem certeza que deseja excluir este blog e todo o seu conteúdo permanentemente?',{fc : '$webmasterNews.deleteAccount', nameOne : 'Excluir'});
		},
		deleteAccount : function(btn){
			$ajax.post('/webmaster/notifications/deleteAccount', {_id : data._id}, function(res){
				if(res.data){
				    Id('ete4te_'+data._id).remove();
				}
			}, btn);
		},



		del : function(trash){
			var _id = trash.getAttribute('data-id');
			trash.className=__loadClass+' xdfgdf';
			$ajax.post('/webmaster/notifications/del', {_id : _id}, function(res){
				if(res.del){
					trash.parentElement.parentElement.parentElement.remove();
				}else{
					trash.className='fa fa-trash xdfgdf getFc opc_trs';
				}
			});
		},
		deleteAll : function(div){
			div.children[0].className=__loadClass;
			$ajax.post('/webmaster/notifications/delAll', {}, function(res){
				if(res.data){
					Id('rdte45ws').innerHTML = '';
					Id('efsrte5y5tggdt').innerHTML='<div class="srgtdsr"><p>Notificações</p><span>Nenhuma nova notificação</span></div>';
				}else{
					div.children[0].className='fa fa-trash';
				}

			});
		}
	}
})();


$webmaster = (function(){
	var data = {};
	return {
		confirmCreate : function(){
			infoBlog('Criar dados',showCollection(),{fc : "$webmaster.create", nameOne: "Sim"});
		},
		create : function(btn){
			var create = Id('dataCreate').value;
			if(!create) return infoBlog('Criar Dados','Informe um array para criar dados');
			$ajax.post('/webmaster/settings/create', {data : create, collection : getCollection(), host : getHost()}, function(){}, btn);

		},
		confirmFind : function(){
			infoBlog('Procurar dados',showCollection(),{fc : "$webmaster.find", nameOne: "Sim"});
		},
		find : function(btn){
			var query = Id('query').value;
			if(!query) return infoBlog('Query vazia','Por favor, informe a sua query');
			$ajax.post('/webmaster/settings/find',{query : query, collection : getCollection(), host : getHost()}, function(res){
				if(res&&res.data&&res.data.length){
					infoBlog('Dados encontrados','<textarea style="height:400px">'+JSON.stringify(res.data)+'</textarea>');
				}else{
					infoBlog('Nada encontrado','Nenhum dado encontrado com esta pergunta, tente outra');
				}

			}, btn);
		},
		confirmUpdate : function(){
			infoBlog('Atualizar dados',showCollection(),{fc : "$webmaster.update", nameOne: "Sim"});
		},
		update : function(btn){
            var query = Id('queryUpdate').value;
            var update = Id('dataUpdate').value;
            if(!query) return infoBlog('Query vazia','Informe uma query para atualizar um item');
            if(!update) return infoBlog('Update vazio','Informe os dados em array para serem salvos');
            $ajax.post('/webmaster/settings/update', {query : query, update : update, collection : getCollection(), host : getHost()}, function(){}, btn);
		},
		confirmDelete : function(){
			infoBlog('Excluir dados',showCollection(),{fc : "$webmaster.delete", nameOne: "Sim"});
		},
		delete : function(btn){
			var query = Id('queryDelete').value;
			if(!query) return infoBlog('Query vazia','Por favor, informe a sua query');
			$ajax.post('/webmaster/settings/delete',{query : query, collection : getCollection(), host : getHost()}, function(){}, btn);
		},
		/******************************************/
		confirmSendNews : function(){
			infoBlog('Enviar Notificação','Você tem certeza que deseja enviar esta notificação?',{fc : '$webmaster.sendNewsUser', nameOne : 'Sim'});
		},
		sendNewsUser : function(btn){
			var email = Id('email');
			var msg = Id('messageUser');
			$load.start(btn);
			$ajax.post('/webmaster/settings/sendnews', {email : email.value, message : msg.value}, function(res){
				if(res.data){
					address.value='';
					msg.value=''
				}
			});
		},		
		newsite : function(btn){
		   $ajax.post('/webmaster/newsite', {url : Id('domain').value, cpc : Id('cpc').value, ctr : Id('ctr').value, cpmAdsense : Id('cpmAdsense').value, cpmAudience : Id('cpmAudience').value, redactor : Id('redactor').value}, function(){}, btn)
		},
		updateSite : function(btn){
			var _id = btn.getAttribute('data-id');
			var dv = Id('drtgd_'+_id);
			if(!dv) return infoBlog();
			var cpc = dv.getElementsByTagName('input')[0];
			var ctr = dv.getElementsByTagName('input')[1];
			var cpmAdsense = dv.getElementsByTagName('input')[2];
			var cpmAudience = dv.getElementsByTagName('input')[3];
			var redactor = dv.getElementsByTagName('input')[4];

			$ajax.post('/webmaster/updatesite/'+_id, {cpc : cpc.value, ctr : ctr.value, cpmAdsense : cpmAdsense.value, cpmAudience : cpmAudience.value, redactor : redactor.value}, function(){}, btn);
		},
		sendNews : function(btn){
			data.email = btn.getAttribute('data-email');
			infoBlog('Enviar mensagem','Informe a mensagem abaixo:<br><br><textarea placeholder="mensagem" style="height:120px" id="dtyhdtyhe566"></textarea><br><br><span class="drtdtr8 getFc" data-fc="$webmaster.setSendEmail" data-active="1" id="setByEmail"><i class="fa fa-check-square-o"></i>Enviar por email também</span>', {nameOne : 'Enviar', fc : '$webmaster.sendNewsUserPay'});
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
		sendNewsUserPay : function(btn){
			$ajax.post('/webmaster/settings/sendnews', {email : data.email, message : Id('dtyhdtyhe566').value, setByEmail : Id('setByEmail').getAttribute('data-active')}, function(){}, btn);
		},
		confirmBanUser : function(btn){
			infoBlog('Banir usuário','Você tem certeza que deseja banir este usuário?', {nameOne : 'Sim', fc : '$webmaster.banUser'});
		},
		banUser : function(btn){
			if(!Id('emailUserBan').value) return infoBlog('Email vazio','Informe o email do usuário');
			$ajax.post('/webmaster/ban', {email : Id('emailUserBan').value}, function(){});
		},
		plusUsers : function(btn){
			btn.innerHTML='Aguarde...';
			btn.setAttribute('disabled','disabled');
			$ajax.post('/webmaster/earnings/plus/'+btn.getAttribute('data-where'), {_id : btn.getAttribute('data-lastuser')}, function(res){
				if(res&&res.users) return setView(res.users, btn);
			})
			function setView(users, btn){

				var html='';
				users.forEach(function(element){
					html+='<tr><td><a href="/webmaster/user/'+element._id+'">'+element.name+'</a></td><td>'+(element.v_day ? element.v_day : '')+'</td><td>'+(element.v_lastDay ? element.v_lastDay : '')+'</td><td>'+(element.v_weak ? element.v_weak : '')+'</td><td>'+(element.v_month ? element.v_month : '')+'</td><td>'+(element.v_lastMonth ? element.v_lastMonth : '')+'</td><td>'+(element.m_day ? element.m_day : '')+'</td><td>'+(element.m_lastDay ? element.m_lastDay : '')+'</td><td>'+(element.m_weak ? element.m_weak : '')+'</td><td>'+(element.m_month ? element.m_month : '')+'</td><td>'+(element.m_lastMonth ? element.m_lastMonth : '')+'</td></tr>';
				})
				if(users.length>9){
					btn.setAttribute('data-lastuser', users[9]._id);
					btn.removeAttribute('disabled');
					btn.innerHTML='Carregar mais usuários';
				}else{
				    btn.remove();
				}
				Id('drtgdrt').innerHTML+=html;
				newTime();

			}
		},
		confirmDelSite : function(btn){
			data.domain = btn.getAttribute('data-domain');
			data.btn = btn;
			infoBlog('Excluir site','Se você excluir este site e se alguêm encurtou uma url de algum artigo dele, não recebera mais pelos clicks.<br><br>Você tem certeza que deseja excluir este site?',{nameOne : 'sim', fc : '$webmaster.delSite'});
		},
		delSite : function(btn){
			$ajax.post('/webmaster/deletesite', {domain : data.domain}, function(res){
				if(res&&res.data){
					data.btn.parentElement.remove();
				}

			});
		}

	}
	function showCollection(){
		var html = 'Informe em que collection Você deseja fazer isto<br><br><div class="drtdrt"><select id="collectionsDb"><option value="users">Usuários</option><option value="posts">Posts</option><option value="notifications">Notificações</option><option value="sites">Sites</option><option value="Links">Links</option><option value="webmaster">Webmaster</option></select></div><br><br><p>Informe abaixo o host em que Você deseja fazer esta alteração<div class="drtdrt">';
        html +='<br><br><input type="text" id="hostDb" placeholder="informe o host do usuário" value="host1">'
		html += '</p></div><br><p>Qualquer alteração incorreta poderá ocasionar erros no sistema.<br><br>Você tem certeza que deseja fazer isto?</p>';
		return html;
	}
	function getCollection(){
		var collection = Id('collectionsDb').value;
		if(!collection) throw infoBlog();
		return collection;
	}
	function getHost(){
		return Id('hostDb').value;
	}
})();


$cpm = (function(){
	return {
		pay : function(btn){
			var date = Id('dateSearch').value;
			$ajax.post('/webmaster/cpm'+(date ? '?q='+date : ''), getData(), function(res){
			if(res&&res.reload) return location.reload();
			}, btn)

		}
	}
	function getData(){
		var cpmP = Id('cpmP').value;
		var cpmR = Id('cpmR').value;
		if(!cpmP) throw infoBlog('Cpm vazio', 'Informe o cpm do Publisher');
		if(!cpmR) throw infoBlog('Cpm vazio', 'Informe o cpm do Redator');
		return {cpmR : cpmR, cpmP : cpmP}
	}
})();


$editors = (function(){
	var data = {};
	return {
		add : function(btn){
			$ajax.post('/webmaster/editors/add', {email : Id('emailEditors').value}, function(res){
				if(res&&res.reload) return location.reload();
			}, btn);

		},
		remove : function(btn){
			data._id = btn.getAttribute('data-id');
			infoBlog('Remover Redator', 'Você tem certeza que deseja remover este redator?', {nameOne : 'sim', fc : '$editors.removeList'});
		},
		removeList : function(btn){
			$ajax.post('/webmaster/editors/remove', {_id : data._id}, function(res){
				if(res&&res.reload) return location.reload();
			}, btn)
		}
	}
})();


$adms = (function(){
	var data = {};
	return {
		add : function(btn){
			$ajax.post('/webmaster/adms/add', {email : Id('emailAdms').value}, function(res){
				if(res&&res.reload) return location.reload();
			}, btn);

		},
		remove : function(btn){
			data._id = btn.getAttribute('data-id');
			infoBlog('Remover Adm', 'Você tem certeza que deseja remover este Admin?', {nameOne : 'sim', fc : '$adms.removeList'});
		},
		removeList : function(btn){
			$ajax.post('/webmaster/adms/remove', {_id : data._id}, function(res){
				if(res&&res.reload) return location.reload();
			}, btn)
		}
	}
})();



$category = (function(){
	var data = {};
	return {
		add : function(btn){
			$ajax.post('/webmaster/category/add', {name : Id('nameCategory').value}, function(res){
				if(res&&res.data) return setTimeout(function(){location.reload()}, 1000);
			}, btn);

		},
		remove : function(btn){
			data._id = btn.getAttribute('data-id');
			infoBlog('Remover Categoria', 'Você tem certeza que deseja remover esta categoria?', {nameOne : 'sim', fc : '$category.removeList'});
		},
		removeList : function(btn){
			$ajax.post('/webmaster/category/remove', {_id : data._id}, function(res){
				if(res&&res.data) return setTimeout(function(){location.reload()}, 1000);
			}, btn)
		}
	}
})();

$active  = (function(){
	var _id, _btn;
	return {
		confirmActive : function(btn){
			_id = btn.getAttribute('data-id');
			_btn = btn;
			infoBlog('Ativar conta', 'Você tem certeza que deseja ativar está conta?', {nameOne : 'Sim', fc:'$active.active'});
		},
		active : function(btn){
			$ajax.post('/webmaster/users/active/', {_id : _id}, function(res){
				if(res&&res.data){
					_btn.parentElement.parentElement.remove();
				}
			}, btn)

		},
		confirmDel : function(btn){
			_id = btn.getAttribute('data-id');
			_btn = btn;
			infoBlog('Excluir conta', 'Você tem certeza que deseja Excluir está conta?', {nameOne : 'Sim', fc:'$active.del'});
		},
		del : function(btn){
			$ajax.post('/webmaster/users/active/del', {_id : _id}, function(res){
				if(res&&res.data){
					_btn.parentElement.parentElement.remove();
				}
			}, btn)

		}
	}
})();


$users  = (function(){
	var _id, _btn;
	return {

		confirmDel : function(btn){
			_id = btn.getAttribute('data-id');
			_btn = btn;
			infoBlog('Excluir conta', 'Você tem certeza que deseja Excluir está conta e todo conteúdo relacionado a ela?', {nameOne : 'Sim', fc:'$users.del'});
		},
		del : function(btn){
			$ajax.post('/webmaster/users/del', {_id : _id}, function(res){
				if(res&&res.data){
					_btn.parentElement.parentElement.remove();
				}
			}, btn)

		},
		plus : function(btn){
			$ajax.get('/webmaster/users/plus?_id='+btn.getAttribute('data-id')+'&type=ajax', function(res){
				if(res&&res.users) return setHtml(res.users);
			}, btn);

			function setHtml(users){
				var html='';
				users.forEach(function(element){
					html += '<tr><td><a href="'+mb.url+'/webmaster/user/'+element._id+'">'+element.name+'</a></td><td>'+(element.deposit ? 'Depósito bancário' : (element.paypal ? 'PayPal' : 'Não adicionado'))+'</td><td>'+element.lastAccess+'</td><td>'+element.dateRegistered+'</td><td><a href="#" class="getFc" data-fc="$users.confirmDel" data-id="'+element._id+'">Excluir</a></td></tr>';
				})
				Id('drtgdrt').innerHTML+=html;
				if(users.length==20){
					btn.setAttribute('data-id', users[19]._id);
				}else{
					btn.remove();
				}
				newTime();
			}

		}
	}
})();


$links  = (function(){
	var data = {};

	return {

                    confirmDel : function(btn){
		data._id = btn.getAttribute('data-id');
		data.btn = btn;
		infoBlog('Excluir Link','Se você excluir este link o usuário não tera mais lucros com ele.<br><br>Você tem certeza que deseja excluir este site?',{nameOne : 'sim', fc : '$links.delLink'});
	       },
	       delLink : function(btn){
		$ajax.post('/webmaster/links/del', {_id : data._id}, function(res){
		        if(res&&res.data){
			data.btn.parentElement.parentElement.remove();
		        }
		}, btn);
	      },

                    confirmDelAll : function(btn){
                    	data.btn = btn;
		infoBlog('Excluir Todos Link','Você tem certeza que deseja excluir todos os links cadastrados na plataforma?',{nameOne : 'sim', fc : '$links.delAll'});
	       },
	       delAll : function(btn){
		$ajax.post('/webmaster/links/delAll', {}, function(res){
		        if(res&&res.reload){
			location.reload()
		        }
		}, btn);
	      },
	}
})();

$pay = (function(){
	var data = {};
	return {
		viewDeposit : function(btn){
			var html = '<strong>Nome</strong>      '+btn.getAttribute('data-nameaccount')+'<br><br>';
			html += '<strong>CPF</strong>          '+btn.getAttribute('data-cpf')+'<br><br>';
			html += '<strong>Banco</strong>        '+btn.getAttribute('data-bank')+'<br><br>';
		             html += '<strong>Agência</strong>      '+btn.getAttribute('data-numagency')+'<strong> Dígito </strong>'+btn.getAttribute('data-digagency')+'<br><br>';
			html += '<strong>Número</strong>       '+btn.getAttribute('data-numaccount')+'<strong> Dígito </strong>'+btn.getAttribute('data-digaccount')+'<br><br>';

			html += '<strong>Conta</strong>        '+btn.getAttribute('data-typeaccount')+'<br><br>';


			infoBlog('Dados bancários de '+btn.getAttribute('data-nameaccount'), html);
		},
		pay : function(btn){
			data._id = btn.getAttribute('data-id');
			data.btn = btn;
			var value = btn.getAttribute('data-value');
			var type = btn.getAttribute('data-type');
			if(type=='deposit'){
			     infoBlog('Pagar Usuário','Preencha as informações abaixo:<br><br>Informe a taxa de Transferência<br><br><input type="text" placeholder="Tacha de Transferência" class="input" id="taxaCambio" value="10"><br><br><strong id="drtgdte5te"></strong><br><br><input type="file" placeholder="Comprovante" id="filePay"><br><br>Você tem certeza que deseja pagar este usuário via depósito bancário?', {nameOne : 'Pagar', fc : '$pay.sendPay'});
			     Id('drtgdte5te').innerHTML = 'Valor a pagar: '+parseFloat((value-10).toFixed(2));
			     Id('taxaCambio').addEventListener("input", function() {
			         Id('drtgdte5te').innerHTML = 'Valor a pagar: '+parseFloat((value-this.value).toFixed(2));
			     });
			 }else if(type=='paypal'){
			     infoBlog('Pagar Usuário','Valor a pagar via PayPal:<br><br><b>R$'+parseFloat(value).toFixed(2)+'</b><br><br><input type="file" placeholder="Comprovante" id="filePay"><br><br>Você tem certeza que deseja pagar este usuário via payPal?', {nameOne : 'Pagar', fc : '$pay.sendPay'});
			 }else{
			 	infoBlog('Pagar usuário','Este usuário não informou a sua forma de pagamento');
			 }
		},
		sendPay : function(btn){
			var path =  location.pathname;
			
			var file = Id('filePay').files[0];
			if(file) return sendDataFile();
			
			

			 $ajax.post(path, {_id : data._id, exchangeTax : (Id('taxaCambio') ? Id('taxaCambio').value : null)}, function(res){
			 	if(res&&res.data){
			 	    data.btn.parentElement.parentElement.remove();
			 	}

			 }, btn)

			function sendDataFile(){
				var formData = new FormData();
                formData.set('file', file);
                formData.set('_id', data._id);
				var q = location.search;
			    var url = path+'/upload'+(q ? q : '');
                if(Id('exchangeTax')) formData.set('exchangeTax', Id('exchangeTax').value);
                $ajax.upload(url, formData, function(res){
                    if(res&&res.data){
                    	data.btn.parentElement.parentElement.remove();
			 	    }
                }, btn);
			}

		},
		confirmAccumulate : function(btn){
			data._id = btn.getAttribute('data-id');
			data.btn = btn;
			infoBlog('Acumular pagamento','Você tem certeza que deseja acumular o pagamento deste usuário?',{nameOne : 'Sim', fc : '$pay.accumulate'});
		},
		accumulate : function(btn){
			$ajax.post('/webmaster/monthlypayment/accumulated/', {_id : data._id}, function(res){
			    if(res&&res.data){
				    data.btn.parentElement.parentElement.remove();
				}
			}, btn)
		},
		confirmRemoveWeak : function(btn){
			data._id = btn.getAttribute('data-id');
			data.btn = btn;
			infoBlog('Remover usuário', 'Você tem certeza que não deseja pagar este usuário?', {nameOne : 'Sim', fc : '$pay.removeWeak'});
		},
		removeWeak : function(btn){		
			$ajax.post('/webmaster/weeklypayment/remove', {_id : data._id}, function(res){
                if(res&&res.data){
				    data.btn.parentElement.parentElement.remove();
				}
			}, btn)

		},		
	}

})();



$firewall = (function(){
	var ip, countrie, btn, view=0;

	return {
		setOption : function(btn){
			var value = btn.value;
			if(value=='ip') return viewIp();
			if(value=='countries') return viewCountries();


			function viewIp(){
				var html = '<input class="drtgdtrg" type="text" placeholder="IP" id="ip"><input class="rgdrgtr" type="text" placeholder="Nota" id="nota"><select class="rdgdtrghth" id="status"><option value="403">403</option><option value="404">404</option><option value="400">400</option></select><button class="btn drgdtrght getFc" data-fc="$firewall.saveIp">Bloquear</button>';
				Id('drtrghtyf').innerHTML=html;
				newTime();
			}
			function viewCountries(){
				html = '<select class="drtgdtrg" id="countrie"><option>Escolha um país</option>';

				countries.forEach(function(element){
					html+='<option value="'+element.code+'">'+element.name+'</option>';
				})

				html += '</select><input class="rgdrgtr" type="text" placeholder="Nota" id="nota"><select class="rdgdtrghth" id="status"><option value="403">403</option><option value="404">404</option><option value="400">400</option></select><button class="btn drgdtrght getFc" data-fc="$firewall.saveCountrie">Bloquear</button>';
				Id('drtrghtyf').innerHTML=html;
				if(view==0){
					view=1;
					infoBlog('Use com moderação','Recomendamos que você bloqueie determinado país caso você note algo estranho nos <a href="'+mb.url+'/webmaster/logs">logs do sistema</a><br><br>Bloquear países ocasionará um pequeno atraso na resposta do sistema.')					
				}
				newTime();

			}

		},
		saveIp : function(btn){
			var data = getData();

			$ajax.post('/webmaster/firewall/', data, function(res){
				if(res&&res.data){
					var html = '<div class="tgd5tye56y6 drgdtrgty"><span class="dgdrtgdtr">'+data.ip+'</span><span class="rgdgdrttrd">'+data.nota+'</span><span class="sgdgdtr dg5ge5g">'+data.status+'</span><span class="hftyhftyftyh"><i class="fa fa-close getFc" data-fc="$firewall.confirmDel" data-ip="'+data.ip+'"></i></span></div>';
					Id('rtgdtgt').innerHTML += html;
					clear();
				}

			}, btn)
			function getData(){
		                  if(!Id('ip').value) throw infoBlog('IP Vazio', 'Informe um IP para adicionar a sua lista de bloqueio');
		                  return {ip : Id('ip').value, nota : Id('nota').value, status : Id('status').value}
	                      }
		},
		saveCountrie : function(btn){
			data = getData()
		           $ajax.post('/webmaster/firewall/countrie', data, function(res){
				if(res&&res.data){
					var html = '<div class="tgd5tye56y6 drgdtrgty"><span class="dgdrtgdtr">'+res.data.countrie+'</span><span class="rgdgdrttrd">'+data.nota+'</span><span class="sgdgdtr dg5ge5g">'+data.status+'</span><span class="hftyhftyftyh"><i class="fa fa-close getFc" data-fc="$firewall.confirmDel" data-countriename="'+res.data.countrie+'"></i></span></div>';
					Id('rtgdtgt').innerHTML += html;
					clear();

				}

			}, btn)
		           function getData(){
		                  if(!Id('countrie').value) throw infoBlog('País Vazio', 'Informe um país para adicionar a sua lista de bloqueio');
		                  return {countrie : Id('countrie').value, nota : Id('nota').value, status : Id('status').value}
	                      }
		},
		confirmDel : function(_btn){
			ip = _btn.getAttribute('data-ip');
			countrie = _btn.getAttribute('data-countrie');
			var countrieName = _btn.getAttribute('data-countriename');
			btn = _btn;
			infoBlog('Remover '+(ip ? 'IP' : 'País'), 'Você tem certeza que deseja remover o '+(ip ? 'IP <b>'+ip+'</b>' : 'País <b>'+countrieName+'</b>')+'</b> da sua lista de bloqueio?', {nameOne : 'sim', fc : '$firewall.removeList'});

		},
		removeList : function(_btn){
			var vars = {};
			if(ip) vars.ip = ip;
			if(countrie) vars.countrie = countrie;
			$ajax.post('/webmaster/firewall/del', vars, function(res){
				if(res&&res.data){
					if(btn) btn.parentElement.parentElement.remove();
				}

			}, _btn)

		}
	}
	function clear(){
		if(Id('ip')) Id('ip').value='';
		if(Id('countrie')) Id('countrie').value='Escolha um país';
		Id('nota').value=''
		Id('status').value='403'

	}


})();



$logs = (function(){
		var _btn, id;
		return {
			plus : function(btn){
				var _id = btn.getAttribute('data-id');
				_btn = btn; id = _id;
				$load.start(btn);
				$ajax.get('/webmaster/logs/plus?_id='+_id+'&type=ajax', function(res){
					$load.stop();					
					if(res&&res.logs) return showLogs(res.logs);
				}, btn);
			},
			confirmDel : function(btn){
				infoBlog('Excluir logs','Você tem certeza que deseja excluir os logs do sistema?', {nameOne : 'Sim', fc : '$logs.delLogs'});
			},
			delLogs : function(btn){
				$ajax.post('/webmaster/logs/del', {}, function(res){
					if(res&&res.reload) return location.reload();
				}, btn)
			}

		}
		function showLogs(logs){
			var html = '';
			logs.forEach(function(element){
				html += '<pre class="sgdrtgdtr"><span><b>'+element.date+'</b> - <b>'+mb.domain+' [router]</b>: <b>method</b>="'+element.method+'" <b>host</b>="'+element.host+'" <b>status</b>="'+element.status+'" <b>protocol</b>="'+element.protocol+'" <b>language</b>="'+element._language+'" <b>time</b>="'+element.time+'ms" <b>ip</b>="'+element.ip+'" <b>type</b>="'+element.type+'" <b>agent</b>="'+element.agent+'" <b>path</b>="'+element.path+'"</span></pre>';
			});
			if(html==''){
				if(Id('rgdtrgdtrg')) Id('rgdtrgdtrg').remove();
				html += '<p class="btn rgtrtdtg" id="rgdtrgdtrg">Não há mais logs para mostrar, tente daqui a pouco!</p>';
			}else{
				if(Id('rgdtrgdtrg')) Id('rgdtrgdtrg').remove();
			}
			html+='<button class="btn cgdtrgdt getFc" data-fc="$logs.plus" data-id="'+(logs.length ? logs[logs.length-1]._id : id)+'">Atualizar</button>';
			_btn.remove();
			Id('drtgdtrgdtr').innerHTML+=html;
			newTime();
			if(Id('rgdtrgdtrg')) setTimeout(function(){
				Id('rgdtrgdtrg').remove();
			}, 5000)
		}

	})();
createnotification = function(btn){
	$ajax.post('/webmaster/createnotification', {msg : Id('alert').value, color : Id('color').value, background : Id('background').value}, function(){}, btn)

}
$others = (function(){
	return {

            confirmNewPassword : function(){
	             infoBlog('Alterar senha', 'Você tem certeza que deseja fazer isso?', {nameOne : 'Sim', fc : '$others.newPassUser'})

            },
            newPassUser : function(btn){
	            $ajax.post('/webmaster/others/password', {email : Id('emailNewPassword').value, password : Id('newPasswordUser').value}, function(){

	           }, btn)

            }
    }
})()
