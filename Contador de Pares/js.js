function validar() {
    let numero = document.getElementById('numero').value;
    let nmr = Number(numero);
    let resposta = document.getElementById('resposta');
    resposta.innerHTML = '';

    for (var contador = 0; contador <= nmr; contador++) {
        if (contador % 2 == 0) {
            let span = document.createElement('span');
            span.textContent = `${contador} - `;
            span.style.fontWeight = 'bold';
            resposta.appendChild(span);
        } else {
            resposta.innerHTML += `${contador} - `;
        }
    }
}