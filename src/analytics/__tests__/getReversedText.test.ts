import { getReversedText } from "../index.js";

const test1 = (): void => {
  const text = "Hello world";
  const expectedText = "olleH dlrow";

  const reversedText = getReversedText(text);

  console.log(`\n${getReversedText.name}()`);

  console.log(`Test 1: "${text}"`);
  console.log(`Expected Result: "${expectedText}" | Result: "${reversedText}"`);

  if (expectedText === reversedText) {
    console.log("Test OK ✅");
  } else {
    console.log("Test failed ❌");
  }
};

const test2 = (): void => {
  const text = "Hello\nworld";
  const expectedText = "olleH\ndlrow";

  const reversedText = getReversedText(text);

  console.log(`\n${getReversedText.name}()`);

  console.log(`Test 2: "${text}"`);
  console.log(`Expected Result: "${expectedText}" | Result: "${reversedText}"`);

  if (expectedText === reversedText) {
    console.log("Test OK ✅");
  } else {
    console.log("Test failed ❌");
  }
};

const test3 = (): void => {
  const text = "Hello\n\nworld";
  const expectedText = "olleH\n\ndlrow";

  const reversedText = getReversedText(text);

  console.log(`\n${getReversedText.name}()`);

  console.log(`Test 3: "${text}"`);
  console.log(`Expected Result: "${expectedText}" | Result: "${reversedText}"`);

  if (expectedText === reversedText) {
    console.log("Test OK ✅");
  } else {
    console.log("Test failed ❌");
  }
};

const test4 = (): void => {
  const text = " ";
  const expectedText = "";

  const reversedText = getReversedText(text);

  console.log(`\n${getReversedText.name}()`);

  console.log(`Test 3: "${text}"`);
  console.log(`Expected Result: "${expectedText}" | Result: "${reversedText}"`);

  if (expectedText === reversedText) {
    console.log("Test OK ✅");
  } else {
    console.log("Test failed ❌");
  }
};

export const getReversedTextTest = (): void => {
  test1();
  test2();
  test3();
  test4();
};
