function validar() {
    let alt = document.getElementById('altura')
    let altura = Number(alt.value)
    let ps = document.getElementById('peso')
    let peso = Number(ps.value)
    let res = document.getElementById('resposta')

    if (altura > 2.6 ) {
        window.alert('Digite um valor válido.')
    } else {
        let imc = (peso / (altura * altura))
        pesoIdeal = imc.toFixed(2)
        res.innerHTML = `<p>Seu IMC é <strong>${pesoIdeal}</strong></p>`
        if (pesoIdeal < 18.5) {
            res.innerHTML += `<p>Sua classificação: <strong>Magreza</strong></p>`
        } else if (pesoIdeal >= 18.5 && pesoIdeal < 24.99){
            res.innerHTML += `<p>Sua classificação: <strong>Normal</strong></p>`
        } else if (pesoIdeal >= 25.0 && pesoIdeal < 29.99){
            res.innerHTML += `<p>Sua classificação: <strong>Sobrepeso</strong></p>`
        } else if (pesoIdeal >= 30 && pesoIdeal < 39.99){
            res.innerHTML += `<p>Sua classificação: <strong>Obesidade</strong></p>`
        } else if (pesoIdeal >= 40){
            res.innerHTML = `<p>Sua classificação: <strong>Obesidade grave</strong></p>`
        }
        
    }
}