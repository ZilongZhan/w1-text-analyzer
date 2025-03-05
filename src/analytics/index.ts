export const getParagraphsTotal = (text: string): number => {
  const paragraphs = text
    .replaceAll(" ", "")
    .split("\n\n")
    .filter((paragraph) => paragraph !== "" && paragraph !== "\n");

  return paragraphs.length;
};

export const getWordsTotal = (text: string): number => {
  const words = text
    .replaceAll("\n", " ")
    .split(" ")
    .filter((word) => word !== "");

  return words.length;
};

export const getCharactersTotal = (text: string): number => {
  const characters = text
    .replaceAll("\n", "")
    .split("")
    .filter((character) => character !== " ");

  return characters.length;
};

export const getShortWordsTotal = (text: string): number => {
  const shortWords = text
    .replaceAll("\n", " ")
    .split(" ")
    .filter((word) => word !== "" && word.length <= 4);

  return shortWords.length;
};

export const getShortWordsList = (words: string[]): string => {
  const wordsList = words
    .join(" ")
    .replaceAll("\n", " ")
    .split(" ")
    .filter((word) => word !== "");

  return wordsList.join(", ");
};

export const getWordFrequency = (text: string, word: string): number => {
  const words = text
    .replaceAll("\n", " ")
    .split(" ")
    .filter((word) => word !== "");

  const matchingWords = words.filter((currentWord) =>
    currentWord.toLowerCase().includes(word.toLowerCase())
  );

  return matchingWords.length;
};
