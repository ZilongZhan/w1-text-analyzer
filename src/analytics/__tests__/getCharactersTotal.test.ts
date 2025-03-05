import { getCharactersTotal } from "../index.js";

const test1 = (): void => {
  const text = "Hello";
  const expectedCharactersTotal = 5;

  const charactersTotal = getCharactersTotal(text);

  console.log(`\n${getCharactersTotal.name}()`);

  console.log(`Test 1: "${text}"`);
  console.log(
    `Expected Result: ${expectedCharactersTotal} | Result: ${charactersTotal}`
  );

  if (expectedCharactersTotal === charactersTotal) {
    console.log("Test OK ✅");
  } else {
    console.log("Test failed ❌");
  }
};

const test2 = (): void => {
  const text = "Hello World";
  const expectedCharactersTotal = 10;

  const charactersTotal = getCharactersTotal(text);

  console.log(`\n${getCharactersTotal.name}()`);

  console.log(`Test 2: "${text}"`);
  console.log(
    `Expected Result: ${expectedCharactersTotal} | Result: ${charactersTotal}`
  );

  if (expectedCharactersTotal === charactersTotal) {
    console.log("Test OK ✅");
  } else {
    console.log("Test failed ❌");
  }
};

const test3 = (): void => {
  const text = "Hello\nWorld";
  const expectedCharactersTotal = 10;

  const charactersTotal = getCharactersTotal(text);

  console.log(`\n${getCharactersTotal.name}()`);

  console.log(`Test 3: "${text}"`);
  console.log(
    `Expected Result: ${expectedCharactersTotal} | Result: ${charactersTotal}`
  );

  if (expectedCharactersTotal === charactersTotal) {
    console.log("Test OK ✅");
  } else {
    console.log("Test failed ❌");
  }
};

const test4 = (): void => {
  const text = "";
  const expectedCharactersTotal = 0;

  const charactersTotal = getCharactersTotal(text);

  console.log(`\n${getCharactersTotal.name}()`);

  console.log(`Test 4: "${text}"`);
  console.log(
    `Expected Result: ${expectedCharactersTotal} | Result: ${charactersTotal}`
  );

  if (expectedCharactersTotal === charactersTotal) {
    console.log("Test OK ✅");
  } else {
    console.log("Test failed ❌");
  }
};

export const getCharactersTotalTest = (): void => {
  test1();
  test2();
  test3();
  test4();
};
