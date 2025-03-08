const filters = document.querySelectorAll(".filter");

filters.forEach((filter) => {
  const thisFilter = filter as HTMLInputElement;
  const analysisItemClass = thisFilter.classList[0];

  thisFilter.addEventListener("change", () => {
    if (thisFilter.checked) {
      document
        .querySelector(`.analysis__item.${analysisItemClass}`)
        ?.classList.add("filtered");
    } else {
      document
        .querySelector(`.analysis__item.${analysisItemClass}`)
        ?.classList.remove("filtered");
    }
  });
});
