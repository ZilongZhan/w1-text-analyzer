import { getCharacters, getParagraphs, getWords } from "./utilities/index.js";

export const getParagraphsTotal = (text: string): number => {
  const paragraphs = getParagraphs(text);

  return paragraphs.length;
};

export const getWordsTotal = (text: string): number => {
  const words = getWords(text);

  return words.length;
};

export const getCharactersTotal = (text: string): number => {
  const characters = getCharacters(text);

  return characters.length;
};

export const getShortWordsTotal = (text: string, maxWordLength = 4): number => {
  const shortWords = getFilteredWords(text, maxWordLength);

  return shortWords.length;
};

export const getWordsList = (words: string[]): string => {
  const wordsList = getWords(words.join(" ")).join(", ");

  return wordsList;
};

export const getWordFrequency = (text: string, word: string): number => {
  if (word === "") {
    return 0;
  }

  const words = getWords(text);

  const matchingWords = words.filter((currentWord) =>
    currentWord.toLowerCase().includes(word.toLowerCase())
  );

  return matchingWords.length;
};

export const getReversedText = (text: string): string => {
  const splitTexts = text.split("\n");
  const reversedText = splitTexts
    .map((text) =>
      text
        .split(" ")
        .map((word) => word.split("").reverse().join(""))
        .join(" ")
    )
    .join("\n");

  const trimmedReversedText = reversedText
    .split(" ")
    .filter((word) => word !== "")
    .join(" ");

  return trimmedReversedText;
};

export const getCensoredText = (
  text: string,
  prohibitedWords: string[]
): string => {
  const words = getWords(text);

  const censoredWords = words.map((word) => {
    const isProhibitedWord = prohibitedWords.some((prohibitedWord) =>
      prohibitedWord.toLowerCase().includes(word.toLowerCase())
    );

    return isProhibitedWord ? word.replace(word, "*") : word;
  });

  return censoredWords.join(" ");
};

export const getCamelCaseText = (text: string): string => {
  const words = getWords(text);

  if (words.join("") === "") {
    return "";
  }

  const firstWord = words.shift()!.toLowerCase();
  const remainingWords = words
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join("");

  const camelCaseText = firstWord + remainingWords;

  return camelCaseText;
};

export const getFilteredWords = (text: string, maxWordLength = 4): string[] => {
  const filteredWords = getWords(text).filter(
    (word) => word.length <= maxWordLength
  );

  return filteredWords;
};
