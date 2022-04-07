// // palavra reservada -> var, const ou let
// // identificador -> nomeDaVariável
// // operador de atribuição -> =
// // dado atribuido à variável -> String, number, boolean...

var nome = "Lilit"
let idade = 33
const eMaiorDeIdade = true
let cidadeOndeNasceu = "Rio de Janeiro"


// VAR

var nomeCompleto = 'Lilit Bandeira'
console.log(nomeCompleto)

nomeCompleto = 'Cris Bento' // pode ser redefinido a qualquer momento

console.log(nomeCompleto) // novo valor redefinido na linha anterior

// CONST
console.log('--------------------------------------------------------------')

const sobrenome = 'bandeira'

console.log(sobrenome)

// sobrenome = 'costa' // retorna ERRO pois não pode ser redefinida pois é constante!!

// console.log(sobrenome) // continua o mesmo valor definido ao ser criada

// LET
console.log('--------------------------------------------------------------')

let signo = 'aries'

console.log(signo)

signo = 'touro' // assim como o var, pode ser redefinido

console.log(signo) // novo valor redefinido na linha anterior



// var paisDeNascimento
// paisDeNascimento = 'Brasil'

// console.log(paisDeNascimento)


console.log('--------------------------------------------------------------')
console.log('--------------------------------------------------------------')
console.log('--------------------------------------------------------------')

// Escopo Global X Escopo Restrito


if (true) {
    let escopoBlocoIf = 'Conteúdo da let'
    var escopoGlobal = 'Conteúdo da var'
 
    console.log(escopoGlobal)
    console.log(escopoBlocoIf)
}

console.log(escopoGlobal)
console.log(escopoBlocoIf)