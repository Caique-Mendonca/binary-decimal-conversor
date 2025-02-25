document.querySelector("#valor-binario-1").addEventListener('keydown', (event)=>{
    if (!["0", "1", "Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"].includes(event.key)) {
        event.preventDefault(); // Bloqueia a tecla
      }
})