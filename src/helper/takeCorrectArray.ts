import type { stringObjectData } from "./types.ts";

const takeCorrectArray = (
  input: stringObjectData[],
  textArea: stringObjectData[],
  page: number
): stringObjectData => {
  let succes;
  if (input.length) {
    succes = input[page - 1];
  } else {
    succes = textArea[page - 1];
  }
  return succes;
};
export default takeCorrectArray;
