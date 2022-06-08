import { clubes } from "../create"

export const findByText = (name: string) => {
  const coincindence = clubes.filter((i) => i.name.includes(name));
  return coincindence;
}