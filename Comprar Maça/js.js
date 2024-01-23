function comprar() {
    let quantidade = document.getElementById('quantidade')
    let qt = Number(quantidade.value)
    let res = document.getElementById('resposta')

    if (qt <= 12) {
        let total = qt * 0.30
        tt = total.toFixed(2)
        res.innerHTML = `Sua compra deu R$ ${tt}`
    } else {
        let total = qt * 0.20
        tt = total.toFixed(2)
        res.innerHTML = `Sua compra deu R$${tt}`
    }
}