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

let timeCount = currentLevel + 1;

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


