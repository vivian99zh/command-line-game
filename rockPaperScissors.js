const choices = ["rock", "paper", "scissors"];
const userChoice = process.argv[2]?.toLowerCase();
const computerChoice = choices[Math.floor(Math.random() * choices.length)];

const getWinRules = (choices) => {
  const rules = [];
  for (let i = 0; i < choices.length; i++) {
    rules.push(`${choices[i]}-${choices[i - 1 < 0 ? choices.length - 1 : i - 1]}`);
  }
  return rules;
};

const winRules = getWinRules(choices);

if (!userChoice || !choices.includes(userChoice) || process.argv.length > 3) {
  console.log(`Please only choose: ${choices.join(", ")}`);
  process.exit(1);
}

let resultMsg = "You lose!";
if (userChoice === computerChoice) {
  resultMsg = "It's a draw!";
} else if (winRules.includes(`${userChoice}-${computerChoice}`)) {
  resultMsg = "You win!";
}

console.log(`You chose ${userChoice}. Computer chose ${computerChoice}. ${resultMsg}`);
