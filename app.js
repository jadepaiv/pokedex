var inputEntrada = document.querySelector('#text-input');
var inputSaida = document.querySelector('#text-output');
var areaConteudoVazio = document.querySelector('.conteudo-resultado-vazio');
var areaConteudoOK = document.querySelector('.conteudo-resultado-ok');

areaConteudoVazio.style.display = 'block'
areaConteudoOK.style.display = 'none'

function botaoCriptografar() {
    const textoEncriptado = criptografar(inputEntrada.value);
    inputSaida.value = textoEncriptado;

    areaConteudoVazio.style.display = 'none'
    areaConteudoOK.style.display = 'block'
}

function criptografar(stringEncriptada) {
    let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"], ["aimes", "ai"]]; // o aimes foi adicionado pois o programa identificava o i do "ai" como um uma nova letra pra encriptar. Ex: se eu colocasse "ola", ao invés de aparecer "oberlai", aparecia "oberlaimes"
    stringEncriptada = stringEncriptada.toLowerCase();

    for (i = 0 ; i < matrizCodigo.length ; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}

function botaoDescriptografar() {
    const textoDescriptado = descriptografar(inputEntrada.value);
    inputSaida.value = textoDescriptado;
    areaConteudoVazio.style.display = 'none'
    areaConteudoOK.style.display = 'block'
}

function descriptografar(stringDescriptada) {
    let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    stringDescriptada = stringDescriptada.toLowerCase();
  
    for (i = 0 ; i < matrizCodigo.length ; i++) {
        if(stringDescriptada.includes(matrizCodigo[i][1])) {
            stringDescriptada = stringDescriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDescriptada;
}

function copiar() {
    inputSaida.select();
    inputSaida.setSelectionRange(0, 99999);
    document.execCommand("copy");
}