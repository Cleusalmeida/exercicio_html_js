const form = document.getElementById('form-teste'); 

form.addEventListener('submit', function(e) {
    let formEValido = false;
    e.preventDefault();

const campoA = parseFloat (document.getElementById('campo-a').value);
const campoB = parseFloat (document.getElementById('campo-b').value);

function validaNumero(campoA, campoB){
    if (campoB >= campoA){ 
        alert('Formulário válido, pois o valor de B é maior que o valor de A');
        return true;
    } else { 
        alert('Formulário inválido, pois o valor de A é maior que o valor de B');
        return false;
    } 
}

formEValido == validaNumero(campoA, campoB);

});

