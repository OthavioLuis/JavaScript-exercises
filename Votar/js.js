function validar() {
    let ano = document.getElementById('ano')
    let a = Number(ano.value)
    let resposta = document.getElementById('resposta')

    if (a <= 15 || a >= 65) {
        resposta.innerHTML = 'Não precisa votar.'
    } else if (a >= 16 && a < 18) {
        resposta.innerHTML = 'Seu voto é opcional.'
    } else {
        resposta.innerHTML = 'Seu voto é obrigatório.'
    }
}