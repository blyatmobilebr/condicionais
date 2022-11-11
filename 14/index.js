//quantidade de água ingerida em litro.
const quantidadeDeAguaIngerida = 2;



function quantidade(numero) {
    if (numero < 1.5 && numero >= 0) return "Risco Alto - Você está ingerindo pouquissima água, beba mais água!";
    else if (numero >= 1.5 && numero <= 3) return   "Risco Moderado - Você está ingerindo pouca água, beba mais!";
    else if (numero > 3) return "Risco Baixo - Você está ingerindo uma boa quantidade de água, parabéns!";
    else { return "Insira um valor igual ou superior a 0."}
}


console.log(quantidade(6));