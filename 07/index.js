const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000000; //emCentavos

//seu código aqui
function isencaoDeImpostos(aposentada, portadoraDeDoenca, totalDeRendimentos) {
    if (aposentada === true) return "ISENTA";
    else if (portadoraDeDoenca === true) return "ISENTA";
    else if (totalDeRendimentos <= 285597000) return "VAZA LEAO! JA TA DIFICIL SEM VOCE"
    else { return "PEGA LEAO"; }
}


console.log(isencaoDeImpostos(false, false, 300000000))