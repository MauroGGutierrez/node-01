import { clubes, IClub } from "../create";
import { IResponse } from "../delete";


//findIndex( me permite trabajar con funciones o funciones dentro de otras funciones(callbacks) ej: club.id (me permite trabajar con puntos)) 
//diferente de indexOF (me permite busca una posicion en un string)
const update = (id: number, name: string): IResponse => {
  const pos = clubes.findIndex((club: IClub) => club.id === id);
  if (pos === -1) {
    return {
      msg: 'club invalido',
      status: false,
    }
  } else {
    clubes[pos].name = name;
    return {
      msg: 'Club modificando exitosamente',
      status: true,
    }
  }
}

export default update;