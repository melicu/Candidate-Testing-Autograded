const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = ("Who was the first American woman in space? ");
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Please enter your name: ");

}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let index = 0; index < 5; index++) {
    let candidateAnswer = input.question(questions[index]);
    candidateAnswers.push(candidateAnswer);
  }
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  for (let indexj = 0; indexj < 5; indexj++) {
    console.log(`\n${questions[indexj]} \nYour answer: ${candidateAnswers[indexj]} \nCorrect answer: ${correctAnswers[indexj]}`);
  }

  let numCorrect = 0;
  for (let indexk = 0; indexk < 5; indexk++) {
    if (candidateAnswers[indexk].toUpperCase() === correctAnswers[indexk].toUpperCase()) {
      numCorrect += 1;
    }
  }

  let grade = (numCorrect / correctAnswers.length) * 100;  //TODO 3.2 use this variable to calculate the candidates score.

  console.log(`\n>>> Overall Grade: ${grade}% (${numCorrect} of ${correctAnswers.length} correct) <<<`);

  if (grade >= 80) {
    console.log(`>>> Congrats, ${candidateName}, you passed the quiz! <<<`);
  } else {
    console.log(`>>> Unfortunately, ${candidateName}, you failed the quiz. <<<`);
  }

  // compare candidate answers to correct answer.
  // if candidate answer is correct, add 20, else, add 0
  //grade = (Number of Correct Answers) / (Number of Quiz Questions) * 100


  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
  console.log("Welcome, " + candidateName + ". Good luck!");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};