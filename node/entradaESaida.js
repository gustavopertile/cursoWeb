const anonimo = process.argv.indexOf('-a') !== -1
// console.log(anonimo)

if(anonimo) {
    process.stdout.write('Fala Anônimo!\n')
    process.exit()
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', '') // pega o que o usuário digitou e tira o enter do final!
        
        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit()
    })
}