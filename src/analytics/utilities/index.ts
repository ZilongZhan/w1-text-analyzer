export const getWords = (text: string): string[] => {
  return text
    .replaceAll("\n", " ")
    .split(" ")
    .filter((word) => word !== "");
};

export const getParagraphs = (text: string): string[] => {
  return text
    .replaceAll(" ", "")
    .split("\n\n")
    .filter((paragraph) => paragraph !== "" && paragraph !== "\n");
};

export const getCharacters = (text: string): string[] => {
  return text
    .replaceAll("\n", "")
    .split("")
    .filter((character) => character !== " ");
};
