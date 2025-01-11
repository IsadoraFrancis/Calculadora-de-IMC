function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value); 
    const altura = parseFloat(document.getElementById('altura').value);
    const resultadoDiv = document.getElementById('resultado');

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultadoDiv.textContent = "Por favor, insira valores válidos para peso e altura.";
        resultadoDiv.style.color = "red";
        return;
    }

    const imc = peso / (altura * altura);

    let classificacao = "";
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 24.9) {
        classificacao = "Peso normal";
    } else if (imc < 29.9) {
        classificacao = "Sobrepeso";
    } else if (imc < 34.9) {
        classificacao = "Obesidade Grau 1";
    } else if (imc < 39.9) {
        classificacao = "Obesidade Grau 2";
    } else {
        classificacao = "Obesidade Grau 3";
    }

    resultadoDiv.textContent = `Seu IMC é ${imc.toFixed(2)}. Classificação: ${classificacao}.`;
    resultadoDiv.style.color = "#333";
}
