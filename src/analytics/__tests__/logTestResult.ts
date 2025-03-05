export const logTestResult = (
  testNumber: number,
  testFunction: Function,
  testData: string,
  expectedResult: number
): void => {
  const result = testFunction(testData);

  console.log(`\n${testFunction.name}()`);

  console.log(`Test ${testNumber}: "${testData}"`);
  console.log(`Expected Result: ${expectedResult} | Result: ${result}`);

  if (expectedResult === result) {
    console.log("Test OK ✅");
  } else {
    console.log("Test failed ❌");
  }
};
