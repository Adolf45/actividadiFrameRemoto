//Enviar mensajes
const buttonEnviar = document.getElementById("enviarMensaje");

buttonEnviar.addEventListener("click", ()=>{
     
    const inputMensaje = document.getElementById("mensajeBox");
    const mensaje = inputMensaje.value;

    const parentWindow = window.parent;

    //Enviar el mensaje a la página
    parentWindow.postMessage(mensaje, "http://127.0.0.1:5500");

    //Limpiar el formulario
    inputMensaje.value= "";
});