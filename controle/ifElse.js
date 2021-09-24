const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado com ' + nota)
    } else {
        console.log('Reprovado com ' + nota)
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!')  // cuidado!!!