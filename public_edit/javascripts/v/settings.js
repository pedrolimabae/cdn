$settings = (function(){

	var settings = {

		confirmName : function(){
			infoBlog('Alterar nome', 'Você só pode alterar o seu nome a cada 60 dias.<br><br>Você tem certeza que deseja fazer isso?',{nameOne : 'Sim', fc : '$settings.name'})
		},

		name : function(btn){
			var $vars = {name : getName()};
			$ajax.post('/settings/name', $vars, function(res){
				if(res&&res.reload) location.reload();

			}, btn);
		},
		activeAccount : function(){
			infoBlog('Ativar conta','A sua conta ainda não foi ativado, para ativa-lo clique em <strong>Ativar conta</strong> no botão abaixo e lhe enviaremos para o seu email um link de ativação',{fc : '$settings.sendEmailActive', nameOne : 'Ativar conta'});
		},
		sendEmailActive : function(btn){
			$ajax.post('/active/account/sendEmail', {}, function(){
		}, btn);

		},

		newPassword : function(btn){
			var $vars = {passAtual : getPassAtual('passAtual'), newPass : getNewPass()};
			$ajax.post('/settings/password', $vars, function(res){
				if(res.data){
				    Id('passAtual').value='';
				    Id('newPass').value='';
			    }
			}, btn);
		},
		paypal : function(btn){
			$ajax.post('/settings/paypal', {emailPaypal : Id('emailPaypal').value}, function(){}, btn)

		},
		deposit : function(btn){
		 $ajax.post('/settings/deposit', {
		    cpf : Id('cpf').value,
	                 bank : Id('bank').value,
    		    nameAccount : Id('nameAccount').value,
    		    numAgency : Id('numAgency').value,
    		    digAgency : Id('digAgency').value,
    		    numAccount : Id('numAccount').value,
    		    digAccount : Id('digAccount').value,
    		     typeAccount : Id('typeAccount').value,
	               }, function(){}, btn);
		},

		deleteAccount : function(){
			if(!getPassAtual('passDelete').length) return infoBlog('Senha vazia','Informe a sua senha atual');
			infoBlog('Excluir Conta','Você tem certeza que deseja excluir a sua conta e todo o conteúdo relacionado a ela permanentemente?', {fc : '$settings.deleteAccount', nameOne : 'Excluir'});
		},
		deleteAccount : function(btn){
			var $pass = {passAtual : getPassAtual('passDelete')};
			$ajax.post('/settings/delete', $pass, function(res){
				if(res.location) location.href = res.location;
			}, btn);
		}

	}
	function getName(){
		var email = Id('newName').value
		if(!email.length) throw infoBlog('Nome vazio','Informe o seu novo nome!');
		return email;
	}
	function getPassAtual(id){
		var passAtual = Id(id).value;
        if(!passAtual.length) throw infoBlog('Senha atual','Informe a sua senha atual.');
		if(passAtual.length > 40) throw infoBlog('Senha atual','A sua senha atual esta incorreta.');
		return passAtual;
	}
	function getNewPass(){
		var newPass = Id('newPass').value;
        if(!newPass.length) throw infoBlog('Nova senha','Informe a sua nova senha.')
		if(newPass.length > 40) throw infoBlog('Nova senha','A sua nova senha deve ter no máximo 40 caracteres.');
		return newPass;
	}

	return settings;
})();