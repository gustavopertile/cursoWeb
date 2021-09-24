// par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares chave/valor
const cliente = {
    nome : 'Gustavo',
    idade: 19,
    peso: 68,
    endereco: {
        logradouro: 'Avenida Sete',
        numero: 493
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)