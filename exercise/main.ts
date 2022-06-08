import createClub from "./create";
import deleteClub from "./delete";
import {findAll, findOne, findByText} from "./search";
import update from "./update";

const main = (): any => {
  const msg = createClub(3, 'RiverPlate');
  createClub(10, 'boca jr')
  console.log (msg)
  //devolviendo resultados de findByText
  const resByText = findByText('riv')
  console.log(resByText)
  //devolviendo resultados del findOne
  const resOne = findOne(10);
  console.log(resOne)
  // metodo delete 
  const resDelete = deleteClub(10);
  console.log(resDelete)
  // metodo update
  const updateRes = update(3, 'RiverPLate sigue siendo el mas grande')
  console.log(updateRes)
  // devolviendo resultados del findAll
  const res = findAll();
  console.log(res) 
}

main();