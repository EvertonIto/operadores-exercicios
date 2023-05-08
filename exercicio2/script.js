let numero1 = Number(prompt("Digite um número"))
console.log(numero1)

let numero2 = Number(prompt("Digite um número"))
console.log(numero2)

// O primeiro numero é maior que o segundo? true
let pergunta1 = numero1 > numero2
console.log(pergunta1)

// O primeiro numero é igual ao segundo? false
let pergunta2 = numero1 === numero2
console.log(pergunta2)

// O primeiro numero é divisível pelo segundo? true
let pergunta3 = numero1 % numero2
console.log(pergunta3 === 0)

// O segundo numero é divisível pelo primeiro? true
let pergunta4 = numero2 % numero1    
console.log(pergunta4 === 0)