
function encriptar() {
    let palabraEncriptar = document.querySelector(".text-area").value;
    let palabraEncriptada = '';

    for (let i = 0; i < palabraEncriptar.length; i++) {
        if (palabraEncriptar[i] === 'a') {
            palabraEncriptada += 'ai';
        } else if (palabraEncriptar[i] === 'e') {
            palabraEncriptada += 'enter';
        } else if (palabraEncriptar[i] === 'i') {
            palabraEncriptada += 'imes';
        } else if (palabraEncriptar[i] === 'o') {
            palabraEncriptada += 'ober';
        } else if (palabraEncriptar[i] === 'u') {
            palabraEncriptada += 'ufat';
        } else {
            palabraEncriptada += palabraEncriptar[i];
        }
    }

    // Habilitar los elementos deseados
    document.querySelector(".copiar").removeAttribute("hidden");

    // Deshabilitar elementos que no son los botones
    document.querySelector(".muneco").setAttribute("hidden", "true");
    document.querySelector(".subtitulo").setAttribute("hidden", "true");
    document.querySelector(".parrafo").setAttribute("hidden", "true");

    // Establecer el valor encriptado en el textarea
    document.querySelector(".ventana").value = palabraEncriptada;
}

function desencriptar() {
    let palabraDesencriptar = document.querySelector(".text-area").value;
    let palabraDesencriptada = '';

    for (let i = 0; i < palabraDesencriptar.length; i++) {
        
        if (palabraDesencriptar.slice(i, i +2) === 'ai') {
            palabraDesencriptada += 'a';
            i++;
        } else if (palabraDesencriptar.slice(i, i + 5) === 'enter') {
            palabraDesencriptada += 'e';
            i += 4;
        } else if (palabraDesencriptar.slice(i, i + 4) === 'imes') {
            palabraDesencriptada += 'i';
            i += 3;
        } else if (palabraDesencriptar.slice(i, i + 4) === 'ober') {
            palabraDesencriptada += 'o';
            i += 3;
        } else if (palabraDesencriptar.slice(i, i + 4) === 'ufat') {
            palabraDesencriptada += 'u';
            i += 3;
        } else {
            palabraDesencriptada += palabraDesencriptar[i];
        }

    }

    // Habilitar los elementos deseados
    document.querySelector(".copiar").removeAttribute("hidden");

    // Deshabilitar elementos que no son los botones
    document.querySelector(".muneco").setAttribute("hidden", "true");
    document.querySelector(".subtitulo").setAttribute("hidden", "true");
    document.querySelector(".parrafo").setAttribute("hidden", "true");

    // Establecer el valor encriptado en el textarea
    document.querySelector(".ventana").value = palabraDesencriptada;
    
}

function copiar() {
    let ventana = document.querySelector(".ventana");
    ventana.select();
    navigator.clipboard.writeText(ventana.value);
    alert("Copiado al portapapeles");
}
