console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null              // não faz nada
console.log(module.exports)

exports = {                 // não faz nada
    nome: 'Teste'
}

console.log(module.exports)

module.exports = { publico: true }
// o principal é o module exports, o único que "manda"
// o this, e o exports, apontam pro module.exports