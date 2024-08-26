
// Lllave clave
const key = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
}



// Texto ingresado sin characteres especiales.
function validarTextoIngresado(text) {
    if (text === "" || !/^[a-z\s]*$/.test(text)) {
        alert(text === "" ? 'No ha ingresado texto.' : 'El texto no debe contener mayúsculas, tildes, ni caracteres especiales.');
        document.getElementById("textoIngresado").value = ""; // Clear the input field
        return false;
    }
    return true;
}


// Encriptar 

function encriptar() {
    let text = document.getElementById("textoIngresado").value;

    if (!validarTextoIngresado(text)) return;
    let textoEncriptado = ''; 

    for (let i = 0; i < text.length; i++) {
        const char = text[i].toLowerCase(); 
        if (key[char]) {
            textoEncriptado += key[char];
        } else {
            textoEncriptado += char; 
        }
    }
    document.getElementById('textoEncriptado').value = textoEncriptado;
    hideImage();
    togglePlaceholder(textoEncriptado);


    toggleCopyButton(textoEncriptado);
}


// Desencriptar

function desencriptar() {
    let text = document.getElementById("textoIngresado").value;

    if (!validarTextoIngresado(text)) return;

    let textoDesencriptado = ''; 
    const reverseKey = Object.fromEntries(Object.entries(key).map(([k, v]) => [v, k]));
    const regex = new RegExp(Object.keys(reverseKey).join('|'), 'g');
    textoDesencriptado = text.replace(regex, (matched) => reverseKey[matched]);

    document.getElementById('textoEncriptado').value = textoDesencriptado;
    hideImage();
    togglePlaceholder(textoDesencriptado);

    toggleCopyButton(textoDesencriptado);
}


// Boton Copiar
function toggleCopyButton(text) {
    const copyButton = document.getElementById('botonCopiar');
    if (text) {
        copyButton.style.display = 'inline-block';
    } else {
        copyButton.style.display = 'none';
    }
}

function copyToClipboard() {
    const textoEncriptado = document.getElementById('textoEncriptado');

    textoEncriptado.select();
    textoEncriptado.setSelectionRange(0, 99999); 
  
    document.execCommand('copy');
    
    alert('Texto copiado al portapapeles');
}

function hideImage() {
    const image = document.getElementById('imagenCat');
    image.style.display = 'none';
}


function togglePlaceholder(result) {
    const placeholderMessage = document.getElementById('placeholderMessage');
    if (result) {
        placeholderMessage.style.display = 'none';
    } else {
        placeholderMessage.style.display = 'block';
    }
}



