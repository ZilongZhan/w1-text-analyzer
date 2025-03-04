export const getParagraphCount = (text: string): number => {
  const trimmedText = text.replaceAll(" ", "").split("\n");

  if (trimmedText.every((text) => text === "")) {
    return 0;
  }

  if (trimmedText.some((text) => text === "")) {
    return trimmedText.filter((text) => text != "").length;
  }

  const paragraphs = text.replaceAll(" ", "").split("\n\n");

  return paragraphs.length;
};
