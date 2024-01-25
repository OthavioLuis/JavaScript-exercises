function validar() {
    let ld1 = document.getElementById('lado1')
    let ld2 = document.getElementById('lado2')
    let ld3 = document.getElementById('lado3')
    let res = document.getElementById('resposta')
    let l1 = Number(ld1.value)
    let l2 = Number(ld2.value)
    let l3 = Number(ld3.value)

    if (l1 == l2 && l1 == l3) {
        res.innerHTML = `<p>O triângulo é <strong>Equilátero</strong></p>`
    } else if (l1 == l2 || l1 == l3 || l2 == l3) {
        res.innerHTML = `<p>O triângulo é <strong>Isóscele</strong></p>`
    } else {
        res.innerHTML = `<p>O triângulo é <strong>Escaleno</strong></p>`
    }
}