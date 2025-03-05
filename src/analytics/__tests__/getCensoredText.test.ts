import { promiseHooks } from "v8";
import { getCensoredText } from "../index.js";

const test1 = (): void => {
  const text = "Hello World";
  const prohibitedWords = ["Hello", "World"];
  const expectedText = "* *";

  const censoredText = getCensoredText(text, prohibitedWords);

  console.log(`\n${getCensoredText.name}()`);

  console.log(`Test 1: "${text}"`);
  console.log(`Expected Result: "${expectedText}" | Result: "${censoredText}"`);

  if (expectedText === censoredText) {
    console.log("Test OK ✅");
  } else {
    console.log("Test failed ❌");
  }
};

const test2 = (): void => {
  const text = "Hello World";
  const prohibitedWords = ["hello", "world"];
  const expectedText = "* *";

  const censoredText = getCensoredText(text, prohibitedWords);

  console.log(`\n${getCensoredText.name}()`);

  console.log(`Test 2: "${text}"`);
  console.log(`Expected Result: "${expectedText}" | Result: "${censoredText}"`);

  if (expectedText === censoredText) {
    console.log("Test OK ✅");
  } else {
    console.log("Test failed ❌");
  }
};

const test3 = (): void => {
  const text = "Hello World";
  const prohibitedWords: string[] = [];
  const expectedText = "Hello World";

  const censoredText = getCensoredText(text, prohibitedWords);

  console.log(`\n${getCensoredText.name}()`);

  console.log(`Test 3: "${text}"`);
  console.log(`Expected Result: "${expectedText}" | Result: "${censoredText}"`);

  if (expectedText === censoredText) {
    console.log("Test OK ✅");
  } else {
    console.log("Test failed ❌");
  }
};

const test4 = (): void => {
  const text = " ";
  const prohibitedWords = ["Hello", "World"];
  const expectedText = "";

  const censoredText = getCensoredText(text, prohibitedWords);

  console.log(`\n${getCensoredText.name}()`);

  console.log(`Test 4: "${text}"`);
  console.log(`Expected Result: "${expectedText}" | Result: "${censoredText}"`);

  if (expectedText === censoredText) {
    console.log("Test OK ✅");
  } else {
    console.log("Test failed ❌");
  }
};

const test5 = (): void => {
  const text = "Hello World";
  const prohibitedWords = ["Hello", "foo"];
  const expectedText = "* World";

  const censoredText = getCensoredText(text, prohibitedWords);

  console.log(`\n${getCensoredText.name}()`);

  console.log(`Test 5: "${text}"`);
  console.log(`Expected Result: "${expectedText}" | Result: "${censoredText}"`);

  if (expectedText === censoredText) {
    console.log("Test OK ✅");
  } else {
    console.log("Test failed ❌");
  }
};

export const getCensoredTextTest = (): void => {
  test1();
  test2();
  test3();
  test4();
  test5();
};
