let wallet = 2000;
document.getElementById("wallet").textContent = `Wallet: ₹${wallet}`;

const betForm = document.getElementById("betForm");
const resultMsg = document.getElementById("resultMsg");
const historyList = document.getElementById("historyList");

betForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const amount = parseInt(document.getElementById("amount").value);
  if (amount > wallet) {
    resultMsg.textContent = "❌ Not enough balance in wallet!";
    resultMsg.style.color = "red";
    return;
  }

  const selectedGame = document.getElementById("gameSelector").value;
  let outcome = "";
  let win = false;

  if (selectedGame === "coin") {
    const choice = document.getElementById("betOption").value;
    outcome = Math.random() > 0.5 ? "heads" : "tails";
    document.getElementById("coin").className = `coin flip-${outcome}`;
    setTimeout(() => {
      win = choice === outcome;
      finishBet(selectedGame, amount, outcome, win);
    }, 1000);
    return;
  }

  if (selectedGame === "dice") {
    const userGuess = parseInt(document.getElementById("diceGuess").value);
    outcome = Math.floor(Math.random() * 6) + 1;
    win = userGuess === outcome;
    finishBet(selectedGame, amount, outcome, win);
    return;
  }

  if (selectedGame === "guess") {
    const userGuess = parseInt(document.getElementById("guessNumber").value);
    outcome = Math.floor(Math.random() * 5) + 1;
    win = userGuess === outcome;
    finishBet(selectedGame, amount, outcome, win);
    return;
  }
});

function finishBet(game, amount, outcome, win) {
  let msg = "";
  let reward = win ? amount * 2 : 0;

  if (win) {
    wallet += reward;
    msg = `🎉 You WON ₹${reward}! Outcome: ${outcome}`;
    resultMsg.style.color = "lime";
  } else {
    wallet -= amount;
    msg = `❌ You LOST ₹${amount}. Outcome: ${outcome}`;
    resultMsg.style.color = "red";
  }

  document.getElementById("wallet").textContent = `Wallet: ₹${wallet}`;
  resultMsg.textContent = msg;

  const li = document.createElement("li");
  li.textContent = `${new Date().toLocaleTimeString()} - ${game.toUpperCase()} - ${msg}`;
  historyList.prepend(li);
}

function showLogin() {
  alert("Login system coming soon!");
}

function showSignup() {
  alert("Signup system coming soon!");
}

function changeGame() {
  const game = document.getElementById("gameSelector").value;
  document.getElementById("gameTitle").textContent = `Place Your Bet - ${game === "coin" ? "Coin Toss" : game === "dice" ? "Dice Roll" : "Guess the Number"}`;

  document.getElementById("coinOptions").style.display = game === "coin" ? "block" : "none";
  document.getElementById("diceOptions").style.display = game === "dice" ? "block" : "none";
  document.getElementById("guessOptions").style.display = game === "guess" ? "block" : "none";

  document.getElementById("coin").style.display = game === "coin" ? "block" : "none";
}
function changeGame() {
    const game = document.getElementById("gameSelector").value;
    document.getElementById("gameTitle").textContent =
      `Place Your Bet - ${game === "coin" ? "Coin Toss" : game === "dice" ? "Dice Roll" : "Guess the Number"}`;

    document.getElementById("coinOptions").style.display = game === "coin" ? "block" : "none";
    document.getElementById("diceOptions").style.display = game === "dice" ? "block" : "none";
    document.getElementById("guessOptions").style.display = game === "guess" ? "block" : "none";

    document.getElementById("coin").style.display = game === "coin" ? "block" : "none";
  }
