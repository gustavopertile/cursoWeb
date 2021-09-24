const escola = "Cod3r"

console.log(escola.charAt(4)) // Mostra o char na posição pedida
console.log(escola.charAt(5))

console.log(escola.charCodeAt(3)) // Valor dentro da tabela Unicode - ASCI

console.log(escola.indexOf('o')) // Mostra a posição do char pedido

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!")

console.log(escola.replace(3, 'e')) // Troca o char na pos 3 pela letra e

console.log(escola.replace(/\d/, 'e')) // Troca o primeiro decimal pela letra e
console.log(escola.replace(/\w/g, 'e')) // Substitui todas as letras e dígitos pela letra e 

console.log('Ana,Maria,Pedro'.split(',')) // Gera um array separando as strings pelo char especial -> ,