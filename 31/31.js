let showWords = (...args) => {
  const result = args.join(" ");
  document.write(result);
};

showWords("Привіт", "Я", "штучний", "інтелект.", "як", "справи.");
