import { getWordFrequency } from "../index.js";

const test1 = (): void => {
  const text = "Ho Ho Ho";
  const word = "Ho";
  const expectedWordFrequency = 3;

  const wordFrequency = getWordFrequency(text, word);

  console.log(`\n${getWordFrequency.name}()`);

  console.log(`Test 1: "${text}"`);
  console.log(
    `Expected Result: "${expectedWordFrequency}" | Result: "${wordFrequency}"`
  );

  if (expectedWordFrequency === wordFrequency) {
    console.log("Test OK ✅");
  } else {
    console.log("Test fails ❌");
  }
};

const test2 = (): void => {
  const text = "Ho ho ho";
  const word = "Ho";
  const expectedWordFrequency = 3;

  const wordFrequency = getWordFrequency(text, word);

  console.log(`\n${getWordFrequency.name}()`);

  console.log(`Test 2: "${text}"`);
  console.log(
    `Expected Result: "${expectedWordFrequency}" | Result: "${wordFrequency}"`
  );

  if (expectedWordFrequency === wordFrequency) {
    console.log("Test OK ✅");
  } else {
    console.log("Test fails ❌");
  }
};

const test3 = (): void => {
  const text = "Ho. .Ho. Ho.";
  const word = "Ho";
  const expectedWordFrequency = 3;

  const wordFrequency = getWordFrequency(text, word);

  console.log(`\n${getWordFrequency.name}()`);

  console.log(`Test 2: "${text}"`);
  console.log(
    `Expected Result: "${expectedWordFrequency}" | Result: "${wordFrequency}"`
  );

  if (expectedWordFrequency === wordFrequency) {
    console.log("Test OK ✅");
  } else {
    console.log("Test fails ❌");
  }
};

const test4 = (): void => {
  const text = "Ho\nHo\n\nHo";
  const word = "Ho";
  const expectedWordFrequency = 3;

  const wordFrequency = getWordFrequency(text, word);

  console.log(`\n${getWordFrequency.name}()`);

  console.log(`Test 2: "${text}"`);
  console.log(
    `Expected Result: "${expectedWordFrequency}" | Result: "${wordFrequency}"`
  );

  if (expectedWordFrequency === wordFrequency) {
    console.log("Test OK ✅");
  } else {
    console.log("Test fails ❌");
  }
};

export const getWordFrequencyTest = (): void => {
  test1();
  test2();
  test3();
  test4();
};
