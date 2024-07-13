document.getElementById('botaoAdicionar').addEventListener('click', function() {
    var texto = document.getElementById('texto').value;
    if (texto) {
        var novoElemento = document.createElement('p');
        novoElemento.textContent = texto;
        document.getElementById('containerElementos').appendChild(novoElemento);
        document.getElementById('texto').value = ''; 
    }
});
