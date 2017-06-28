var faceUrl;
var faceUrlFinal;
var testeFace;
var testeFace;

 


//funcao cancelar comandoo
var funcCancelar ={
		indexes:["silêncio","pare de falar","parar de falar","cale a boca","abortar comando","cancelar instrução",

		"desabilitar reconhecimento de voz","não me escute","pare de ouvir","vá dormir"],
		smart:true,
		action:function(i){
				if(i==0||i==1||i==2||i==3){
					
						 artyom.shutUp();

				}
				if(i==4||i==5){
					artyom.say("instrução abortada!");
					artyom.fatality();
					setTimeout(function(){
   				 	artyom.addCommands(inicio);
					}, 5000);
				}
		}
};

///funcao facebook
var funFace = {
	//encontre no facebook todas as pessoas que moram em * -> é esperado que a pessoas diga: encontre todas as pessoas que moram
	//em "saquarema" e visitaram "rio de janeiro"
     indexes:["figura pública no facebook *","encontre * no facebook","últimas histórias sobre * no facebook","todas as histórias sobre * no facebook",
     "encontre no facebook todos que moram em *","locais que estive no *","postar *"],
  smart:true,
  action:function(i,facebook){
      if(i==0){
      				var textFiguraPublica = ["Entendi. Localizando figura pública"+facebook+" no facebook!",
                  "Certo. Irei pesquisar a figura publica "+facebook+" que você deseja!","Redirecionando para o facebook, aguarde um instante"];
      					artyom.sayRandom(textFiguraPublica);
	             		faceUrl = "https://www.facebook.com/search/str/"+facebook+"/pages-named/admired-person/pages/intersect";
	             		armazenaSite2 = window.open(faceUrl, '_blank');
	             		guardaSites.push(facebook);
	   				    armazenaSite.push(armazenaSite2);
	   				    testeFace = $.inArray(facebook, guardaSites);
	             		
	             	}
	       
      
     else  if(i==1){
            var textFiguraNome = ["Encontrando "+facebook+" no facebook!Aguarde um instante",
                  "Positivo. Encontrando "+facebook+" no facebook"];
                  artyom.sayRandom(textFiguraNome);
      		faceUrl ="https://www.facebook.com/search/str/"+facebook+"/users-named";
      		faceUrlFinal  =window.open(faceUrl, '_blank');
      }
     else if(i==2){
      			artyom.say("entendido! Pesquisando no facebook os ultimos posts relacionados a "+facebook+" na ultima hora!");
      		faceUrl ="https://www.facebook.com/search/str/"+facebook+"/stories-keyword/stories-live";
      		faceUrlFinal  =window.open(faceUrl, '_blank');
      }
    else   if(i==3){
      	artyom.say("Certo! Localizando todos os posts relacionados a "+facebook +" facebook");
      	faceUrl ="https://www.facebook.com/search/str/"+facebook+"/stories-keyword";
      		faceUrlFinal  =window.open(faceUrl, '_blank');
      }

    else if(i==4){
      	if(facebook.match(/ e visitaram /)){
      			var facebookRegex = facebook;
				var recFac = facebook.split(" e visitaram ");
				console.log(recFac[1]);
				console.log(recFac[0]);
				artyom.say("Entendi. Localizando todas as pessoas que moram em "+recFac[0]+" e visitaram "+recFac[1]);
      			faceUrl ="https://www.facebook.com/search/str/"+recFac[0]+"/pages-named/residents/present/intersect/str/"+recFac[1]+"/pages-named/visitors/intersect";
      			faceUrlFinal  =window.open(faceUrl, '_blank');
      	}
      	}
      	else if(i==5){
             artyom.say("Localizando os locais que você fez check-in no "+facebook);
               faceUrl ="https://www.facebook.com/search/me/places-visited/";
               faceUrlFinal  =window.open(faceUrl, '_blank');
      		
      	

      	}
         else if(i==6){
           
            artyom.say("Entendi! Irei postar:"+facebook+" no facebook");
            textFace = facebook;
               artyom.newPrompt({

question:"Deseja realmente postar isso",
    //We set the smart property to true to accept wildcards
    
    options:["sim","não"],
    beforePrompt: () => {
        console.log("Before ask");
    },
    onStartPrompt:  () => {
        HoldOn.open(options);
        console.log("The prompt is being executed");
       /* setTimeout(() => {
    // Enable command recognition again
      artyom.repeatLastSay();
    // Try to say hello again and now the command will be recognized
}, 50000);*/

    },
    onEndPrompt: () => {
        HoldOn.close(options);
        
        console.log("The prompt has been executed succesfully");
    },
    onMatch: (i) => {// i returns the index of the given options
var action;
        action = () => {
          if(i==0){
           
           
            FB.login(function(){
  // Note: The call will only work if you accept the permission request
  FB.api('/me/feed', 'post', {message: textFace});
}, {scope: 'publish_actions'});
            var msgFacePost = ["Mensagem postada senhor!! Redirecionando para o facebook","Post enviado, aguarde enquanto redireciono para o Facebook",
            "Não achei nada útil esse seu post, mas enfim só estou cumprindo ordens! Conteúdo postado com sucesso",
            "Conteudo postado. Pela relevância desse post, aposto que irá ganhar no máximo uma curtida da sua mãe, Pronto falei!",
            "Missão excecutada! vou me retirar um instante para aprimorar meus conhecimentos, qualquer coisa grita!"];
               if(textFace.match(/ robô zilda /) && textFace.match(/ bom /)||textFace.match(/ boa /) || textFace.match(/ legal/)){
                  var textFaceRoboZilda = ["hum! falando sobre mim né? Agora sim vai chover curtidas kkkk, post enviado com sucesso",
                  "Agora dou valor hahaha, falando bem de mim! Continue assim humano. Post enviado","Post enviado. Obrigado por falar bem de mim",
                  ""];
                  artyom.sayRandom(textFaceRoboZilda);
               }
               else if(textFace.match(/ amor /)||textFace.match(/ paixão /)||textFace.match(/ apaixonado /)||textFace.match(/ apaixonado/)
                  ||textFace.match(/ apaixonada /)||textFace.match(/ amor/)){
                     var textFaceRoboZildaAmor=["Post Enviado com sucesso! Hum, falando de amor né? na próxima vou marcar o nome de quem você gosta em!",
                  "Que bonitinho, postando coisas de amor! Poste sobre mim também então. Sou um amor!redirecionando para o face",
                  "Na próxima peça meu auxilio! Conheço algumas frases legais de amor. Fica a dica!"];
                  artyom.sayRandom(textFaceRoboZildaAmor);
               }
               else if (textFace.match(/ vasco da gama /)||textFace.match(/vasco da gama /)||textFace.match(/ vasco da gama/)
                  ||textFace.match(/vasco da gama/)||textFace.match(/ Vasco da Gama /)||textFace.match(/Vasco da Gama /)
                  ||textFace.match(/ Vasco da Gama/)||textFace.match(/Vasco da Gama/)){
                  textFaceRoboZildaVasco =["Vamos todos cantar de coração a cruz de malta é meu, continua cantando ai enquanto redireciono para o facebook",
                  "uma vez flamengo sempre flamengo, flamengo sempre êi de ser. Zoei! Brincadeirinha, vasco é top! Redirecioando para o facebook",
                  "Isso sim é time, digno de inumeras curtidas! Indo para o facebook",
                  "Postando sobre o carrasco do Flamengo, Botafogo e Fluminense!"],
                  "Já que postou sobre o flamengo! Vou te fazer uma pergunta. Sabe qual a diferença entre a moto e o flamengo? A moto não leva mais de dois, zuei!"; 
                  artyom.sayRandom(textFaceRoboZildaVasco);

               }
               else if (textFace.match(/ flamengo /)||textFace.match(/ flamengo/)||textFace.match(/flamengo /)||textFace.match(/flamengo/)
                  ||textFace.match(/ Flamengo /)||textFace.match(/Flamengo /)||textFace.match(/ Flamengo/)||textFace.match(/Flamengo/)){
                  textFaceRoboZildaFlamengo =["mais um post sobre o menguinho, post enviado!",
                  "sabe que não vai ganhar curtida né? Redirecionando para o facebook",
                  "Antes de postar, quero te passar uma informação importante. No dia 26 de abril de 1931 o vasco goleou esse flamengo ai por 7 a zero",
                 ];
                  
                  artyom.sayRandom(textFaceRoboZildaFlamengo);

               }
               else{
                    artyom.sayRandom(msgFacePost);
               }

           
               setTimeout(()=>{
                  artyom.say("redirecionando para facebook.com");
                     faceUrl ="https://www.facebook.com";
               faceUrlFinal  =window.open(faceUrl, '_blank');  
                  },5000);  
          }
         else if(i==1){
            artyom.say("Abortando operação! Post não enviado");
          }
          else{
            artyom.say("Desculpe. Não pude realizar essa operação!");
            artyom.say("O senhor deve responder apenas sim ou não");
            artyom.say("Operação cancelada");
          }
            
}
return action;  
}

});
               
              

         }
      	else{
      		artyom.say("Desculpe. Não pude realizar essa operação!");
      		artyom.say("É nescessário dizer corretamente o comando");
      	
      

      	
      }
      
}
};