const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // massa quebrou o carro! remove o último elemento do array
console.log(pilotos)

pilotos.push('Verstappen') // adiciona no último elemento do array
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento da lista
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona no primeiro elemento da lista
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1) // massa quebrou :(
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array, cria um array a partir do index colocado
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // vai do index 1 até o index 4 (o 4 não entra)
console.log(algunsPilotos2)