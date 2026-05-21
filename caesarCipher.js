const phrase = process.argv[2];
const shift = parseInt(process.argv[3]);
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

if (!phrase || isNaN(shift) || process.argv.length > 4) {
  console.log("Please provide a phrase and a shift number!");
  process.exit(1);
}
const shiftLetter = (char, shift) => {
  const isUpperCase = char === char.toUpperCase();
  const lowerChar = char.toLowerCase();
  const currentIndex = alphabet.indexOf(lowerChar);

  if (currentIndex === -1) return char;

  let newIndex = (currentIndex + shift) % 26;
  if (newIndex < 0) newIndex += 26;

  const newLetter = alphabet[newIndex];
  return isUpperCase ? newLetter.toUpperCase() : newLetter;
};

const encrypted = phrase
  .split("")
  .map((char) => shiftLetter(char, shift))
  .join("");

console.log(encrypted);
