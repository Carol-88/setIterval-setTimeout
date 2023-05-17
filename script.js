// Mostrar un mensaje en la consola cada segundo durante 5 segundos
let segundos = 0;
const intervalo = setInterval(() => {
  segundos++;
  console.log("Mensaje cada segundo: " + segundos);
  if (segundos >= 5) {
    clearInterval(intervalo);
  }
}, 1000);

// Mostrar otro mensaje después de 2 segundos
setTimeout(() => {
  console.log("Mensaje después de 2 segundos");
}, 2000);