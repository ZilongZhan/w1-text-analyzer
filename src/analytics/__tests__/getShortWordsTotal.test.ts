import { getShortWordsTotal } from "../index.js";

const test1 = (): void => {
  const text = "Good";
  const expectedShortWordsTotal = 1;

  const shortWordsTotal = getShortWordsTotal(text);

  console.log(`\n${getShortWordsTotal.name}()`);

  console.log(`Test 1: "${text}"`);
  console.log(
    `Expected Result: ${expectedShortWordsTotal} | Result: ${shortWordsTotal}`
  );

  if (expectedShortWordsTotal === shortWordsTotal) {
    console.log("Test OK ✅");
  } else {
    console.log("Test failed ❌");
  }
};

const test2 = (): void => {
  const text = "Good morning";
  const expectedShortWordsTotal = 1;

  const shortWordsTotal = getShortWordsTotal(text);

  console.log(`\n${getShortWordsTotal.name}()`);

  console.log(`Test 2: "${text}"`);
  console.log(
    `Expected Result: ${expectedShortWordsTotal} | Result: ${shortWordsTotal}`
  );

  if (expectedShortWordsTotal === shortWordsTotal) {
    console.log("Test OK ✅");
  } else {
    console.log("Test failed ❌");
  }
};

const test3 = (): void => {
  const text = "";
  const expectedShortWordsTotal = 0;

  const shortWordsTotal = getShortWordsTotal(text);

  console.log(`\n${getShortWordsTotal.name}()`);

  console.log(`Test 3: "${text}"`);
  console.log(
    `Expected Result: ${expectedShortWordsTotal} | Result: ${shortWordsTotal}`
  );

  if (expectedShortWordsTotal === shortWordsTotal) {
    console.log("Test OK ✅");
  } else {
    console.log("Test failed ❌");
  }
};

export const getShortWordsTotalTest = (): void => {
  test1();
  test2();
  test3();
};
