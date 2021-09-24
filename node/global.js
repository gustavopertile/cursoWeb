// console.log(global)
global.MinhaApp = Object.freeze({                     // fica num escopo global, MUITO CUIDADO!
    saudacao() {
        return 'Estou em todos os lugares!'
    },
    nome: 'Sistema Legal'
})