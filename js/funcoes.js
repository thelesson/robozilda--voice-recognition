 


 //variavel de configuracao do HandOn
         var options = {
     theme:"sk-circle",
     message:'Robozilda está dizendo algo...',
     backgroundColor:"rgba(25, 29, 29, 0.46);",
     textColor:"white"
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//FUNCOES DE COMANDO PARA A ROBOZILDA
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//funcao para pesquisar na internet
var funcTime = {
  indexes:["* diga a hora","* que horas são",""," * que dia é hoje"],
  smart:true,
  action:function(i,time){
      if(i==0||i==1)
{
  artyom.say("São exatamente "+zhoras+"e "+zminutos+"minutos");
} 
if(i==2){
      var dias = ["Domingo","Segunda-feira","Terça-Feira","Quarta-feira",
      "quinta-feira","Sexta-feira","Sábado"];
      Date.prototype.getDayName = function() {
        return dias[ this.getDay() ];
    };
    var now = new Date();

var dia = now.getDayName();
      //var dia = dias[zdata.getDays()];
  artyom.say("Hoje é"+dia);
}
}
};
var funCalc = {
     indexes:["calcule a soma de *","diminua *","calcule a subtração de *","multiplique *","calcule a multiplicação de *","divida *","calcule a divisão de *"],
  smart:true,
  action:function(i,calc1){
      if(i==0)
{
var calculo = calc1;
var res = calculo.split(" mais ").map(function(deucerto) { return parseInt(deucerto, 10); });
console.log(res);
resposta = res[0]+res[1];
  artyom.say("Somando"+res[0]+"mais"+res[1]);
  artyom.say("O resultado da soma é:"+resposta);
}
 if(i==1||i==2)
{
var calculo = calc1;
var res = calculo.split(" menos ").map(function(deucerto) { return parseInt(deucerto, 10); });
console.log(res);
resposta = res[0]-res[1];
  artyom.say("Subtraindo"+res[0]+"menos"+res[1]);
  artyom.say("O resultado da subtração é:"+resposta);
}
 if(i==3||i==4)
{
var calculo = calc1;
var res = calculo.split(" vezes ").map(function(deucerto) { return parseInt(deucerto, 10); });
console.log(res);
resposta = res[0]*res[1];
  artyom.say("Multiplicando"+res[0]+"por"+res[1]);
  artyom.say("O resultado da multiplicacao é:"+resposta);
}
if(i==5||i==6)
{
var calculo = calc1;
var res = calculo.split(" por ").map(function(deucerto) { return parseInt(deucerto, 10); });
console.log(res);
resposta = res[0]/res[1];
  artyom.say("Dividindo"+res[0]+"por"+res[1]);
  artyom.say("O resultado da divisão é:"+resposta);
}  
}
};
////

 var funcPesquisa = {
      indexes:["pesquise por *","pesquisa por *","procure por *","pesquisa sobre *","pesquise sobre *","pesquiise *","pesquisa *"],
      smart:true,
              action:function(i,pesquisa){
              if(i==0||i==1||i==2||i==3||i==4||i==5||i==6){
               artyom.say("Ok senhor! Procurando no Google sobre"+pesquisa);
              setTimeout(() => {
    // Enable command recognition again
   var urlP= "https://www.google.com.br/search?q=" + pesquisa;

              var pesquiseR =  window.open(urlP, '_blank');
    // Try to say hello again and now the command will be recognized
}, 5000);
              
}
else{
 artyom.say("Não entendi seu comando, por favor repita a instrução!");
}
}
};
///



//função que faz a Robozilda não obedecer/obedecer
var  respostaDesobediente = {
                indexes:["por favor"],
                
                action:function(i){
                    if(i == 0){
                        artyom.sayRandom([palavraCerta]);
                        artyom.obey();
                        artyom.addCommands(funcSite);
                artyom.addCommands(funcBackground); 
                  }
                  else if(i !== 0){
                    artyom.dontObey();
                    artyom.sayRandom([palavraMagica]);
                    
                  }
                  else{
                    artyom.say("ZeroUNo");
                  }
              }
          }
////
    
    var funcBackground = {
        indexes:["background *"],
        smart:true,
        action:function(i,background){
                  if(background=="branco"){
                        artyom.sayRandom(["Ok. Entendi.Essa cor não estava combinando mesmo!",
                            "Até que enfim. Não aguentava mais essa cor como background",
                            "Não seria melhor colocar uma imagem como fundo? Conheço muito sobre design... Brincadeira senhor, mudando para a cor desejada"]);
                        document.body.classList.remove("luz-azul",1000);
                        document.body.classList.remove("luz-laranja",1000);
                        document.body.classList.add('luz-apagada',1000);
                     }
                     else if(background=="laranja"){
                        artyom.sayRandom(["Ok. Entendi. Que péssimo gosto, enfim, trabalho para o senhor...Mudando o backgound para laranja",
                          "Não serve melancia não? hahaahhahahi  zuei","Positivo senhor, alterando o background para laranja"]);
                        document.body.classList.remove("luz-apagada",1000);
                        document.body.classList.remove("luz-azul",1000);
                        document.body.classList.add('luz-laranja',1000);
                     }
                      else if (background =="azul") {
                        artyom.sayRandom(["Ta de sacanagem? Azul cara? Não é possivel! Vou procurar na internet alguns cursos sobre design!",
                          "Cada humano com gosto excêntrico que encontro. Como se não bastasse esse site horroroso, a pessoa ainda inventa de alterar a cor  para azul.","Positivo senhor, alterando o background para laranja"]);
                      document.body.classList.remove("luz-apagada",1000);
                        document.body.classList.remove('luz-laranja',1000);
                        document.body.classList.add('luz-azul',1000);

                    }
                     //lembrar de trazer em letras minusculas o resultado
                     else if (background="original") {
                      artyom.sayRandom(["Retornando a cor padrão",
                        "E eu que achava que nada podia ser pior que esse layout com fundo negro. Background negro adicionado com sucesso"]);
                      document.body.classList.remove("luz-laranja");
                        document.body.classList.remove('luz-apagada');
                        document.body.classList.remove('luz-azul');

                    }
                     //  window.open("www"+site+".com","_blank");
        }
    };

                   

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//função do tutorial quando o usuario nao diz nem sim nem nao
var funcTutorialNoResponse = {

question:"Deseja iniciar no modo tutorial?",
    //We set the smart property to true to accept wildcards
    smart:true,
    options:["*"],
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
        console.log(artyom.getProperties());
        console.log("The prompt has been executed succesfully");
    },
    onMatch: (i,wildcard) => {// i returns the index of the given options
        var action;

        var s = wildcard;

        action = () => {
            if(s=="sim"){
artyom.newPrompt(funcInicioNome);            }
            else if(s=="não"){
                artyom.say("Ok. modo tutorial desabilitado!");
                  artyom.shutUp();
               // artyom.say("Me diga novamente o que fazer, estou pronta para servir");
                ///artyom.addCommands(funcSite);
    /*            setTimeout(() => {
    // Enable command recognition again
      artyom.sayRandom(tess);
    // Try to say hello again and now the command will be recognized
     setTimeout(() => {
    // Enable command recognition again
      artyom.sayRandom(tess);
    // Try to say hello again and now the command will be recognized
        setTimeout(() => {
    // Enable command recognition again
      artyom.sayRandom(tess);

      setTimeout(() => {
    // Enable command recognition again
      
      artyom.addCommands(respostaDesobediente);
      



      
    // Try to say hello again and now the command will be recognized
}, 10000);
    // Try to say hello again and now the command will be recognized
}, 10000);
}, 10000);
}, 100000);*/
                //artyom.addCommands(funcSite);
                //artyom.addCommands(funcBackground);
            }

            else{
                artyom.say("Para que eu possa entender...diga pausadamente apenas as palavras: SIM ou NÃo!");
                 artyom.newPrompt(funcTutorial);
              
          }
        };

        // A function needs to be returned in onMatch event
        // in order to accomplish what you want to execute
        return action;                       
    }
};



//funcao do tutorial
var funcTutorial = {

question:"Deseja realmente iniciar no modo tutorial?",
    //We set the smart property to true to accept wildcards
    smart:true,
    options:["*"],
    beforePrompt: () => {
        console.log("Before ask");
         //artyom.say("Ok. entendido! Ativando o modo Tutorial");
    },
    onStartPrompt:  () => {
        HoldOn.open(options);
        console.log("The prompt is being executed");
        /*setTimeout(() => {
    // Enable command recognition again
      artyom.repeatLastSay();
    // Try to say hello again and now the command will be recognized
}, 50000);*/

    },
    onEndPrompt: () => {
        HoldOn.close(options);
        console.log(artyom.getProperties());
        console.log("The prompt has been executed succesfully");
    },
    onMatch: (i,wildcard) => {// i returns the index of the given options
        var action;

        var s = wildcard;

        action = () => {
            if(s=="sim"){
artyom.newPrompt(funcInicioNome);            }
            else if(s=="não"){
                artyom.say("Ok. modo tutorial desabilitado!");
                 artyom.shutUp();
/*
                    
                 setTimeout(() => {
    // Enable command recognition again
      artyom.sayRandom(tess);
    // Try to say hello again and now the command will be recognized
     setTimeout(() => {
    // Enable command recognition again
      artyom.sayRandom(tess);
    // Try to say hello again and now the command will be recognized
        setTimeout(() => {
    // Enable command recognition again
      artyom.sayRandom(tess);

      setTimeout(() => {
    // Enable command recognition again
      artyom.sayRandom(desobediente);
      artyom.addCommands(respostaDesobediente);




      
    // Try to say hello again and now the command will be recognized
}, 10000);
    // Try to say hello again and now the command will be recognized
}, 10000);
}, 10000);
}, 100000);*/
             //   artyom.addCommands(funcSite);
              //  artyom.addCommands(funcBackground);
            }
            else{
                artyom.say("Para que eu possa entender...diga pausadamente apenas as palavras: SIM ou NÃo!");
              artyom.newPrompt(funcTutorialNoResponse);
          }
        };

        // A function needs to be returned in onMatch event
        // in order to accomplish what you want to execute
        return action;                       
    }

};


//////////////////////////////////////////////////////
var funcInicioNome = {
    question:"Antes de começar, diga seu nome para te conhecer melhor!",
    //We set the smart property to true to accept wildcards
    smart:true,
    options:["*"],
    beforePrompt: () => {
        console.log("Before ask");
    },
    onStartPrompt:  () => {
        console.log("The prompt is being executed");
    },
    onEndPrompt: () => {
        HoldOn.close();
        console.log("The prompt has been executed succesfully");
    },
    onMatch: (i,wildcard) => {// i returns the index of the given options
        var action;

        var a = wildcard;


        action = () => {
           
            artyom.say(a);
                        
                        artyom.newPrompt({
    question:"Olá "+a+" Muito prazer, meu nome é Robozilda. Está tudo bem com você?",
    //We set the smart property to true to accept wildcards
    
    options:["sim","não"],
    beforePrompt: () => {
        console.log("Before ask");
    },
    onStartPrompt:  () => {
        HoldOn.open(options);
        console.log("Ela está falando..");
    },
    onEndPrompt: () => {
        HoldOn.close(options);
        console.log("The prompt has been executed succesfully");
    },
    onMatch: (i) => {// i returns the index of the given options
        var action;

        //var a = wildcard;

       
            if(i == 0){ 
            action =  () => {
               
                 artyom.newPrompt(funcSaudacaonome);

            }

        }
             if(i == 1){
            action =  () => {
                artyom.say("Tô nem ai, sou robô! Não tenho sentimentos, calma brincadeirinha hahaha. O que deseja fazer");
                artyom.addCommands(funcSite);
                artyom.addCommands(funcBackground);
             
            }
        }
        

        // A function needs to be returned in onMatch event
        // in order to accomplish what you want to execute
        return action;                       
    }
});
        };

        // A function needs to be returned in onMatch event
        // in order to accomplish what you want to execute
        return action;                       
    }
};
    

        //função inicial do app, que pegunta qual o nome do usuário


//funcao que pergunta  o que  o usuario deseja fazer
var funcSaudacaonomeSefalhar = {
    question:"O que deseja fazer agora?",
    //We set the smart property to true to accept wildcards
    smart:true,
    options:["*","o que você recomenda","ir para *","pesquise *","background *","me diga a hora","me diga uma frase de efeito",
    "conte uma piada","qual a previsão do tempo em *","como esta o transito em *","me ensine a fazer *"],
    beforePrompt: () => {
        console.log("antes da fala");
    },
    onStartPrompt:  () => {
        HoldOn.open(options);
        console.log("durante a fala");
    },
    onEndPrompt: () => {
        HoldOn.close(options);
        console.log("após a execuçao");
    },
    onMatch: (i,ordem) => {// i returns the index of the given options
        var action;

        
            if(ordem =="não sei"){
                
        action = () => {
            artyom.sayRandom(["Não sabe?","Pra falar comigo é necessário ter lido o manual de instuções!","Bom, vamos lá!"]);
            artyom.sayRandom(["Ainda estou aprendendo a trabalhar. No momento eu consigo modificar o layout desse site, visitar páginas na internet, fazer pesquisas, dizer as horas e a data, conheço milhares de frase de efeito, sei contar piada kkkk, consigo prever se vai fazer sol ou não! Sou mais eficiente que o waze, consigo dizer se o transito está bom ou não...ahh e também sei algumas receitas!","Se não sabe , eu que não vou dizer o que deve ser feito! Não estou muito afim de te obedecer hoje","Diga alguma coisa, talvez posso te ajudar"]);
           artyom.addCommands(funcSite);
            //artyom.on(funcSite);
   // artyom.say("Ok. Entendi. Vou redirecionar você para o site desejado. Indo para o site "+site+".com");
                  //      window.location.href = 'http://' +site+'.com','_blank';
                     //  window.open("www"+site+".com","_blank");
}

    }
    else{
                         artyom.say("Não entendi. Diga pausadamente!");
                         artyom.newPrompt(funcSaudacaonome);
                    }

        // A function needs to be returned in onMatch event
        // in order to accomplish what you want to execute
        return action;                       
    }
};





var  funcSaudacaonome ={
     question:"Que bom, o que deseja fazer agora?",
    //We set the smart property to true to accept wildcards
    smart:true,
    options:["*","o que você recomenda","ir para *","pesquise *","background *","me diga a hora","me diga uma frase de efeito",
    "conte uma piada","qual a previsão do tempo em *","como esta o transito em *","me ensine a fazer *"],

    beforePrompt: () => {
        console.log("antes da fala");
    },
    onStartPrompt:  () => {
        HoldOn.open(options);
        console.log("durante a fala");
    },
    onEndPrompt: () => {
        HoldOn.close(options);
        console.log("após a execuçao");
       
    },
    onMatch: (i,ordem) => {// i returns the index of the given options
        var action;

        
            if(ordem =="não sei"){
                
        action = () => {
            artyom.sayRandom(["Não sabe?","Pra falar comigo é necessário ter lido o manual de instuções!","Bom, vamos lá!"]);
            artyom.sayRandom(["Ainda estou aprendendo a trabalhar. No momento eu consigo modificar o layout desse site, visitar páginas na internet, fazer pesquisas, dizer as horas e a data, conheço milhares de frase de efeito, sei contar piada kkkk, consigo prever se vai fazer sol ou não! Sou mais eficiente que o waze, consigo dizer se o transito está bom ou não...ahh e também sei algumas receitas!","Se não sabe , eu que não vou dizer o que deve ser feito! Não estou muito afim de te obedecer hoje","Diga alguma coisa, talvez posso te ajudar"]);
            artyom.on(['ir para *'] , true).then(function(i,site){
    artyom.say("Ok. Entendi. Vou redirecionar você para o site desejado. Indo para o site "+site+".com");
        artyom.addCommands(funcSite);
                     //  window.open("www"+site+".com","_blank");
});
            //artyom.on(funcSite);
   // artyom.say("Ok. Entendi. Vou redirecionar você para o site desejado. Indo para o site "+site+".com");
                  //      window.location.href = 'http://' +site+'.com','_blank';
                     //  window.open("www"+site+".com","_blank");
}

    }
    else{
                         artyom.say("Não entendi. Diga pausadamente!");
                         artyom.newPrompt(funcSaudacaonomeSefalhar);
                    }

        // A function needs to be returned in onMatch event
        // in order to accomplish what you want to execute
        return action;                       
    }

};    


var funModoInicial = {

        indexes:["modo *"],
        smart:true,
        action:function(i,modo){
        if(modo =="tutorial"){
            artyom.sayRandom([fraseTutorial]);
            setTimeout(() => {
                 artyom.sayRandom([fraseTutorialAguardando]);
                
    }, 5000);
             setTimeout(() => {
                 artyom.sayRandom([fraseTutorialAguardando]);
                artyom.newPrompt(funcTutorial);
    }, 5000);
            
        }
        }

};
      

   