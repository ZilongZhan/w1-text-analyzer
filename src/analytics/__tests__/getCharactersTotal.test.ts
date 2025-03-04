import { getCharactersTotal } from "../index.js";
import { logTestResult } from "./logTestResult.js";

const test1 = (): void => {
  const text = "Hello";
  const expectedCharactersTotal = 5;

  logTestResult(1, getCharactersTotal, text, expectedCharactersTotal);
};

const test2 = (): void => {
  const text = "Hello World";
  const expectedCharactersTotal = 10;

  logTestResult(2, getCharactersTotal, text, expectedCharactersTotal);
};

const test3 = (): void => {
  const text = "Hello\nWorld";
  const expectedCharactersTotal = 10;

  logTestResult(3, getCharactersTotal, text, expectedCharactersTotal);
};

const test4 = (): void => {
  const text = "";
  const expectedCharactersTotal = 0;

  logTestResult(4, getCharactersTotal, text, expectedCharactersTotal);
};

export const getCharactersTotalTest = (): void => {
  test1();
  test2();
  test3();
  test4();
};
