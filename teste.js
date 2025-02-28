let array = [1,2,3,4,5,6]
let soma = 0
console.log(array.reduce((somador, numero) => somador += numero,0))
console.log(array.forEach(numero => soma+=numero));
