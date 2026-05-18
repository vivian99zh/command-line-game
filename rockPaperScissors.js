const choices = ["rock", "paper", "scissors"];
const userChoice = process.argv[2]?.toLowerCase();

if (!userChoice || !choices.includes(userChoice) || process.argv.length > 3) {
  console.log(`Please only choose: ${choices.join(", ")}!`);
  process.exit(1);
}

const computerChoice = choices[Math.floor(Math.random() * choices.length)];
const winRules = choices.map((_, i, arr) => `${arr[i]}-${arr[i - 1 < 0 ? arr.length - 1 : i - 1]}`);

let resultMsg = "You lose!";
if (userChoice === computerChoice) {
  resultMsg = "It's a draw!";
} else if (winRules.includes(`${userChoice}-${computerChoice}`)) {
  resultMsg = "You win!";
}

console.log(`You chose ${userChoice}. Computer chose ${computerChoice}. ${resultMsg}`);
