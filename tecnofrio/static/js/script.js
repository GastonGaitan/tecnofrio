document.addEventListener("DOMContentLoaded", function () {
    const btnCopiar = document.getElementById("btn-copiar");
    const numero = document.getElementById("numero");
  
    btnCopiar.addEventListener("click", function () {
      const copiarTexto = numero.innerText;
      const textarea = document.createElement("textarea");
      textarea.value = copiarTexto;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      alert("Número copiado al portapapeles: " + copiarTexto);
    });
  });
  