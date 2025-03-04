import { getWordsTotal } from "../index.js";

const test1 = (): void => {
  const text = "Hello world";
  const wordsExpected = 2;

  const wordsTotal = getWordsTotal(text);

  console.log(`\ninputTested: ${text}`);
  console.log(`Expected Result: ${wordsExpected} | Result: ${wordsTotal}`);

  if (wordsTotal === wordsExpected) {
    console.log("Test OK ✅");
  } else {
    console.log("Test failed ❌");
  }
};

const test2 = (): void => {
  const text = "Hello\nworld";
  const wordsExpected = 2;

  const wordsCount = getWordsTotal(text);

  console.log(`\ninputTested: ${text}`);
  console.log(`Expected Result: ${wordsExpected} | Result: ${wordsCount}`);

  if (wordsCount === wordsExpected) {
    console.log("Test OK ✅");
  } else {
    console.log("Test failed ❌");
  }
};

const test3 = (): void => {
  const text = "";
  const wordsExpected = 0;

  const wordsCount = getWordsTotal(text);

  console.log(`\ninputTested: ${text}`);
  console.log(`Expected Result: ${wordsExpected} | Result: ${wordsCount}`);

  if (wordsCount === wordsExpected) {
    console.log("Test OK ✅");
  } else {
    console.log("Test failed ❌");
  }
};

const test4 = (): void => {
  const text = "\n";
  const wordsExpected = 0;

  const wordsCount = getWordsTotal(text);

  console.log(`\ninputTested: ${text}`);
  console.log(`Expected Result: ${wordsExpected} | Result: ${wordsCount}`);

  if (wordsCount === wordsExpected) {
    console.log("Test OK ✅");
  } else {
    console.log("Test failed ❌");
  }
};

const test5 = (): void => {
  const text = "Hello\n\nWorld";
  const wordsExpected = 2;

  const wordsCount = getWordsTotal(text);

  console.log(`\ninputTested: ${text}`);
  console.log(`Expected Result: ${wordsExpected} | Result: ${wordsCount}`);

  if (wordsCount === wordsExpected) {
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
  test5();
};
