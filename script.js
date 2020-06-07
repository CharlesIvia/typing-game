//Goal- Load random words, show high score

//Words to type

let words = [
  "magic",
  "journey",
  "travel",
  "explore",
  "life",
  "experience",
  "happiness",
  "gratitude",
  "discipline",
  "exercise",
  "workout",
  "friendship",
  "practice",
  "routine",
  "morning",
  "reading",
  "books",
  "education",
  "amour",
  "delibrate",
  "protein",
  "partner",
  "empathy",
  "concert",
  "patience",
  "humor",
  "resilience",
  "confidence",
  "consistency",
  "appreciation",
  "literature",
  "meaning",
  "humble",
  "province",
  "flight",
  "alchemy",
  "intense",
  "adorable",
  "swoon",
  "stunning",
  "sensational",
  "provocative",
  "apocalypse",
  "compliance",
  "meticulous",
  "replicate",
  "relentless",
  "pursuit",
  "proactive",
  "astounding",
  "delightful",
  "legitimate",
  "mesmerizing",
  "polarizing",
  "validate",
];

const levels = {
  easy: 10,
  medium: 7,
  hard: 4,
};

let currentLevel = levels.easy;

let timeCount = currentLevel + 1,
  scoreCount = 0,
  isPlaying,
  wordDislayed;

//Query the dom

let currentWord = document.querySelector("#current-word");

inputWord = document.querySelector("#input-word");
time = document.querySelector("#seconds");
timeLeft = document.querySelector("#time-left");
score = document.querySelector("#score");
message = document.querySelector("#message");
difficultyLevel = document.querySelector("#difficulty");

//Create event listeners

windows.addEventListener("load", init);
inputWord.addEventListener("input", startMatch);
difficultyLevel.addEventListener("change", changeLevel);

//Helper fns

function init() {
  time.textContent = currentLevel;
  showWord();

  //Call countdown fn every sec
  setInterval(countdown, 1000);
  //check game status every 0.1 sec
  setInterval(checkStatus, 100);
}

function showWord() {
  let randomIndex = Math.floor(Math.random() * words.length);
  wordDislayed = words[randomIndex];
  currentWord.textContent = wordDislayed;
}

function countdown() {
  if (timeCount > 0) {
    timeCount--;
    timeLeft.textContent = timeCount;
  } else if (timeCount === 0) {
    isPlaying = false;
  }
}

function checkStatus() {
  if (!isPlaying && timeCount === 0) {
    message.textContent = "Time Up!";
    scoreCount = 0;
    message.className = "mt-3 text-danger";
  }
}

function startMatch() {
  if (this.value === wordDislayed) {
    isPlaying = true;
    message.textContent = "Correct!";
    message.className = "mt-3 text-success";
    this.value = "";
    scoreCoun++;
    score.textContent = scoreCount;
    timeCount = currentLevel + 1; //reset clock
    showWord();
  }
}
