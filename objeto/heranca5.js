console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function() {
    return this.split('').reverse().join('') // inverte a string :D
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function() {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

String.prototype.toString = function () { // NÃO FAZER! não mudar funções já declaradas, muita chance de erro
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse())