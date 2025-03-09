import { getWordsList } from "../index.js";

const test1 = (): void => {
  const words = ["hello", "world"];
  const expectedList = "hello, world";

  const wordsList = getWordsList(words);

  console.log(`\n${getWordsList.name}()`);

  console.log(`Test 1: "${words}"`);
  console.log(`Expected Result: "${expectedList}" | Result: "${wordsList}"`);

  if (expectedList === wordsList) {
    console.log("Test OK ✅");
  } else {
    console.log("Test failed ❌");
  }
};

const test2 = (): void => {
  const words = ["", ""];
  const expectedList = "";

  const wordsList = getWordsList(words);

  console.log(`\n${getWordsList.name}()`);

  console.log(`Test 2: "${words}"`);
  console.log(`Expected Result: "${expectedList}" | Result: "${wordsList}"`);

  if (expectedList === wordsList) {
    console.log("Test OK ✅");
  } else {
    console.log("Test failed ❌");
  }
};

const test3 = (): void => {
  const words = ["\n", "\n"];
  const expectedList = "";

  const wordsList = getWordsList(words);

  console.log(`\n${getWordsList.name}()`);

  console.log(`Test 3: "${words}"`);
  console.log(`Expected Result: "${expectedList}" | Result: "${wordsList}"`);

  if (expectedList === wordsList) {
    console.log("Test OK ✅");
  } else {
    console.log("Test failed ❌");
  }
};

const test4 = (): void => {
  const words = ["Hello"];
  const expectedList = "Hello";

  const wordsList = getWordsList(words);

  console.log(`\n${getWordsList.name}()`);

  console.log(`Test 4: "${words}"`);
  console.log(`Expected Result: "${expectedList}" | Result: "${wordsList}"`);

  if (expectedList === wordsList) {
    console.log("Test OK ✅");
  } else {
    console.log("Test failed ❌");
  }
};

const test5 = () => {
  const words: string[] = [];
  const expectedList = "";

  const wordsList = getWordsList(words);

  console.log(`\n${getWordsList.name}()`);

  console.log(`Test 5: "${words}"`);
  console.log(`Expected Result: "${expectedList}" | Result: "${wordsList}"`);

  if (expectedList === wordsList) {
    console.log("Test OK ✅");
  } else {
    console.log("Test failed ❌");
  }
};

export const getWordsListTest = (): void => {
  test1();
  test2();
  test3();
  test4();
  test5();
};
