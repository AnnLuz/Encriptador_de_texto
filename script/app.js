//capturar el imput de texto

const inputTexto = document.querySelector(".input_text");


//capturar textarea para mostrar

const msj = document.querySelector(".mensaje");

//captura titulo de mensaje 

const titulo = document.querySelector(".titulo");

//captura el parrafo 

const reseña = document.querySelector(".reseña");

// Captura el botón de copiar
const botonCopiar = document.querySelector(".copiar");

// Mostrar el botón de copiar
function mostrarBotonCopiar() {
    const botonCopiar = document.querySelector(".copiar");
    botonCopiar.style.display = "block"; // Cambia a "block" para mostrar el botón
}

// Ocultar el botón de copiar
function ocultarBotonCopiar() {
    const botonCopiar = document.querySelector(".copiar");
    botonCopiar.style.display = "none"; // Cambia a "none" para ocultar el botón
}


//funcion para evento

function btnEncriptar(){

    if (!inputTexto || !msj || !titulo || !reseña) {
        console.error("Elementos del DOM no encontrados.");
        return;
    }

    //llamo a la función encriptar, capturando el contenido desde el input
     const textoEncriptado = encriptar(inputTexto.value || "");
     msj.value = textoEncriptado;
     inputTexto.value="";


     
     if(textoEncriptado.length > 0){

        //la imagen desaparece
        msj.style.backgroundImage = "none";
        //Título de mensaje de encriptado
        titulo.textContent = "Texto encriptado con éxito";
        //Parrafo de mensaje encriptado
        reseña.textContent = " ";
        //Se muestra el boton de copiar texto
        mostrarBotonCopiar();


        // Asegurarse de que solo se registre un evento de clic
        botonCopiar.removeEventListener("click", handleCopyClick); // Eliminar el evento anterior si existe
        botonCopiar.addEventListener("click", handleCopyClick); 

     } else {
        //La imagen aparece
        msj.style.backgroundImage = "";
        //Título de mensaje 
        titulo.textContent = "Ningún mensaje fue encontrado";
        //Parrafo de mensaje encriptado
        reseña.textContent = "Ingrese texto que desee encriptar o desencriptar";
        //alerta
        alert("Debes ingresar algún texto");
        ocultarBotonCopiar();
        
     }
}

// Función para manejar el clic del botón de copiar
function handleCopyClick() {
    let copytext = document.querySelector(".mensaje").value;
    navigator.clipboard.writeText(copytext).then(() => {
        alert("Texto copiado con éxito!");
    });
}

//funcion para encriptar

function encriptar(stringEncript){



    let matriz = [["e" , "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];

    if (/[A-Z]/.test(stringEncript) && /[^a-zA-Z0-9\s]/.test(stringEncript)) {
        alert("Has ingresado letra/s mayúscula/s y caracteres especiales, por favor ingresa nuevamente.");
        return null; // Retornar null si el texto no cumple con las condiciones
    } else if (/[A-Z]/.test(stringEncript)) {
        alert("Has ingresado letra/s mayúscula/s, por favor ingresa nuevamente.");
        return null; // Retornar null si el texto no cumple con las condiciones
    } else if (/[^a-zA-Z0-9\s]/.test(stringEncript)) {
        alert("Has ingresado caracteres especiales, por favor ingresa nuevamente.");
        return null; // Retornar null si el texto no cumple con las condiciones
    } else {
        for(let i = 0; i< matriz.length; i++){
            
            if(stringEncript.includes(matriz[i][0])){
            
                //Remplaza los contenidos
                stringEncript = stringEncript.replaceAll(matriz[i][0], matriz[i][1]);
            
            }
            
        }
        return stringEncript; //Retorna el texto encriptado
    }
    
   

    
    //CODIFICACIÓN EXTRA! :) 
    
    //Si se ingresa letras mayuscula, se  cambia a minuscula
    //stringEncript = stringEncript.toLowerCase();

    //Si se ingresan caracteres especiales, se quitan esos caracteres
    //stringEncript = stringEncript.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
}

function btnDesencriptar(){

    
    if (!inputTexto || !msj || !titulo || !reseña) {
        console.error("Elementos del DOM no encontrados.");
        return;
    }

    const textoDesencriptado = desencriptar(inputTexto.value || "");
    msj.value = textoDesencriptado;
    inputTexto.value="";

    if(textoDesencriptado.length > 0){

        msj.style.backgroundImage = "none";
        //Título de mensaje de encriptado
        titulo.textContent = "Texto desencriptado con éxito";
        //Parrafo de mensaje encriptado
        reseña.textContent = " ";
        mostrarBotonCopiar();

        // Asegurarse de que solo se registre un evento de clic
        botonCopiar.removeEventListener("click", handleCopyClick); // Eliminar el evento anterior si existe
        botonCopiar.addEventListener("click", handleCopyClick);

    }else{

        //Aparece la imagen
        msj.style.backgroundImage = "";
        //Título de mensaje 
        titulo.textContent = "Ningún mensaje fue encontrado";
        //Parrafo de mensaje encriptado
        reseña.textContent = "Ingrese texto que desee encriptar o desencriptar";
        //alerta
        alert("Debes ingresar algún texto para desencriptar");
        ocultarBotonCopiar();

    }
}

//funcion para desencriptar

function desencriptar(stringDesencript){

    let matriz = [["e" , "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];

    if (/[A-Z]/.test(stringDesencript) && /[^a-zA-Z0-9\s]/.test(stringDesencript)) {
        alert("Has ingresado letra/s mayúscula/s y caracteres especiales, por favor ingresa nuevamente.");
        return null; // Retornar null si el texto no cumple con las condiciones
    } else if (/[A-Z]/.test(stringDesencript)) {
        alert("Has ingresado letra/s mayúscula/s, por favor ingresa nuevamente.");
        return null; // Retornar null el texto no cumple con las condiciones
    } else if (/[^a-zA-Z0-9\s]/.test(stringDesencript)) {
        alert("Has ingresado caracteres especiales, por favor ingresa nuevamente.");
        return null; // Retornar null si el texto no cumple con las condiciones
    } else {

        for(let i = 0; i< matriz.length; i++){

            if(stringDesencript.includes(matriz[i][1])){
    
                stringDesencript = stringDesencript.replaceAll(matriz[i][1], matriz[i][0]);
    
    
            }
    
        }
    
        return stringDesencript;//Retorna el texto desencriptado
    }

    //CODIFICACIÓN EXTRA! :) 
    
    //Si se ingresa letras mayuscula, se  cambia a minuscula
    //stringEncript = stringEncript.toLowerCase();

    //Si se ingresan caracteres especiales, se quitan esos caracteres
    //stringEncript = stringEncript.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
}

