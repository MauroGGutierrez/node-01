// import * as hola from "./hello"; // se le puede dar un alias con el as
import hello from "./hello.js";
// import { helloForName as holaNombre } from "./helloForName.js"; //cuando no es un export default va entre corchetes // el as es para agregar un alias
import { helloForName } from "./helloForName.js";
function main() {
  //llamar a la funcion hello
  console.log(hello);
  //para ejecutar necesito ()
  console.log(hello());
  // llamar a la funcion helloForNames enviandole un nombre
  const msg = helloForName("Mauro");
  console.log(msg);
}

main();
