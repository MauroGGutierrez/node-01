import { clubes, IClub } from "../create"

export interface IResponse {
  msg: string,
  status: boolean,
}

const deleteClub = (id: number): IResponse => {
  //para eliminar necesito saber 
  //la posicion
  //splice a esa pisicion
  const pos = clubes.findIndex((club: IClub) => club.id === id)
  if (pos === -1) {
    return {
      msg: 'Club invalido',
      status: false,
    }
  } else {
    clubes.splice(pos, 1)
    return {
      msg :'Club eliminado correctamente',
      status : true,
    } 
  }
}

export default deleteClub;