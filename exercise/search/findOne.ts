import { clubes  } from "../create";

export const findOne = (id: number)=> {
  return clubes.find( (e) => e.id === id)
}