function getRecaptchaResponse(){
    var v = grecaptcha.getResponse();
    if(v.length == 0){
        throw infoBlog('Você é um robô?','Informe que você não é um robô!');
    }         
    return v;  
}
$login = (function(){
	    var isInIFrame = (window.location != window.parent.location);
		return {
			send : function(btn){
				var $vars = {email : getEmail(), password : getPassword()};
				$ajax.post('/login',$vars, function(res){
				    if(res.location){
				    	var lc = window.location.search.split('=');
				    	if(lc.length==2&&lc[1]=='close'&&isInIFrame) return closeModal();
				    	if(lc.length==2) return location.href=mb.url+lc[1];

				             return location.href=res.location
				    }
				    if(res.data&&res.data.active){
				    	Id('password').value='';
				    	Id('email').value='';
				    }
				},btn);
				function closeModal(){
					window.parent.Id('modal').innerHTML='';
				}
			}
		};
		function getEmail(){
			var email = Id('email').value;
			if(!email) throw infoBlog('Fazer Login','Informe o seu endereço de e-mail');
			return email;
		};
		function getPassword(){
			var password = Id('password').value;
			if(!password) throw infoBlog('Fazer Login','Informe a senha da sua conta');
			if(password.length > 40) throw infoBlog('Fazer Login','Senha inválida');
			return password;
		};

		return login;
})();
// register
 $register = (function(){
     return {
     	save : function(btn){
		     var $vars = {name : getName(), email : getEmail(), password : getPassword(), pages : getPages()};
		     $ajax.post(location.href, $vars, function(res){
			if(res&&res.location) return location.href=res.location;
	     }, btn);
		}
	 }
	 function getName(){
		var name = Id('name').value;
		if(!name) throw infoBlog('Nome vazio','Informe o seu nome');
		if(name.length > 100) throw infoBlog('Nome muito grande','O seu nome deve ter no máximo 100 caracteres');
		return name;
	 }
	 function getEmail(){
	    var email = Id('email').value;
		if(!email) throw infoBlog('E-mail vazio','Informe o seu e-mail atual');
		if(email.length > 100) throw infoBlog('E-mail inválido','O seu endereço de e-mail não é um e-mail válido');
		return email;
	 }
	 function getPassword(){
		 var password = Id('password').value;
		 if(!password) throw infoBlog('Senha vazia','Informe a sua senha de acesso');
		 if(password.length > 40) throw infoBlog('Senha muito grande','A sua senha deve ter no máximo 40 caracteres');	 return password;
	 }
	 function getPages(){
	 	var pages = Id('page').value;
	 	if(!pages) throw infoBlog('Informe sua fonte de tráfego', 'Para agilizar o processo de ativação de sua conta, informe a fonte real do seu tráfego');
	 	return pages;
	 }

 })();

$recover = (function(){

 	return {
 		sendEmail : function(btn){
 			$ajax.post('/recover/email', {email : getEmail(),  recaptchaResponse : getRecaptchaResponse()}, function(res){
 				if(res.data){
 				   Id('tgdtrtrs').innerHTML='<div class="sergfser5ws"><p>Enviamos um e-mail de recuperação de senha.</p><button class="btn getFc" href="'+mb.url+'/login">Fazer Login</button></div>';
 				}else{
 					grecaptcha.reset();
 				}
 			}, btn);
 		},
 		password : function(btn){
 			$ajax.post(location.href, {password : getPassword()}, function(res){
 				if(res&&res.data){
 				   Id('tgdtrtrs').innerHTML='<div class="sergfser5ws"><p>Senha alterada com sucesso.</p><button class="btn getFc" href="'+mb.url+'/login">Fazer Login</button></div>';
 				}
 			}, btn);
 		}
 	}
 	function getEmail(){
 		var email = Id('email').value;
 		if(!email.length) throw infoBlog('Redefinir senha','Informe o seu e-mail de acesso');
 		return email;
 	}
 	function getPassword(){
 		var password = Id('newPassword').value;
 		var rPassword = Id('rPassword').value;
 		if(!password.length) throw infoBlog('Redefinir senha','Informe a sua nova senha');
 		if(password.length > 40) throw infoBlog('Senha muito grande','A sua nova senha deve ter no máximo 40 caracteres');
 		if(password!=rPassword) throw infoBlog('Senhas inválidas','As senhas não correspondem');
 		return password;
 	}
 })();
