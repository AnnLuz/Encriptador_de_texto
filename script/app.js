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


     
     if(textoEncriptado.length != 0){

        //la imagen desaparece
        msj.style.backgroundImage = "none";
        //Título de mensaje de encriptado
        titulo.textContent = "Texto encriptado con éxito";
        //Parrafo de mensaje encriptado
        reseña.textContent = " ";

        // Asegurarse de que solo se registre un evento de clic
        botonCopiar.removeEventListener("click", handleCopyClick); // Eliminar el evento anterior si existe
        botonCopiar.addEventListener("click", handleCopyClick); 

     } else {
        msj.style.backgroundImage = "";
        //Título de mensaje 
        titulo.textContent = "Ningun mensaje fue encontrado";
        //Parrafo de mensaje encriptado
        reseña.textContent = "Ingrese texto que desee encriptar o desencriptar";
        //alerta
        alert("Debes ingresar algún texto");
        
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
        alert("Has ingresado letras mayúsculas y caracteres especiales, por favor ingresa nuevamente.");
    } else if (/[A-Z]/.test(stringEncript)) {
        alert("Has ingresado letras mayúsculas, por favor ingresa nuevamente.");
    } else if (/[^a-zA-Z0-9\s]/.test(stringEncript)) {
        alert("Has ingresado caracteres especiales, por favor ingresa nuevamente.");
    } else {
        for(let i = 0; i< matriz.length; i++){
            
            if(stringEncript.includes(matriz[i][0])){
            
                //Remplaza los contenidos
                stringEncript = stringEncript.replaceAll(matriz[i][0], matriz[i][1]);
            
            }
            
        }
        return stringEncript;
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

    if(textoDesencriptado.length != 0){

        msj.style.backgroundImage = "none";
        //Título de mensaje de encriptado
        titulo.textContent = "Texto desencriptado con éxito";
        //Parrafo de mensaje encriptado
        reseña.textContent = " ";

        // Asegurarse de que solo se registre un evento de clic
        botonCopiar.removeEventListener("click", handleCopyClick); // Eliminar el evento anterior si existe
        botonCopiar.addEventListener("click", handleCopyClick);

    }else{

        msj.style.backgroundImage = "";
        //Título de mensaje 
        titulo.textContent = "Ningún mensaje fue encontrado";
        //Parrafo de mensaje encriptado
        reseña.textContent = "Ingrese texto que desee encriptar o desencriptar";
        //alerta
        alert("Debes ingresar algún texto para desencriptar");

    }
}

//funcion para desencriptar

function desencriptar(stringDesencript){

    let matriz = [["e" , "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];

    if (/[A-Z]/.test(stringDesencript) && /[^a-zA-Z0-9\s]/.test(stringDesencript)) {
        alert("Has ingresado letras mayúsculas y caracteres especiales, por favor ingresa nuevamente.");
    } else if (/[A-Z]/.test(stringDesencript)) {
        alert("Has ingresado letras mayúsculas, por favor ingresa nuevamente.");
    } else if (/[^a-zA-Z0-9\s]/.test(stringDesencript)) {
        alert("Has ingresado caracteres especiales, por favor ingresa nuevamente.");
    } else {

        for(let i = 0; i< matriz.length; i++){

            if(stringDesencript.includes(matriz[i][1])){
    
                stringDesencript = stringDesencript.replaceAll(matriz[i][1], matriz[i][0]);
    
    
            }
    
        }
    
        return stringDesencript;
    }

    //CODIFICACIÓN EXTRA! :) 
    
    //Si se ingresa letras mayuscula, se  cambia a minuscula
    //stringEncript = stringEncript.toLowerCase();

    //Si se ingresan caracteres especiales, se quitan esos caracteres
    //stringEncript = stringEncript.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
}

