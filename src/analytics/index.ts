export const getParagraphsCount = (text: string): number => {
  const trimmedText = text
    .replaceAll(" ", "")
    .split("\n\n")
    .filter((paragraph) => paragraph !== "" && paragraph !== "\n");

  return trimmedText.length;
};
