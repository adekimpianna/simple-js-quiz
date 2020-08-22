'use strict';
console.log('--- loading listener: answerOptions');
debugger;

let answerOptions = Array.from(document.querySelectorAll('.answ-text'));
  //console.log('answer options listener:', answerOptions);

  answerOptions.forEach(answerOption => {
    answerOption.addEventListener('click', selectAnswerHandler);
    //console.log('I click this!')
    
  });

/*
document.getElementById('_')
  .addEventListener('_', _);
*/