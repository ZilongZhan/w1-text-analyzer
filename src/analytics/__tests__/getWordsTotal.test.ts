import { getWordsTotal } from "../index.js";
import { logTestResult } from "./logTestResult.js";

const test1 = (): void => {
  const text = "Hello world";
  const expectedWordsTotal = 2;

  logTestResult(1, getWordsTotal, text, expectedWordsTotal);
};

const test2 = (): void => {
  const text = "Hello\nworld";
  const expectedWordsTotal = 2;

  logTestResult(2, getWordsTotal, text, expectedWordsTotal);
};

const test3 = (): void => {
  const text = "";
  const expectedWordsTotal = 0;

  logTestResult(3, getWordsTotal, text, expectedWordsTotal);
};

const test4 = (): void => {
  const text = "\n";
  const expectedWordsTotal = 0;

  logTestResult(4, getWordsTotal, text, expectedWordsTotal);
};

export const getWordsTotalTest = (): void => {
  test1();
  test2();
  test3();
  test4();
};
