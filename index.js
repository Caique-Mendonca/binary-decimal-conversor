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