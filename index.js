document.querySelector("#valor-binario-1").addEventListener('keydown', (event)=>{
    if (!["0", "1", "Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"].includes(event.key)) {
        event.preventDefault();
      }
})
let $botaoCalcularBinDec = document.querySelector("#botao-calcular-bin-dec")
$botaoCalcularBinDec.addEventListener('click',(event)=>{
  event.preventDefault
  let $decimal1 = document.querySelector("#valor-decimal-1")
  let binario1 = document.querySelector("#valor-binario-1").value

  let peso = 0
  let binario1array = []

  let binario1lista = binario1.split("").map(Number).reverse()
  while (peso < binario1lista.length) {
    let binarioOperacao = binario1lista[peso]* (2**peso)
    binario1array.push(binarioOperacao)
    peso ++
    console.log(`binario1 array ${binario1array}`);
  }

  let numeroDecimalConvertido = binario1array.reduce((somador , numero)=> somador += numero,0)

  $decimal1.value = numeroDecimalConvertido
})

let $botaoCalcularDecBin = document.querySelector("#botao-calcular-dec-bin")
$botaoCalcularDecBin.addEventListener('click',(event)=>{
  event.preventDefault

  let $binario2 = document.querySelector("#valor-binario-2")
  let decimal2 = document.querySelector("#valor-decimal-2").value

  let arrayDeBinarios = []
  let quociente = Math.floor(decimal2 / 2)
  let primeiroResto = decimal2 %2

  arrayDeBinarios.push(primeiroResto)
  
  let resto = 0

  while (quociente > 0) {

    resto = quociente %2

    arrayDeBinarios.push(resto)
    quociente = Math.floor(quociente / 2)

  }
  $binario2.value = arrayDeBinarios.reverse().join("")
})

document.querySelector("#valor-hexadecimal-hex-bin").addEventListener('keydown', (event)=>{
  if (!["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "a", "b", "c", "d", "e", "f", "Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"].includes(event.key)) {
      event.preventDefault();
    }
})

let $botaoCalcularHexBin = document.querySelector("#botao-calcular-hex-bin")
$botaoCalcularHexBin.addEventListener('click', (event)=>{
  event.preventDefault

  let $binarioHexBin = document.querySelector("#valor-binario-hex-bin")
  let $hexadecimalHexBin = document.querySelector("#valor-hexadecimal-hex-bin").value.toUpperCase()

  let hexadecimalTransformado = $hexadecimalHexBin.replaceAll("0","0000").replaceAll("1","0001").replaceAll("2","0010").replaceAll("3","0011").replaceAll("4","0100").replaceAll("5","0101").replaceAll("6","0110").replaceAll("7","0111").replaceAll("8","1000").replaceAll("9","1001").replaceAll("A","1010").replaceAll("B","1011").replaceAll("C","1100").replaceAll("D","1101").replaceAll("E","1110").replaceAll("F","1111")
  
  $binarioHexBin.value = hexadecimalTransformado
})