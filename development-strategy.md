# Project Development Strategy

##  JavaScript Quiz: Focusing on State

## Wireframe

<!-- include a wireframe for your project in this repository, and display it here -->

<!-- wireframe.cc is a good site for getting started with wireframes -->


  
## Set-Up

__A User can see my initial repository and live demo__


### Repo 

> On this step the project repo was generated from template [w3-validation-template](https://github.com/HackYourFutureBelgium/state-project-js-quiz)

 Steps:

- Generate repo from template
- Turn on GitHub Pages
- Written initial, basic README
- Development-strategy file created
- Created issues per branches


## 1. User Story: User can see a quiz

Set up User Interface based on the wireframe so that user can see how the quiz is

Steps:
- Create a new branch from master branch, named `user-interface`
- Develop `HTML`
- Add `CSS` accordingly 
- Open PR to the master branch
 

## 2. User Story: User can see many questions

The user can see many questions and many answers

Steps:
- Create a new branch from the master branch, named `see-questions`
- Add a list of questions (and answers) on `data.js`
- Add a function to randomly show the questions on `logic.js` or `handler.js` ?
- Open PR from the branch o the master branch


## 3. User Story: User can choose the answer

A user can click on the answer buttons

Steps:
- Create a new branch from the master branch, named `click-answer`
- Add a function triggered if the user select the answer buttons on `handler.js`
- Add an event listener when the buttons are clicked by user on `listener.js`
- Open PR from the branch o the master branch


## 4. User Story: User can see the feedbacks from each answer

A user can see each of their answer to the questions and whether it is true or false.

Steps:
- Create a new branch from the master branch, named `answers-memory`
- Add a function to render their answers on `view.js`
- Open PR from the branch o the master branch

## Finishing Touches

- Validate codes to check for any last mistakes
- All bugs and errors were fixed

