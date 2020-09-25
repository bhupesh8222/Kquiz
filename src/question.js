let tempquestions = [
  {
    question: "Which city is capital of India",
    choices: ["Delhi", "Mumbai", "Agra", "Lucknow"],
    correct: 1,
    description: "Delhi is the capitall of India",
  },
  {
    question: "After what interval, elections of LokSabha takes place",
    choices: ["2", "6", "5", "1"],
    correct: 3,
    description: "",
  },
  {
    question:
      "What is the HTML tag under which one can write the JavaScript code?",
    choices: [" <javascript>", "<scripted>", "<script>", "<js>"],
    correct: 3,
    description:
      "If we want to write a JavaScript code under HTML tag, you will have to use the “script” tag.",
  },
  {
    question: "Which city is capital of Uttarkhand",
    choices: ["Bageshwar", "Dehradun", "Haldwani", "Kotdwar"],
    correct: 2,
    description: "Dehradun ",
  },
  {
    question: "After what interval, elections of LokSabha takes place",
    choices: ["2", "6", "5", "1"],
    correct: 3,
    description: "",
  },
];

const swapQuestion = (questions) => {
  let questionPointer;
  for (
    questionPointer = 0;
    questionPointer < questions.length;
    questionPointer = questionPointer + 1
  ) {
    let index = Math.floor(Math.random() * (questionPointer + 1));
    let temp = questions[questionPointer];
    questions[questionPointer] = questions[index];
    questions[index] = temp;
  }
  return questions;
};

export let questions = swapQuestion(tempquestions);
