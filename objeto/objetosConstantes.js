// pessoa -> 123 -> {...}
const pessoa = {nome : 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = {nome : 'Ana'}

Object.freeze(pessoa) // não consegue mexer mais no objeto

pessoa.nome = 'Maria'
pessoa.endereco = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome : 'João'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)