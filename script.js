nb1=document.querySelector("#nb1")
nb2=document.querySelector("#nb2")
operation=document.querySelector("#opération")
resultat=document.querySelector("#resultat")

document.querySelector("#calculer").onclick=function(){
	//alert("entrer");

	//calculer();

	if (operation.value=="+"){
		var som = addition(nb1.value,nb2.value);
		alert(som);
		resultat.value = som;

	}

	if (operation.value=="*"){
		var prod = multiplication(nb1.value,nb2.value);
		alert(prod);
		resultat.value = prod;

	}

	
	if(operation.value =="/"){

	var div = division(nb1.value,nb2.value);

	alert(div);

	resultat.value = div; 

}
if(operation.value =="-"){

	var difference = soustraction(nb1.value,nb2.value);

	alert(difference);

	resultat.value = difference; 

}

}


	 function calculer(){

if(isNaN(parseFloat(nb1.value))==true){
	alert("la première opération est invalide");
}
else if(isNaN(parseFloat(nb2.value))==true){
	alert("la deuxième opération est invalide");
}
else if (operation.value == "+"){
	resultat.value= parseFloat(nb1.value) + parseFloat(nb2.value);
	}
	else if (operation.value=="-"){
		resultat.value=parseFloat(nb1.value) - parseFloat(nb2.value);
	}
	else if(operation.value=="*"){
		resultat.value=parseFloat(nb1.value) * (nb2.value);
	}
	else if (operation.value=="/"&&parseFloat(nb2) != 0){
		resultat.value=parseFloat(nb1.value) / parseFloat(nb2.value);
	}
	else{
		alert("division par 0 impossible");
	}

}


	document.querySelector("#nb1").onkeyup=function(){
		if(isNaN(parseFloat(this.value))== true){
			this.value="";
		}
}

	 function addition (nombre1,nombre2){
	 	var somme=parseFloat(nombre1)+parseFloat(nombre2);
	 	alert(somme);
	 	return somme;
       }
	 	 function multiplication (nombre1,nombre2){
	 	var produit=parseFloat(nombre1)*parseFloat(nombre2);
	 	alert(produit);
	 	return produit;
	 
	  }

	   function division (nombre1,nombre2){
	 	var quotient=parseFloat(nombre1)/parseFloat(nombre2);
	 	alert(quotient);
	 	return quotient;
	 
	  }
	   
	    function soustraction (nombre1,nombre2){
	 	var reste=parseFloat(nombre1)/parseFloat(nombre2);
	 	alert(reste);
	 	return reste;
	 
	  }
	   
	   