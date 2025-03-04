import { getParagraphsTotal } from "../index.js";

const test1 = (): void => {
  const text = "Hello world";
  const paragraphsExpectedTotal = 1;

  const paragraphsTotal = getParagraphsTotal(text);

  console.log(`\nTest 1: ${text}`);
  console.log(
    `Expected Result: ${paragraphsExpectedTotal} | Result: ${paragraphsTotal}`
  );

  if (paragraphsTotal === paragraphsExpectedTotal) {
    console.log("Test OK ✅");
  } else {
    console.log("Test failed ❌");
  }
};

const test2 = (): void => {
  const text = "Hello\n\nworld";
  const expectedParagraphsTotal = 2;

  const paragraphsTotal = getParagraphsTotal(text);

  console.log(`\nTest 2: ${text}`);
  console.log(
    `Expected Result: ${expectedParagraphsTotal} | Result: ${paragraphsTotal}`
  );

  if (paragraphsTotal === expectedParagraphsTotal) {
    console.log("Test OK ✅");
  } else {
    console.log("Test failed ❌");
  }
};

const test3 = (): void => {
  const text = "";
  const expectedParagraphsTotal = 0;

  const paragraphsTotal = getParagraphsTotal(text);

  console.log(`\nTest 3: ${text}`);
  console.log(
    `Expected Result: ${expectedParagraphsTotal} | Result: ${paragraphsTotal}`
  );

  if (paragraphsTotal === expectedParagraphsTotal) {
    console.log("Test OK ✅");
  } else {
    console.log("Test failed ❌");
  }
};

const test4 = (): void => {
  const text = " ";
  const expectedParagraphsTotal = 0;

  const paragraphsTotal = getParagraphsTotal(text);

  console.log(`\nTest 4: ${text}`);
  console.log(
    `Expected Result: ${expectedParagraphsTotal} | Result: ${paragraphsTotal}`
  );

  if (paragraphsTotal === expectedParagraphsTotal) {
    console.log("Test OK ✅");
  } else {
    console.log("Test failed ❌");
  }
};

const test5 = (): void => {
  const text = "\n\n";
  const expectedParagraphsTotal = 0;

  const paragraphsTotal = getParagraphsTotal(text);

  console.log(`\nTest 5: ${text}`);
  console.log(
    `Expected Result: ${expectedParagraphsTotal} | Result: ${paragraphsTotal}`
  );

  if (paragraphsTotal === expectedParagraphsTotal) {
    console.log("Test OK ✅");
  } else {
    console.log("Test failed ❌");
  }
};

const test6 = (): void => {
  const text = "\n";
  const expectedParagraphsTotal = 0;

  const paragraphsTotal = getParagraphsTotal(text);

  console.log(`\nTest 6: ${text}`);
  console.log(
    `Expected Result: ${expectedParagraphsTotal} | Result: ${paragraphsTotal}`
  );

  if (paragraphsTotal === expectedParagraphsTotal) {
    console.log("Test OK ✅");
  } else {
    console.log("Test failed ❌");
  }
};

export const getParagraphsTotalTest = (): void => {
  test1();
  test2();
  test3();
  test4();
  test5();
  test6();
};
