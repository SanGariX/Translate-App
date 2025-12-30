import type { stringObjectData } from "./types.ts";
const textAreaTransformFromString = (data: string): stringObjectData[] => {
  const resultFn: stringObjectData[] = [];
  const regex1 = /[-]/;
  const regex2 = /[–]/;
  const regex3 = /[—]/;
  const regexTranscription = /\[(.*?)\]/;
  data
    .trim()
    .replace(/^\s+|\s+$/g, "")
    .split(",")
    .forEach((item) => {
      const test1 = regex1.test(item);
      const test2 = regex2.test(item);
      const test3 = regex3.test(item);
      const finallyTest = test1
        ? regex1
        : test2
        ? regex2
        : test3
        ? regex3
        : false;
      if (!finallyTest) return;

      const itemForResult = item.replace(regexTranscription, "");
      const dataForEach = itemForResult.split(finallyTest);

      const match = item.match(regexTranscription);
      if (match && match[1].trim()) {
        dataForEach.push(match[1]);
        resultFn.push({
          translate: dataForEach[0].trim(),
          transpated: dataForEach[1].trim(),
          transcription: dataForEach[2].trim(),
          finished: false,
        });
        return;
      }
      resultFn.push({
        translate: dataForEach[0].trim(),
        transpated: dataForEach[1].trim(),
        finished: false,
      });
    });

  return resultFn;
};
export default textAreaTransformFromString;
