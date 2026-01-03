function verificar() {
    var peso = Number(document.getElementById('txtpeso').value)//pegar o que o usuario digitou e transformar a string em numero.
    var altura = Number(document.getElementById('txtalt').value)
    var res = document.getElementById('res')
    if (peso <= 0 || altura <= 0 || Number.isNaN(peso) || Number.isNaN(altura)) {//verifica se o numero digitado é maior que zero
        return window.alert('**[ERRO]** Digite um numero válido')
    }
    const imc = Number(peso / (altura * altura))
    let classificacao = ''
    if (imc < 18.5) {
        classificacao = 'Magreza'
    } else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = 'Peso normal'
    } else if (imc >= 25 && imc <= 29.9) {
        classificacao = 'Pré-obesidade'
    } else if (imc >= 30 && imc <= 34.9) {
        classificacao = 'Obesidade grau 1'
    } else if (imc >= 35 && imc <= 39.9) {
        classificacao = 'Obesidade grau 2'
    } else {
        classificacao = 'Obesidade grau 3'
    }
    const imcFormatado = imc.toFixed(2).replace(".", ",")
    console.log(` O seu IMC é de: ${imcFormatado} e a sua classificação é de: ${classificacao}`)
    res.innerHTML = `De acordo com o seu imc: ${imcFormatado} a sua classificação é de: ${classificacao}`
}