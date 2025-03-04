export const getParagraphsTotal = (text: string): number => {
  const trimmedText = text
    .replaceAll(" ", "")
    .split("\n\n")
    .filter((paragraph) => paragraph !== "" && paragraph !== "\n");

  return trimmedText.length;
};

export const getWordsTotal = (text: string): number => {
  const trimmedText = text
    .replaceAll("\n", " ")
    .split(" ")
    .filter((word) => word !== "");

  return trimmedText.length;
};

export const getCharactersTotal = (text: string): number => {
  const trimmedText = text
    .replaceAll("\n", "")
    .split("")
    .filter((character) => character !== " ");

  return trimmedText.length;
};

export const getShortWordsTotal = (text: string): number => {
  const trimmedText = text
    .replaceAll("\n", " ")
    .split(" ")
    .filter((word) => word !== "" && word.length <= 4);

  return trimmedText.length;
};
