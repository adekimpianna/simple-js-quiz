/* Suggested Initial State

  this file contains a suggestion of what your initial state should include
  feel free to modify, add or remove properties as your team's project evolves



const state = {
  // how many questions has the user answered?
  //  you can calculate this value by iterating through the questions
  //  is selected === -1?
  answered: 0,
  // how many correct answers has the user submitted?
  //  you can calculate this value by iterating through the questions
  //  is selected === correct?
  correct: 0,
  // should the correct answer be indicated when a user is wrong?
  //  a possible user setting, this could be toggled in the UI
  showCorrectAnswers: false,
  // the questions in the quiz
  questions: [
    {
      question: 'Based on which culture is The Witcher made from?',
      optiona: 'Slavic culture',
      optionb: 'Germanic culture',
      optionc: 'Nordic culture',
      optiond: 'Celtic culture',
      answer: a,
    },
    {
      
    }
  ]
};

*/

let shuffledForCurrentQuestion = {};
let acceptingAnswers = false;
let questionCounter = 0;
/*
let score = 0;
const correctScore = 10;
*/

let questions = [
  {
    question: 'Based on which culture is The Witcher made from?',
    option1: 'Slavic culture',
    option2: 'Germanic culture',
    option3: 'Nordic culture',
    option4: 'Celtic culture',
    answer: 1,
  },
  {
    question: 'From which country is the author of The Withcer books, Andrzej Sapkowski, originally from?',
    option1: 'Slovenia',
    option2: 'Germany',
    option3: 'UK',
    option4: 'Poland',
    answer: 4,
  },
  {
    question: 'How many series of The Withcer games are availabe now? (Aug, 2020)',
    option1: 'One serie',
    option2: 'Two series',
    option3: 'Three series',
    option4: 'Four series',
    answer: 3,

  },
  {
    question: 'Who plays as Geralt of Rivia in The Withcer series from Netflix?',
    option1: 'Henry Cavill',
    option2: 'Chris Hemsworth',
    option3: 'Travic Fimell',
    option4: 'Matt Bomer',
    answer: 1,

  },
  {
    question: 'On Netflix version of The Withcer, which song made by Jaskier that makes Geralt so famous?',
    option1: 'The Succubus Bait Song',
    option2: 'The Stars Above The Path',
    option3: 'The Lion Club Of Cintra',
    option4: 'Toss A Coin To Your Witcher',
    answer: 4,

  },
  {
    question: 'Even though the age-gap is almost a century, both Yennefer and Ciri were born?',
    option1: 'in Aedin',
    option2: 'in Skallige',
    option3: 'during Belleteyn',
    option4: 'during Winter in Cintra',
    answer: 3,

  },
  {
    question: 'Why is Ciri capable of doing powerful things, but Geralt is not?',
    option1: 'Because she learns it from Yennefer',
    option2: 'Because she has Elven blood',
    option3: 'Because she has Elder blood',
    option4: 'None above is correct',
    answer: 3,

  },
  {
    question: 'Who is the powerful mage in The Witcher that has the polymorph ability?',
    option1: 'Yennefer of Vengerberg',
    option2: 'Triss Merigold',
    option3: 'Fringilla Vigo',
    option4: 'Philippa Eilhart',
    answer: 4,

  },
  {
    question: 'Which monster in The Witcher represents an unwanted child?',
    option1: 'Striga',
    option2: 'Botchling',
    option3: 'Godling',
    option4: 'None above is correct',
    answer: 2,

  },
  {
    question: 'Which witcher comes from another witcher school than the Wolf School?',
    option1: 'Ciri',
    option2: 'Coën',
    option3: 'Vesemir',
    option4: 'Leo',
    answer: 2,
  },
];

let availableQuesions = [...questions];
let maxQuestions = 10;