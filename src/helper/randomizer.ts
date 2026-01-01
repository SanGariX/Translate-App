import type { stringObjectData } from "./types.ts";

const randomizer = (array: stringObjectData[]): stringObjectData[] => {
  const suffle = array.sort(() => 0.5 - Math.random());
  return suffle;
};
export default randomizer;
