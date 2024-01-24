function validar() {
    let valor = document.getElementById('valor')
    let v = Number(valor.value)
    let res = document.getElementById('resposta')

    if (v % 2 == 0) {
        res.innerHTML = `<p>O número ${v} é <strong>Par</strong></p>`
    } else {
        res.innerHTML = `<p>O número ${v} é <strong>Impar</strong></p>`
    }
}