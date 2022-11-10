const alturaEmCm = 185;

//seu código aqui
function posicaoNoVolei(alturaEmCm) {
    if (alturaEmCm < 180) return "REPROVADO";
    else if (alturaEmCm >= 180 && alturaEmCm <= 185) return "LÍBERO";
    else if (alturaEmCm >= 186 && alturaEmCm <= 195) return "PONTEIRO";
    else if (alturaEmCm >= 196 && alturaEmCm <= 205) return "OPOSTO";
    else if (alturaEmCm >= 205) return "CENTRAL";
}


console.log(posicaoNoVolei(203));