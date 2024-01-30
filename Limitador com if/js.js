function validar() {
    let numero = document.getElementById('nmr')
    let nmr = Number(numero.value)
    let res = document.getElementById('resposta')

    if (nmr < 1 || nmr > 10) {
        res.innerHTML = '<p><strong>Inválido</strong>, digite dentro dos parâmetros pedidos.</p>'
    } else {
        res.innerHTML = '<p>Nota <strong>válida</strong>.</p>'
    }
}