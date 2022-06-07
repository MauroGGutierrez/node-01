// INTERFACES: moldes que representan estructuras de datos 
//CLASE: es un molde para crear objetos
//en la interface recomendacion poner la I mayuscula al principio despues el nombre que querramos

interface IClub {
  id: number;
  name: string;
}

// el extends es para tomar los valores que se repiten de la otras interfaces
interface IResponse extends IClub {
  msg: string;
}

const clubes: IClub[] = []; // importante el array vacio para que no nos de un error

const createClub = (id: number, name: string): IResponse => {
  clubes.push({id, name});
  return {msg: 'club successfuly created', name, id};
}

export default createClub;