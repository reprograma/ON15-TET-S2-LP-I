// operadores do tipo binário

console.log(1 + 3) // 4
console.log(9 / 3) // 3
console.log(5 % 2)

// operadores do tipo Unitãrio
console.log('--------------------------------------------------------------')

let i = 5
i++
i--
console.log(++i)

console.log(2 ** 3) // 8

// aritméticos
console.log('--------------------------------------------------------------')

console.log(9 - 3)
console.log(1 * 8)
console.log(1 % 8)
console.log(--i)
console.log(2**3)

// atribuição
console.log('--------------------------------------------------------------')

let contador = 3
console.log(contador)
contador += 2
console.log(contador)
contador -= 1
console.log(contador)
contador *= 2
console.log(contador)
contador /= 4
console.log(contador)
contador %= 3
console.log(contador) // no caso de usar 1 ou 2 por exemplo, o resto é 0
contador **= 2
console.log(contador)

// comparação
console.log('--------------------------------------------------------------')

console.log(3 == '3') // true
console.log(3 === '3') // false
// ir no arquivo de dados mostrar diferença entre null e undefined
console.log(2 != 1) // true
console.log(5 > 7) // false
console.log(8 >= 9) // false
console.log(7 <= 3) // false
console.log(1 < 4) // true

// lógicos
console.log('--------------------------------------------------------------')

console.log(3 == '3' && 3 === 3) // true
console.log(3 === '3' && 3 === 3) // false

console.log(3 === '3' || 3 === 3) // true 
console.log(0 == '' || undefined === null) // true
console.log(1 === false || undefined === null)// false

console.log(!true) // false
console.log(!!true) // true