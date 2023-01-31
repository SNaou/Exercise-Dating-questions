'use strict';

//questions array

// Option 1

const questions = [
  "What is your first name?",
  "What is your last name?",
  "What is your age?",
  "Where do you live?",
  "What is your gender? (female, male, other)",
  "Which genders are you interested in dating?",
  "What is your main hobby?",
  "What is your favourite movie?"
];

// Option 2

let questions2 = [];
questions2.push("What is your first name?");
questions2.push("What is your last name?");
questions2.push("What is your age?");
questions2.push("Where do you live?");
questions2.push("What is your gender? (female, male, other)");
questions2.push("Which genders are you interested in dating?");
questions2.push("What is your main hobby?");
questions2.push("What is your favourite movie?");

// questions


// Option 1
while (questions.length > 0) {
  const question = questions.shift(); 
  prompt(question);
}

// Option 2

let i = 0;
while (i < questions2.length) {
  const question = questions2[i];
  prompt(question);
  i++;
}