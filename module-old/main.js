const hello = require("./hello");
const hola = require("./helloForName");
function main() {
  //llamar a la funcion hello
  console.log(hello);
  //para ejecutar necesito ()
  console.log(hello());
  // llamar a la funcion helloForNames enviandole un nombre
  const msg = hola("Mauro");
  console.log(msg);
}

main();
