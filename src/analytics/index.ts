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
    .filter((word) => word !== "" && word !== "\n");

  return trimmedText.length;
};
