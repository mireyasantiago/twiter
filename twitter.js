alert("mensaje");

function mostrar(){
  var texto=document.getElementById("textArea").value;
      document.getElementById('previoTexto').innerHTML = texto;

}

function mostrarNombre(){
  var nombre=document.getElementById("nombre").value;
      document.getElementById('nombreAutor').innerHTML = nombre;

}

function funciones(){
  mostrar();
   mostrarNombre();
}





function contar(){
  var max = "140";
  var caracteres = document.getElementById("textArea").value;
  var longitud = caracteres.length;

  if(longitud <= max){
    document.getElementById("contador").value = max-longitud;
  }
  else{
    document.getElementById("textArea").value = caracteres.substr( 0,max);
    /*El método substr() devuelve los caracteres de una cadena de acuerdo
    al número de caracteres que se especifiquen.(cadena.substr(inicio[, longitud]))*/
  }
}
