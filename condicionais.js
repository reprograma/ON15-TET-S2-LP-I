let horario = 11;

//if... else
console.log('--------------------------------------------------------------')

// if (condicao) {
//     //execução no caso de a condição ser atendida - true
// } else if (condicao) {
//      execução no caso de a condição ser atendida - true
// } else {
//     //execução no caso da condição não ser atendida - false
// }

if (horario < 12) {
    console.log('dia')
} else {
    console.log('noite')
}

// operador ternário ou operador condicional
// condicao ? execução no caso de a condição ser atendida : execução no caso da condição não ser atendida
console.log('--------------------------------------------------------------')

horario < 12 ? console.log('dia') : console.log('noite')

// encadeando else if
console.log('--------------------------------------------------------------')

if (horario >= 0 && horario < 6) {
    console.log('madrugada')
} else if (horario >= 6 && horario < 12) {
    console.log('manhã')
} else if (horario >= 12 && horario < 18) {
    console.log('tarde')
} else if (horario >= 18 && horario < 24) {
    console.log('noite')
} else {
    console.log('o horário digitado é inválido')
}

// adicionando aqui um exemplo de switch case que não foi dado na aula, mas visitaremos na revisão no início da aula que vem
// switch/case
console.log('--------------------------------------------------------------')

let regiao = 'centro-oeste'
switch (regiao) {
    case 'nordeste':
        console.log('possui 9 estados');
        break;
    case 'norte':
        console.log('possui 7 estados');
        break;
    case 'centro-oeste':
        console.log('possui 3 estados e DF');
        break;
    case 'sudeste':
        console.log('possui 4 estados');
        break;
    case 'sul':
        console.log('possui 3 estados');
        break;
}

// construindo o mesmo caso do if...else com switch e limitações de uso!
console.log('--------------------------------------------------------------')

switch (horario) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      console.log("madrugada")
      break
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
      console.log("manhã")
      break
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
      console.log("tarde")
      break
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
      console.log("noite")
      break
    default:
      console.log("horário inválido");
  }
