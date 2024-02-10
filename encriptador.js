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
    alert("Debes ingresar algun texto");
  }
}

    