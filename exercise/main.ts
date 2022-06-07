import createClub from "./create";
import {findAll, findOne} from "./search";

const main = (): any => {
  const msg = createClub(3, 'RiverPlate');
  createClub(10, 'boca jr')
  console.log (msg)
  // devolviendo resultados del findAll
  const res = findAll();
  console.log(res)
  //devolviendo resultados del findOne
  const resOne = findOne(3);
  console.log(resOne)
}

main();