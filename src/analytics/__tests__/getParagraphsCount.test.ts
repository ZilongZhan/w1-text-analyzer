import { getParagraphsCount } from "../index.js";

const test1 = (): void => {
  const text = "Hello world";
  const paragraphsExpected = 1;

  const paragraphsCount = getParagraphsCount(text);

  console.log(`\ninputTested: ${text}`);
  console.log(
    `Expected Result: ${paragraphsExpected} | Result: ${paragraphsCount}`
  );

  if (paragraphsCount === paragraphsExpected) {
    console.log("Test OK ✅");
  } else {
    console.log("Test failed ❌");
  }
};

const test2 = (): void => {
  const text = "Hello\n\nworld";
  const expectedParagraphs = 2;

  const paragraphs = getParagraphsCount(text);

  console.log(`\ninputTested: ${text}`);
  console.log(`Expected Result: ${expectedParagraphs} | Result: ${paragraphs}`);

  if (paragraphs === expectedParagraphs) {
    console.log("Test OK ✅");
  } else {
    console.log("Test failed ❌");
  }
};

const test3 = (): void => {
  const text = "";
  const expectedParagraphs = 0;

  const paragraphs = getParagraphsCount(text);

  console.log(`\ninputTested: ${text}`);
  console.log(`Expected Result: ${expectedParagraphs} | Result: ${paragraphs}`);

  if (paragraphs === expectedParagraphs) {
    console.log("Test OK ✅");
  } else {
    console.log("Test failed ❌");
  }
};

const test4 = (): void => {
  const text = " ";
  const expectedParagraphs = 0;

  const paragraphs = getParagraphsCount(text);

  console.log(`\ninputTested: ${text}`);
  console.log(`Expected Result: ${expectedParagraphs} | Result: ${paragraphs}`);

  if (paragraphs === expectedParagraphs) {
    console.log("Test OK ✅");
  } else {
    console.log("Test failed ❌");
  }
};

const test5 = (): void => {
  const text = "\n\n";
  const expectedParagraphs = 0;

  const paragraphs = getParagraphsCount(text);

  console.log(`\ninputTested: ${text}`);
  console.log(`Expected Result: ${expectedParagraphs} | Result: ${paragraphs}`);

  if (paragraphs === expectedParagraphs) {
    console.log("Test OK ✅");
  } else {
    console.log("Test failed ❌");
  }
};

const test6 = (): void => {
  const text = "\n";
  const expectedParagraphs = 0;

  const paragraphs = getParagraphsCount(text);

  console.log(`\ninputTested: ${text}`);
  console.log(`Expected Result: ${expectedParagraphs} | Result: ${paragraphs}`);

  if (paragraphs === expectedParagraphs) {
    console.log("Test OK ✅");
  } else {
    console.log("Test failed ❌");
  }
};

export const getParagraphsCountTest = (): void => {
  test1();
  test2();
  test3();
  test4();
  test5();
};
