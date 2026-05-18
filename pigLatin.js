const userInput = process.argv[2];

if (!userInput || process.argv.length > 3) {
  console.log("Please provide a phrase as an argument!");
  process.exit(1);
}

const vowels = ["a", "e", "i", "o", "u"];

const preserveCase = (word, translated) => {
  const isAllUpperCase = word === word.toUpperCase();
  const isFirstUpperCase = word[0] === word[0].toUpperCase();
  if (isAllUpperCase) {
    return translated.toUpperCase();
  } else if (isFirstUpperCase) {
    return translated[0].toUpperCase() + translated.slice(1).toLowerCase();
  } else {
    return translated.toLowerCase();
  }
};

const result = userInput
  .split(" ")
  .map((word) => {
    if (vowels.includes(word[0].toLowerCase())) {
      return word + "way";
    } else if (word.length > 1 && !vowels.includes(word[0].toLowerCase()) && !vowels.includes(word[1].toLowerCase())) {
      const translated = word.slice(2) + word.slice(0, 2) + "ay";
      return preserveCase(word, translated);
    } else {
      const translated = word.slice(1) + word[0] + "ay";
      return preserveCase(word, translated);
    }
  })
  .join(" ");

console.log(`Output: ${result}`);
