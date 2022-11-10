const diaDaSemana = 3;

function dia(diaDaSemana) {
    switch (diaDaSemana) {
        case 1:
            return "Segunda feira";
        
        case 2:
            return "Terça feira";
        
        case 3:
            return "Quarta feira";

        case 4:
            return "Quinta feira";

        case 5:
            return "Sexta feira";

        case 6:
            return "Sábado";

        case 7:
            return "Domingo";

        default:
            return "O dia da semana informado não é válido."
    }

}

console.log(dia(71));