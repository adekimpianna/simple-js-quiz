'use strict';

console.log('--- loading handler: showQuestion');


function showQuestion() {
  debugger;

  // access to the question position on DOM for QUESTION
  let questionEl = document.getElementById('question');
  //console.log('questionEl:', questionEl);

  //they process data using program logic functions
  // to get the current question that has been shuffled with math random >>> put inside of logic.js
  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  shuffledForCurrentQuestion = availableQuesions[questionIndex];
  
  //they communicate results to the user
  //insert the text (value) from the question (key) from inside of array questions (an array of objects) into DOM
  //console.log('shuffled question:', shuffledForCurrentQuestion.question);
  questionEl.innerHTML = shuffledForCurrentQuestion.question;
  
  // access to the question position on DOM for ANSWER OPTIONS
  let options = Array.from(document.getElementsByClassName('answ-text'));
  //console.log('answer options:', options);
  
  options.forEach(option => {
    const number = option.dataset['number'];
    //console.log('number:', number);
    //console.log('option text:', shuffledForCurrentQuestion['option'+number]);
    option.innerText = shuffledForCurrentQuestion['option'+number]
  });

  availableQuesions.splice(questionIndex, 1);
  if (availableQuesions.length === 0 || questionCounter >= maxQuestions) {
    //go to the end page
    return window.location.assign('https://github.com/adekimpianna/simple-js-quiz');
  }
  questionCounter++;
  acceptingAnswers = true;

};

console.log('--- loading handler: selectAnswer');

function selectAnswerHandler (e) {
  /*const logEntry = {
    action: 'select answer'
  };
  appLog.push(logEntry);
*/
  
  if (!acceptingAnswers) return;

  acceptingAnswers = false;
  let options = Array.from(document.getElementsByClassName('answ-text'));
  const selectedOption = e.target; //
    //console.log('selectedopt:', selectedOption);
  const selectedAnswer = selectedOption.dataset['number'];
    //console.log('selectedansw:', selectedAnswer); 
  if (selectedAnswer == shuffledForCurrentQuestion.answer) {
    alert(`correct!`);
    console.log('answer is:', selectedAnswer == shuffledForCurrentQuestion.answer);
  } else {
    alert(`ups, that's wrong!`);
    console.log('answer is:', selectedAnswer == shuffledForCurrentQuestion.answer);
  }

  showQuestion();
};




/* handlers define user interactions

  they read user input
    from events or from the DOM

  they process user data using program logic functions

  they communicate results to the user

  they log any important information for developers

*/
