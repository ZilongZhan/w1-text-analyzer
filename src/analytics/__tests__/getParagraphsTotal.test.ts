import { getParagraphsTotal } from "../index.js";
import { logTestResult } from "./logTestResult.js";

const test1 = (): void => {
  const text = "Hello world";
  const expectedParagraphsTotal = 1;

  logTestResult(1, getParagraphsTotal, text, expectedParagraphsTotal);
};

const test2 = (): void => {
  const text = "Hello\n\nworld";
  const expectedParagraphsTotal = 2;

  logTestResult(2, getParagraphsTotal, text, expectedParagraphsTotal);
};

const test3 = (): void => {
  const text = "";
  const expectedParagraphsTotal = 0;

  logTestResult(3, getParagraphsTotal, text, expectedParagraphsTotal);
};

const test4 = (): void => {
  const text = " ";
  const expectedParagraphsTotal = 0;

  logTestResult(4, getParagraphsTotal, text, expectedParagraphsTotal);
};

const test5 = (): void => {
  const text = "\n\n";
  const expectedParagraphsTotal = 0;

  logTestResult(5, getParagraphsTotal, text, expectedParagraphsTotal);
};

const test6 = (): void => {
  const text = "\n";
  const expectedParagraphsTotal = 0;

  logTestResult(6, getParagraphsTotal, text, expectedParagraphsTotal);
};

export const getParagraphsTotalTest = (): void => {
  test1();
  test2();
  test3();
  test4();
  test5();
  test6();
};
