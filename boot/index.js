website = {
    domain : 'granasocial.com.br',
	url : 'https://granasocial.com.br',
	serverFiles : 'https://cdn.granasocial.com.br/'
}
log = console.log;

ErrorDB = function(){
     return Exit('Ops, algo deu errado!','Estamos em manutenção, caso o erro demorar mais que 2 horas contate o suporte!', 400);
}
 
Exit = function(title, message, status){
    if(!title) title = 'Erro encontrado';
    if(!message) message = 'Não foi possível completar a sua solicitação';
    var exit = new Error(title);
    exit.info = message;
    exit.exitApp=1;
    exit.status = (status ? status : 200);
    return exit;
};
Json = function($title, $info, $array){
    var exit = Exit($title, $info);
    exit.data = $array;
    return exit;
};
ErrorDF = function(status){
    return Exit(null,null,status);
}
Model = require(ROOT+'/models/index');

Storage = require(ROOT+'/models/storage/index');

