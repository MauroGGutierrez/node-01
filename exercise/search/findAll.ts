import { clubes, IClub } from "../create"; //va con llaves por que no es un export default

export const findAll = (): IClub[] => {
  return clubes;
}

