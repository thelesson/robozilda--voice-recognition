	///
	//funcao para ir para um site




var guardaSites = new Array();
	            	 var guardaSites2 = new Array();
	            	 var armazenaSite = new Array();
	            	 var limpaTxt;
	            	 var pegaTab;
	 var funcSite = {
	    indexes:["ir para *","visitar *","site da *","visite o site *","site *","site do *","fechar *"],
	    smart:true,
	            action:function(i,site){
	            	 
	   			  //var guardaSites = [];
	             if(i==0 ||i==1 ||i==2||i==3||i==4||i==5){
	              HoldOn.open(options);
	              var texteSiteDesejado = ["Ok. Entendi. Vou redirecionar você para o site desejado. Indo para o site "+site+".com",
	              "Redirecioando para o "+site+".com"];
	   			  artyom.sayRandom(texteSiteDesejado);
	    		  var site2;
	    		  var url;
	    		  
	   			  var armazenaUrl;
	   			 
	        		if(site.match(/ponto com/)){
	     				setTimeout(()=>{
	     				site2 = site.replace("ponto com/", ".com");
	     				guardaSites.splice(0,0,site2);
	    				url = "http://"+site2;
	     				armazenaSite2 =  window.open(url, '_blank');
	     				armazenaSite.push(armazenaSite2);
	     				HoldOn.close(options);
	       				 },5000);
	          		  }

	           		 else if(site.match(/ ponto /)){
	              		setTimeout(()=>{
	               		site2 = site.replace(" ponto ", ".");
	               		guardaSites.splice(0,0,site2);
	               		url = "http://"+site2+".com";
	               		armazenaSite2 =  window.open(url, '_blank');
	               		armazenaSite.push(armazenaSite2);
	               		HoldOn.close(options);
	       				 },5000);     
	            	  }

	            	 else if(site.match(/ /)){
	               		setTimeout(()=>{
	               		site2 = site.split(" ").join("");
	               		guardaSites.splice(0,0,site2);
	              		url = "http://"+site2+".com";
	               		armazenaSite2 =  window.open(url, '_blank');
	               		armazenaSite.push(armazenaSite2);
	               		HoldOn.close(options);
	        			 },5000);     
	            	 }
	            	 else if(site.match(/.com.br/)){
	               		setTimeout(()=>{
	               		site2 = site.replace(".com.br", ".com.br");
	               		guardaSites.splice(0,0,site2);
	               		url = "http://"+site2;
	               		armazenaSite2 =  window.open(url, '_blank');
	               		armazenaSite.push(armazenaSite2);
	               		HoldOn.close(options);
	        			},5000);     
	           		 }
	           		  else if(site.match(/.com/)){
	               		setTimeout(()=>{
	               		site2 = site.replace(".com", ".com");
	               		guardaSites.splice(0,0,site2);
	               		url = "http://"+site2;
	               		armazenaSite2 =  window.open(url, '_blank');
	               		armazenaSite.push(armazenaSite2);
	               		HoldOn.close(options);
	        			},5000);     
	           		 }
	            
	                else{
	               		setTimeout(()=>{
	               		
	              		url = "http://"+site+".com";
	              		armazenaUrl = url;
	             		armazenaSite2 =  window.open(url, '_blank');
	             		guardaSites.push(site);
	             		armazenaSite.push(armazenaSite2);
	             		console.log(guardaSites);
	             		console.log(armazenaSite);
	             		teste = $.inArray(site, guardaSites);
	             		console.log(teste);

	              //  window.location.href = 'http://' +site+'.com','_blank';
	             		HoldOn.close(options);
	            		},5000);
	            	}
	           
	             }

	             if(i==6){
	             		console.log(guardaSites);
	             	
	             	//var indice = guardaSites.indexOf(site);
	             	if(site.match(/ponto com/)){
	             		  limpaTxt = site.replace("/ponto com/", ".com");
	             		  novourl = "http://"+limpaTxt;
	             	}
	             	 else if(site.match(/ ponto /)){
	             		  limpaTxt = site.replace(" ponto ", ".");
	             		  novourl = "http://"+limpaTxt+".com";
	             	}
	             	else if(site.match(/ /)){
	             		 limpaTxt = site.split(" ").join("");
	             		 novourl = "http://"+limpaTxt+".com";
	             	}
	             	else if(site.match(/.com.br/)){
	             		  limpaTxt = site.replace(".com.br", ".com.br");
	             		  novourl = "http://"+limpaTxt;
	             	}
	             	else if(site.match(/.com/)){
	             		 limpaTxt = site.replace(".com", ".com");
	             		 novourl = "http://"+limpaTxt;
	             	}
	             	else {
	             		limpaTxt = site;
	             		novourl = "http://"+site+".com";
	             	}

	             	
	             	if(guardaSites.indexOf(limpaTxt) !== -1 ){
	             		teste = $.inArray(limpaTxt, guardaSites);
	             		pegaTab = armazenaSite[teste];
	             		console.log(teste);
	             		console.log(pegaTab);
	             		url = "http://"+site+".com";
	             		
	             		artyom.say("Ok. Entendi. Fechando site "+limpaTxt);
	             		//armazenaSite.close();
	             		//armazenaSite = window.close(url);
	             		pegaTab.close();
	             		
	             	}
	             	else{artyom.say("Opa, me desculpe mas não estou conseguindo fazer isso no momento! Por favor, realize ess atarefa manualmente");}
	                //artyom.say("Ok. Entendi. Fechando site "+url);
	                //armazenaSite.close();
	             }     

	                          
	            }
	        };