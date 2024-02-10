function encriptar() {
        let texto = document.getElementById("texto").value;
         let tituloMensaje = document.getElementById("titulo-mensaje");
         let parrafo = document.getElementById("parrafo");

        let textoCifrado = texto 
            .replace(/e/gi, "enter")
            .replace(/i/gi, "imes")
            .replace(/a/gi, "ai")
            .replace(/o/gi, "ober")
            .replace(/u/gi, "ufat"); 

    if(document.getElementById("texto").value.length !=0) {
      document.getElementById("texto").value = textoCifrado;
      document.getElementById("titulo-mensaje").value.textContent = 
      "Texto encriptado con éxito";
      document.getElementById("parrafo").textContent = "";
  } else {
    tituloMensaje.textContent = "Ingresa el texto que deseas encriptar o desincriptar."
    alert("Debes ingresar algun texto");
  }
}
function desencriptar() {
        let texto = document.getElementById("texto").value;

        let textoCifrado = texto
          .replace(/enter/gi, "e")
          .replace(/imes/gi, "")
          .replace(/ai/gi, "a")
          .replace(/ober/gi, "o")
          .replace(/ufat/gi, "u"); 

          if(texto.length != 0){
            document.getElementById("texto").value = textoCifrado;
            document.getElementById("titulo-mensaje").value.textContent = 
            "Texto encriptado con éxito";
            document.getElementById("parrafo").textContent = "";
            } else {
            tituloMensaje.textContent = "Ingresa el texto que deseas encriptar o desincriptar."
            alert("Debes ingresar algun texto");
            }
          }