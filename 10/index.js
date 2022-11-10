const caractere = "E";


function regex(character) {
    let vogalMinuscula = /[aeiou]/;
    let vogalMaiscula = /[AEIOU]/;
    let numeros = /[0-9]/;
    let consoante = /[bcdfghjklmnpqrstvwxys]/;


    if (vogalMaiscula.test(character) === true) return "Vogal maiúscula"
    else if (vogalMinuscula.test(character) === true) return "Vogal minúscula";
    else if (numeros.test(character) === true) return "Número";
    else if (consoante.test(character) === true) { return "Consoante"}
}


console.log(regex("1"));