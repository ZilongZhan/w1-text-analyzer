import { getFilteredWords } from "../index.js";

const test1 = (): void => {
  const text = "Hello World";
  const maxLength = 5;
  const expectedWords = ["Hello", "World"];

  const words = getFilteredWords(text, maxLength);

  console.log(`\n${getFilteredWords.name}()`);
  console.log(`Test 1: "${text}" | 5`);
  console.log(`Expected Result: "${expectedWords}" | Result: "${words}"`);

  const areArraysEqual = expectedWords.every(
    (expectedWord, index) => expectedWord === words[index]
  );

  if (areArraysEqual) {
    console.log("Test OK ✅");
  } else {
    console.log("Test fails ❌");
  }
};

const test2 = (): void => {
  const text = "Hello World";
  const expectedWords: string[] = [];

  const words = getFilteredWords(text);

  console.log(`\n${getFilteredWords.name}()`);
  console.log(`Test 2: "${text}" | no maxLength`);
  console.log(`Expected Result: "${expectedWords}" | Result: "${words}"`);

  const areArraysEqual = expectedWords.every(
    (expectedWord, index) => expectedWord === words[index]
  );

  if (areArraysEqual) {
    console.log("Test OK ✅");
  } else {
    console.log("Test fails ❌");
  }
};

const test3 = (): void => {
  const text = "Hello World foo";
  const maxLength = 3;
  const expectedWords = ["foo"];

  const words = getFilteredWords(text, maxLength);

  console.log(`\n${getFilteredWords.name}()`);
  console.log(`Test 3: ${text}" | 3`);
  console.log(`Expected Result: "${expectedWords}" | Result: "${words}"`);

  const areArraysEqual = expectedWords.every(
    (expectedWord, index) => expectedWord === words[index]
  );

  if (areArraysEqual) {
    console.log("Test OK ✅");
  } else {
    console.log("Test fails ❌");
  }
};

const test4 = (): void => {
  const text = "";
  const maxLength = 0;
  const expectedWords: string[] = [];

  const words = getFilteredWords(text, maxLength);

  console.log(`\n${getFilteredWords.name}()`);
  console.log(`Test 4: "${text}" | 3`);
  console.log(`Expected Result: "${expectedWords}" | Result: "${words}"`);

  const areArraysEqual = expectedWords.every(
    (expectedWord, index) => expectedWord === words[index]
  );

  if (areArraysEqual) {
    console.log("Test OK ✅");
  } else {
    console.log("Test fails ❌");
  }
};

export const getFilteredWordsTest = (): void => {
  test1();
  test2();
  test3();
  test4();
};
