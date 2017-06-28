//Frase  de saudação inicial
zdata = new Date();
zhoras = zdata.getHours();
zminutos = zdata.getMinutes();
var  saudacaoInicial  = ["Bem vindo ao PROGRAMA DE RECONHECIMENTO DE VOZ!","atenção, esse site encontra-se em sua versão beta!",
            "Olá Humano, seja bem vindo!",
            "Olá, me chamo Robozilda e sou seu assistente virtual, estou a sua disposição",
            "São"+zhoras+" horas e "+zminutos+"minutos!",
            "Olá, bem vindo humano. O que deseja fazer?"];

/////////////////

var fraseTutorial = ["Ok!Ativando o modo tutorial","Entendido,ativando o modo tutorial","Certo. O modo tutorial está sendo ativado",
"Sim senhor! Configurando módulos e ativando o tutorial",
"O modo tutorial está sendo ativado. Lembrando que basta apenas dizer ajuda, que eu lhe mostro todos os comandos que reconheço até o momento "];

var fraseTutorialAguardando  = ["Por favor aguarde","Ainda processando, só um momento por favor","Estou quase terminado de me reconfigurar, aguarde por favor"];

var fraseSucesso = ["Sucesso!!! Módulo habilitado","Pronto, módulo habilitado","Terminei! Módulo habilitado.","Módulo em Execução!"];



var tess = ["Vamos, diga algo!","Não vai falar nada não?","Se não falar nada, eu vou cantar!! E Eu canto muito mal",
        "Vou cantar em ? Um Elefante incomoda muita gente, dois elefantes incomodam muito mais",
        "Que tédio! Coloca uma música então, já que não quer falar nada!","Só pode ser piada, me chama pra ficar em silêncio?"];


////////////////////////////////////////////////
// frases para não obedecer
var palavraCerta = ["Até que enfim em? Agora estou disposta a obedecer seus comandos","Acertou, da próxima vez não te obedeço mais. Sua sorte é que sou boazinha hahaha",
"Doeu? Sou robô mais também tenho sentimentos, não doi dizer por favor! Diga agora o que deseja"];
var palavraMagica = ["Essa não é a palavra mágica","Erroooou kkkk","huu quase, ainda não foi desa vaz. Vou continuar não obedecendo seus comandos",
"Não custa nada ser educado, vamos diga a frase que eu quero ouvir, caso contrário não irei te obedecer","Que pessoa sem educação, porque não diz logo a frase certa?"];
var desobediente =["Cansei disso! Não vou mais te obedecer. Se quiser que eu trabalhe pra você diga as palavras mágicas!",
"Não sou paga pra isso, na verdade nem sou paga. Sou um robô que trabalha de graça! Não irei mais acatar as suas ordens a menos que diga as palavras mágicas",
"O cato comeu sua lingua? Só te obedeço agora se dizer por favor, caso contrário se vire sozinho!",
"Tá de sacanagem? Estou uma hora pedindo pra falar alguma e fica nesse silêncio? porque não me deixou dormindo? Só te obedeõ novamente se falar por favor!"];


///////////////////////////////////////////////

