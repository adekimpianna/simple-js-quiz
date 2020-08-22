'use strict';

console.log('--- loading handler: showQuestion');

window.onload = function showQuestion() {
  debugger;

  // access to the question position on DOM for QUESTION
  let questionEl = document.getElementById('question');
  console.log('questionEl:', questionEl);

  //they process data using program logic functions
  // to get the current question that has been shuffled with math random >>> put inside of logic.js
  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  shuffledForCurrentQuestion = availableQuesions[questionIndex];
  
  //they communicate results to the user
  //insert the text (value) from the question (key) from inside of array questions (an array of objects) into DOM
  console.log('shuffled question:', shuffledForCurrentQuestion.question);
  questionEl.innerHTML = shuffledForCurrentQuestion.question;
  
  // access to the question position on DOM for ANSWER OPTIONS
  let options = Array.from(document.getElementsByClassName('answ-text'));
  console.log('answer options:', options);
  
  options.forEach(option => {
    const number = option.dataset['number'];
    console.log('number:', number);
    console.log('option text:', shuffledForCurrentQuestion['option'+number]);
    option.innerText = shuffledForCurrentQuestion['option'+number]
  });

  availableQuesions.splice(questionIndex, 1);
  if (availableQuesions.length === 0 || questionCounter >= maxQuestions) {
    //go to the end page
    return window.location.assign('/end.html');
  }
  questionCounter++;
  acceptingAnswers = true;

};


/* handlers define user interactions

  they read user input
    from events or from the DOM

  they process user data using program logic functions

  they communicate results to the user

  they log any important information for developers


  ex: 

  // read & process user input from event
  let x = parseInt(document.querySelector('#value1').value);
  let y = parseInt(document.querySelector('#value2').value);
  let op = document.querySelector('#operator').value;

  // pass user input through core logic
  const result = doMath(op, x, y); // leave this line!
  
  // render output to DOM for user
  document.getElementById('result').innerHTML = result;

  // log user action for developers
  console.log('\n--- calculate ---');
  console.log('x:', typeof x, '\n', x);
  console.log('y:', typeof y, '\n', y);
  console.log('op:', typeof op, '\n', op);
  console.log('result:', typeof result, '\n', result);


  // return true for the browser
  return true;
*/
