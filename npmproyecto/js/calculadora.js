window.onload=function(){
		var colorAmarillo = function(){
			this.style.background= "yellow"
		}
		var colorBlanco = function(){
			this.style.background= "white"
 }
 var operando1 = document.getElementById("operando1");
 operando1.addEventListener("focus", colorAmarillo);
 operando1.addEventListener("focusout", colorBlanco);

 var operador=""
 var numeros=function(){
 	var valor=this.value;
 	if (operador==""){
 	var valorInput=document.getElementById("operando1").value;
 	if(valor=="0"){
 		document.getElementById("operando1")value="";
 		}
 		document.getElementById("operando1").value+=valor;
			
 		}
 		else{ 
 		
 	var valorInput=document.getElement("operando2").value;
 if(valor=="0"){
 		document.getElementById("operando2")value="";
 		}
 		document.getElementById("operando2").value+=valor;
 	}
 }
 		Var operadores = function(){
 			operador = this.value
 		}
 		Var resultadoIgul = function(){
 			oper1=document.getElementById('operando1').value
 			aper2=document.getElementById('resultado').value=(oper1+operador+oper2)
 		}
 		Var reinicio = function(){
 			document.getElementById('operando1').value="0"
 			document.getElementById('operando2').value="0"
 			document.getElementById('resultado').value="0"
 			operador = ""
 		}
 		var operando1 = documnet.getElementById('operando1')
 		var operando2 = documnet.getElementById('operando2')
 		var resultado = documnet.getElementById('resultado')

 	    var uno=document.getElementById("uno")
 	uno.addEventListener("click", numeros)
 	 	var dos=document.getElementById("dos")
 	dos.addEventListener("click", numeros)
 	 	var tres=document.getElementById("tres")
 	tres.addEventListener("click", numeros)
 	 	var cuatro=document.getElementById("cuatro")
 	cuatro.addEventListener("click", numeros)
 	 	var cinco=document.getElementById("cinco")
 	cinco.addEventListener("click", numeros)
 	 	var seis=document.getElementById("seis")
 	seis.addEventListener("click", numeros)
 	 	var siete=document.getElementById("siete")
 	siete.addEventListener("click", numeros)
 	 	var ocho=document.getElementById("ocho")
 	ocho.addEventListener("click", numeros)
 	 	var nueve=document.getElementById("nueve")
 	nueve.addEventListener("click", numeros)

 		var suma=document.getElementById("suma")
 		var resta=document.getElementById("resta")
 		var multiplicacion=document.getElementById("multiplicacion")
 		var division=document.getElementById("resta")
 		var igual=document.getElementById("igual")
 		var reiniciar=document.getElementById("reiniciar")

 		suma.addEventListener("click", operadores)
 		resta.addEventListener("click", operadores)
 		multiplicacion.addEventListener("click", operadores)
 		division.addEventListener("click", operadores)

 		igual.addEventListener("click", resultadoIgual)


}