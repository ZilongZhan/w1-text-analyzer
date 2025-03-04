import { getShortWordsTotal } from "../index.js";
import { logTestResult } from "./logTestResult.js";

const test1 = (): void => {
  const text = "Good";
  const expectedShortWordsTotal = 1;

  logTestResult(1, getShortWordsTotal, text, expectedShortWordsTotal);
};

const test2 = (): void => {
  const text = "Good morning";
  const expectedShortWordsTotal = 1;

  logTestResult(2, getShortWordsTotal, text, expectedShortWordsTotal);
};

const test3 = (): void => {
  const text = "";
  const expectedShortWordsTotal = 0;

  logTestResult(3, getShortWordsTotal, text, expectedShortWordsTotal);
};

export const getShortWordsTotalTest = (): void => {
  test1();
  test2();
  test3();
};
