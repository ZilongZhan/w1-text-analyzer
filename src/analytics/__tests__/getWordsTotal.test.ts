import { getWordsTotal } from "../index.js";

const test1 = (): void => {
  const text = "Hello world";
  const expectedWordsTotal = 2;

  const wordsTotal = getWordsTotal(text);

  console.log(`\n${getWordsTotal.name}()`);

  console.log(`Test 1: "${text}"`);
  console.log(`Expected Result: ${expectedWordsTotal} | Result: ${wordsTotal}`);

  if (expectedWordsTotal === wordsTotal) {
    console.log("Test OK ✅");
  } else {
    console.log("Test failed ❌");
  }
};

const test2 = (): void => {
  const text = "Hello\nworld";
  const expectedWordsTotal = 2;

  const wordsTotal = getWordsTotal(text);

  console.log(`\n${getWordsTotal.name}()`);

  console.log(`Test 2: "${text}"`);
  console.log(`Expected Result: ${expectedWordsTotal} | Result: ${wordsTotal}`);

  if (expectedWordsTotal === wordsTotal) {
    console.log("Test OK ✅");
  } else {
    console.log("Test failed ❌");
  }
};

const test3 = (): void => {
  const text = "";
  const expectedWordsTotal = 0;

  const wordsTotal = getWordsTotal(text);

  console.log(`\n${getWordsTotal.name}()`);

  console.log(`Test 3: "${text}"`);
  console.log(`Expected Result: ${expectedWordsTotal} | Result: ${wordsTotal}`);

  if (expectedWordsTotal === wordsTotal) {
    console.log("Test OK ✅");
  } else {
    console.log("Test failed ❌");
  }
};

const test4 = (): void => {
  const text = "\n";
  const expectedWordsTotal = 0;

  const wordsTotal = getWordsTotal(text);

  console.log(`\n${getWordsTotal.name}()`);

  console.log(`Test 4: "${text}"`);
  console.log(`Expected Result: ${expectedWordsTotal} | Result: ${wordsTotal}`);

  if (expectedWordsTotal === wordsTotal) {
    console.log("Test OK ✅");
  } else {
    console.log("Test failed ❌");
  }
};

export const getWordsTotalTest = (): void => {
  test1();
  test2();
  test3();
  test4();
};
