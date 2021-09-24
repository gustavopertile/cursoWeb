function Pessoa(nome) {
    this.nome = nome
    this.falar = () => console.log(`Meu nome é ${this.nome}`)
}

const p1 = new Pessoa ('Gustavo')
p1.falar()
console.log(p1.nome)