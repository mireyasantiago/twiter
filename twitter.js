alert("mensaje");

function mostrar(){
  var texto=document.getElementById("comentarios").value;
      document.getElementById('previoTexto').innerHTML = texto;

}

function contador(){



  //var onkeypress="document.getElementById'cuenta').inner HTML = this.value.length" />(<span id="cuenta"></span>/500)
  var contando= document.getElementById("comentarios").value;
  var limite= contando.length -140;
  document.getElementById('contador').innerText=  contador +"/" limite;



  //for(i=0; i < 140; i++){}
}
