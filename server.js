var http = require('http');
var fs = require('fs');

//cria o servidor
var server =  http.createServer(function(req,res){

	//define o cbeçalho da resposta
	res.writeHead(200,{'content-type':'text/html'});
	//serve o documento html
	fs.createReadStream('index.html').pipe(res);
});

//inicia o servidor na porta 3000
server.listen(3000);

console.log('Servidor pronto em  http://localhost:3000');