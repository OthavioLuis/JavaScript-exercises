function confirmar() {
    let nm1 = document.getElementById('n1')
    let nm2 = document.getElementById('n2')
    let nm3 = document.getElementById('n3')
    let res = document.getElementById('resposta')
    let n1 = Number(nm1.value)
    let n2 = Number(nm2.value)
    let n3 = Number(nm3.value)

    if (n1 == n2 || n1 == n3 || n2 == n3) {
        res.innerHTML = `Valores <strong>duplicados</strong>, tente números diferentes.`
    } else {
        let maior = n1
        if (n2 > n1) {
            maior = n2
        } if (n3 > maior) {
            maior = n3
        }
        res.innerHTML = `<p>O maior número é <strong>${maior}</strong></p>`
    }
}