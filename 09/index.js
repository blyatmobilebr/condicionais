const nota = 8.5;


function conceito(nota) {
    if (nota >= 9 && nota <= 10) return "O aluno obteve conceito A";
    else if (nota >= 8 && nota <= 8.9) return "O aluno obteve conceito B";
    else if (nota >= 6 && nota <= 7.9) return "O aluno obteve conceito C";
    else if (nota >= 4 && nota <= 5.9) return "O aluno obteve conceito D";
    else if (nota >= 0 && nota <= 4) { return "O aluno obteve conceito E"; }
    else { return "Insira um número entre 0 e 10"; }
}


console.log(conceito(11));