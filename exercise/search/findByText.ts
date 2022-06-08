import { clubes, IClub } from "../create"

export const findByText = (text: string): IClub[]=> {
  const coincindence = clubes.filter((club: IClub) => club.name.toLowerCase().includes(text.toLowerCase()));
  return coincindence;
}

// include quiere decir incluya osea buscame en club el nombre que incluya 'b'
// filter te devuelve un array nuevo , de una posicion cualquiera 
// find te devuelve el primer resultado que coincide con lo q buscamos