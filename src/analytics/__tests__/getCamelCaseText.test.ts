import { getCamelCaseText } from "../index.js";

const test1 = (): void => {
  const text = "Hello World";
  const expectedText = "helloWorld";

  const camelCaseText = getCamelCaseText(text);

  console.log(`\n${getCamelCaseText.name}()`);

  console.log(`Test 1: "${text}"`);
  console.log(
    `Expected Result: "${expectedText}" | Result: "${camelCaseText}"`
  );

  if (expectedText === camelCaseText) {
    console.log("Test OK ✅");
  } else {
    console.log("Test failed ❌");
  }
};

const test2 = (): void => {
  const text = "Hello";
  const expectedText = "hello";

  const camelCaseText = getCamelCaseText(text);

  console.log(`\n${getCamelCaseText.name}()`);

  console.log(`Test 2: "${text}"`);
  console.log(
    `Expected Result: "${expectedText}" | Result: "${camelCaseText}"`
  );

  if (expectedText === camelCaseText) {
    console.log("Test OK ✅");
  } else {
    console.log("Test failed ❌");
  }
};

const test3 = (): void => {
  const text = " ";
  const expectedText = "";

  const camelCaseText = getCamelCaseText(text);

  console.log(`\n${getCamelCaseText.name}()`);

  console.log(`Test 3: "${text}"`);
  console.log(
    `Expected Result: "${expectedText}" | Result: "${camelCaseText}"`
  );

  if (expectedText === camelCaseText) {
    console.log("Test OK ✅");
  } else {
    console.log("Test failed ❌");
  }
};

export const getCamelCaseTextTest = (): void => {
  test1();
  test2();
  test3();
};
