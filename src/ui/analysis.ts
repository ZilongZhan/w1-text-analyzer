import {
  getCharactersTotal,
  getParagraphsTotal,
  getShortWordsTotal,
  getWordsList,
  getWordsTotal,
  getWordFrequency,
  getReversedText,
  getCensoredText,
  getCamelCaseText,
  getFilteredWords,
} from "../analytics/index.js";

const totalsContainer = document.querySelector(".analysis__item.totals");
const shortWordsContainer = document.querySelector(".analysis__item.short");
const frequenciesContainer = document.querySelector(
  ".analysis__item.frequencies .frequencies-list"
);
const reversedTextContainer = document.querySelector(
  ".analysis__item.reversed-text"
);
const forbiddenContainer = document.querySelector(".analysis__item.forbidden");
const camelCaseContainer = document.querySelector(".analysis__item.camel-case");

if (
  !totalsContainer ||
  !shortWordsContainer ||
  !frequenciesContainer ||
  !reversedTextContainer ||
  !forbiddenContainer ||
  !camelCaseContainer
) {
  throw new Error("Missing elements");
}

const renderParagraphsTotal = (paragraphsTotal: number): void => {
  totalsContainer.querySelector(".paragraphs-count")!.textContent =
    paragraphsTotal.toString();
};

const renderWordsTotal = (wordsTotal: number): void => {
  totalsContainer.querySelector(".words-count")!.textContent =
    wordsTotal.toString();
};

const renderCharactersTotal = (charactersTotal: number): void => {
  totalsContainer.querySelector(".characters-count")!.textContent =
    charactersTotal.toString();
};

const renderShortWordsTotal = (shortWordsTotal: number): void => {
  document.querySelector(".short-words-count")!.textContent =
    shortWordsTotal.toString();
};

const renderShortWordsList = (shortWords: string): void => {
  shortWordsContainer.querySelector(".short-words")!.textContent = shortWords;
};

const renderForbiddenWords = (forbiddenWords: string): void => {
  forbiddenContainer.querySelector(".censured-text")!.textContent =
    forbiddenWords;
};

const renderReversedText = (reversedText: string): void => {
  reversedTextContainer.querySelector(".reversed-text-list")!.textContent =
    reversedText;
};

const renderCamelCase = (camelCaseText: string): void => {
  camelCaseContainer.querySelector(".camel-case-text")!.textContent =
    camelCaseText;
};

const listenForbiddenWordsChanges = (text: string): void => {
  forbiddenContainer
    .querySelector("input")!
    .addEventListener("input", (event) => {
      const forbiddenWords = (event.target as HTMLInputElement).value.split(
        /,\s*/
      );

      renderForbiddenWords(getCensoredText(text, forbiddenWords));
    });
};

const listenFrequenciesChanges = (text: string): void => {
  frequenciesContainer
    .querySelectorAll("input")
    .forEach((frequencyInput, index) => {
      frequencyInput.addEventListener("input", (event) => {
        const word = (event.target as HTMLInputElement).value;

        const frequency = getWordFrequency(text, word);

        frequenciesContainer.querySelector(
          `.word-${index + 1}-frequency`
        )!.textContent = frequency.toString();
      });
    });
};

export const analyzeText = (text: string): void => {
  listenFrequenciesChanges(text);
  listenForbiddenWordsChanges(text);

  renderParagraphsTotal(getParagraphsTotal(text));
  renderWordsTotal(getWordsTotal(text));
  renderCharactersTotal(getCharactersTotal(text));
  renderShortWordsTotal(getShortWordsTotal(text));
  renderShortWordsList(getWordsList(getFilteredWords(text)));
  renderReversedText(getReversedText(text));
  renderCamelCase(getCamelCaseText(text));
};
