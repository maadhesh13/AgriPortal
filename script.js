// 20 questions with options and correct answers
const questions = [
  { q: "Which soil type retains the most water, affecting crop irrigation needs?", options: ["Sandy", "Loamy", "Clay", "Silty"], correct: 2 },
  { q: "What gas, emitted by livestock, contributes most to greenhouse effects?", options: ["Carbon Dioxide", "Methane", "Nitrous Oxide", "Oxygen"], correct: 1 },
  { q: "Which irrigation method minimizes water loss through evaporation?", options: ["Flood", "Sprinkler", "Drip", "Furrow"], correct: 2 },
  { q: "What pest control method uses natural predators?", options: ["Chemical", "Biological", "Mechanical", "Cultural"], correct: 1 },
  { q: "Which nutrient deficiency causes yellowing leaves due to lack of chlorophyll?", options: ["Nitrogen", "Phosphorus", "Potassium", "Magnesium"], correct: 0 },
  { q: "What technique alternates crops to maintain soil fertility?", options: ["Monoculture", "Crop Rotation", "Tillage", "Hydroponics"], correct: 1 },
  { q: "Which tool measures soil pH?", options: ["Thermometer", "pH Meter", "Hygrometer", "Anemometer"], correct: 1 },
  { q: "What reduces soil erosion on sloped farmland?", options: ["Contour Plowing", "Overgrazing", "Deforestation", "Burning"], correct: 0 },
  { q: "Which livestock breed is best for milk in temperate climates?", options: ["Angus", "Holstein", "Hereford", "Brahman"], correct: 1 },
  { q: "What fungal disease affects wheat?", options: ["Rust", "Mildew", "Blight", "Rot"], correct: 0 },
  { q: "Which planting method spaces seeds evenly for mechanized harvest?", options: ["Broadcasting", "Drilling", "Transplanting", "Dibbling"], correct: 1 },
  { q: "What process converts nitrogen into a plant-usable form?", options: ["Photosynthesis", "Nitrogen Fixation", "Respiration", "Transpiration"], correct: 1 },
  { q: "Which cover crop adds nitrogen to soil?", options: ["Rye", "Clover", "Barley", "Oats"], correct: 1 },
  { q: "What tractor attachment breaks compacted soil?", options: ["Plow", "Harrow", "Seeder", "Mower"], correct: 0 },
  { q: "Which herbicide targets broadleaf weeds without harming grasses?", options: ["Glyphosate", "2,4-D", "Atrazine", "Paraquat"], correct: 1 },
  { q: "What stores runoff water for dry periods?", options: ["Terracing", "Rainwater Harvesting", "Levees", "Canals"], correct: 1 },
  { q: "Which insect pollinates crops like almonds?", options: ["Ladybug", "Honeybee", "Aphid", "Grasshopper"], correct: 1 },
  { q: "What corrects high soil acidity?", options: ["Lime", "Sulfur", "Gypsum", "Compost"], correct: 0 },
  { q: "Which grazing system prevents overgrazing?", options: ["Continuous", "Rotational", "Strip", "Deferred"], correct: 1 },
  { q: "What weather condition most affects seed germination?", options: ["Wind Speed", "Humidity", "Temperature", "Air Pressure"], correct: 2 }
];

// Quiz state
let currentQuestion = 0;
let score = 0;
const totalQuestions = questions.length;

// Load first question
loadQuestion();

// Load a question
function loadQuestion() {
  if (currentQuestion < totalQuestions) {
    let q = questions[currentQuestion];
    document.getElementById("question-number").innerText = `Question ${currentQuestion + 1}`;
    document.getElementById("question-text").innerText = q.q;
    document.getElementById("option0").innerText = q.options[0];
    document.getElementById("option1").innerText = q.options[1];
    document.getElementById("option2").innerText = q.options[2];
    document.getElementById("option3").innerText = q.options[3];
    document.getElementById("result").innerText = "";
    document.getElementById("submit-btn").style.display = "inline";
    document.getElementById("next-btn").style.display = "none";
    document.getElementById("quizForm").reset();
  } else {
    showFinalScore();
  }
  document.getElementById("score").innerText = `Score: ${score}/${totalQuestions}`;
}

// Check answer
function checkAnswer() {
  let answers = document.getElementsByName("answer");
  let selected = -1;
  for (let i = 0; i < answers.length; i++) {
    if (answers[i].checked) {
      selected = parseInt(answers[i].value);
    }
  }
  if (selected === -1) {
    document.getElementById("result").innerText = "Please select an answer!";
    return;
  }
  let correct = questions[currentQuestion].correct;
  if (selected === correct) {
    score++;
    document.getElementById("result").innerText = "Correct!";
    document.getElementById("result").classList.add("correct");
  } else {
    document.getElementById("result").innerText = `Wrong! Correct answer: ${questions[currentQuestion].options[correct]}`;
    document.getElementById("result").classList.add("wrong");
  }
  document.getElementById("score").innerText = `Score: ${score}/${totalQuestions}`;
  document.getElementById("submit-btn").style.display = "none";
  document.getElementById("next-btn").style.display = "inline";
}

// Next question
function nextQuestion() {
  currentQuestion++;
  document.getElementById("result").classList.remove("correct", "wrong");
  loadQuestion();
}

// Final score
function showFinalScore() {
  document.getElementById("question-number").innerText = "Quiz Complete!";
  document.getElementById("question-text").innerText = "Thanks for playing!";
  document.getElementById("quizForm").style.display = "none";
  document.getElementById("result").innerText = `Final Score: ${score}/${totalQuestions}`;
  document.getElementById("result").classList.add("final");
}