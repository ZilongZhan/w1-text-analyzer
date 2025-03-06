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
    .filter((word) => word !== "" && word.length <= 4);

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
  const words = text.split(" ").filter((word) => word !== "");

  const censoredWords = words.map((word) => {
    const isProhibitedWord = prohibitedWords.some((prohibitedWord) =>
      prohibitedWord.toLowerCase().includes(word.toLowerCase())
    );

    return isProhibitedWord ? word.replace(word, "*") : word;
  });

  return censoredWords.join(" ");
};

export const getCamelCaseText = (text: string): string => {
  const words = text
    .replaceAll("\n", " ")
    .split(" ")
    .filter((word) => word !== "");

  if (words.every((word) => word === "")) {
    return "";
  }

  const firstWord = words.shift()!;
  const remainingWords = words.map(
    (word) => word[0].toUpperCase() + word.slice(1)
  );

  const camelCaseText = [firstWord[0].toLowerCase() + firstWord.slice(1)]
    .concat(remainingWords)
    .join("");

  return camelCaseText;
};
