'use strict';
// Javascript file that controls functionality and interactivity of index.html
// strict comparisons only

// Begin web intereaction by asking for name
var visitorsName = prompt('What is your name?');
console.log(visitorsName + ' is the user\'s name');


/////////////////////


//Question & Answer Variable Declarations

/*
// Question 1, plus feedback for correct and incorrect answers
var question1 = visitorsName + ', does Darrin think that Steph Curry is the best player in the NBA?';
var question1_AlertIfCorrect = 'Got \'em! Yup, no one else can make it splash like Steph.';
var question1_AlertIfWrong = 'Ah, sorry. It looks like you don\'t know Darrin as well as you thought.'
                                + 'He loves Steph.';

// Question 2, plus feedback for correct and incorrect answers
var question2 = visitorsName + ', does Darrin enjoy Filipino food more than any other?';
var question2_AlertIfCorrect = 'You were right; although he has Filipino ancestry, his favorite'
                            + ' type of food is Japanese food.';
var question2_AlertIfWrong = 'Ah, bummer. Although Darrin is part Filipino, Filipino food'
                            + ' is not his number one. Japanese takes the top spot.';

// Question 3, plus feedback for correct and incorrect answers
var question3 = visitorsName + ', is Barcelona Darrin\'s favorite city?';
var question3_AlertIfCorrect = 'You were right! Barcelona is not his favorite city. PNW all the way.';
var question3_AlertIfWrong = 'Sorry! Barcelona is a great city, but Seattle has his heart.';

// Question 4, plus feedback for correct and incorrect answers
var question4 = visitorsName + ', is Kendrick Darrin\'s favorite hip-hop artist?';
var question4_AlertIfCorrect = 'Yep, you were right: Darrin likes Lecrae most, not Kendrick.';
var question4_AlertIfWrong = 'Ah, sorry, it\'s not Kendrick. It\'s Lecrae. Hipster, I know.';


// Question 5, plus feedback for correct and incorrect answers
var question5 = visitorsName + ', is Pierce Brown Darrin\'s favorite author?';
var question5_AlertIfCorrect = 'Yep, you were right! The Red Rising book series,'
                        + ' authored by Pierce Brown, takes the cake for Darrin.';
var question5_AlertIfWrong = 'Sorry, unfortunately that\'s the wrong answer. Pierce Brown is the'
                        + ' author of Darrin\'s favorite book series, Red Rising.';
*/

// Question 6, guessing a number
var question6 = visitorsName + ', how many years has Darrin worked in neuroscience labs'
                            + ' at UW, both as an undergrad and professionally?';
var question6_AlertIfCorrect = 'Nice work, you got it: Darrin spent 8 years working'
                            + ' working in the lab at UW';
var question6_AlertIfTooHigh = 'Ha, wrong! Not that many years.';
var question6_AlertIfTooLow = 'Nope, Darrin\'s nerdier than you think. He spent more'
                            + ' time in the lab than that.';

var q6Answer = 8;
var question6_AlertIfOutOfGuesses = 'Ah, sorry, you\'re out of guesses. He worked'
                                    + ' there for 8 years.';

/////////////////////


// Variable Calls + decision trees + console messages

/*
// question1
var question1_UserInput = prompt(question1);
var q1_UserInputNormalized = question1_UserInput.toLowerCase();
if(q1_UserInputNormalized === 'y' || q1_UserInputNormalized === 'yes' ) {
  alert(question1_AlertIfCorrect);
} else {
  alert(question1_AlertIfWrong);
}
console.log(name + ' answered ' + question1_UserInput+ ' to question1');


// question2
var question2_UserInput = prompt(question2);
var q2_UserInputNormalized = question2_UserInput.toLowerCase();
if(q2_UserInputNormalized === 'n' || q2_UserInputNormalized === 'no') {
  alert(question2_AlertIfCorrect);
} else {
  alert(question2_AlertIfWrong);
}
console.log(name + ' answered ' + question2_UserInput + ' to question2_UserInput Question');


// question3
var question3_UserInput = prompt(question3);
var q3_UserInputNormalized = question3_UserInput.toLocaleLowerCase();
if(q3_UserInputNormalized === 'n' || q3_UserInputNormalized === 'no') {
  alert(question3_AlertIfCorrect);
} else {
  alert(question3_AlertIfWrong);
}
console.log(name + ' answered ' + question3_UserInput + ' to question3_UserInput Question');


// question4
var question4_UserInput = prompt(question4);
var q4_UserInputNormalized = question4_UserInput.toLowerCase();
if(q4_UserInputNormalized === 'n' || q4_UserInputNormalized === 'no') {
  alert(question4_AlertIfCorrect);
} else {
  alert(question4_AlertIfWrong);
}
console.log(name + ' answered ' + question4_UserInput + ' to question4_UserInput Question');


// question5
var question5_UserInput = prompt(question5);
var q5_UserInputNormalized = question5_UserInput.toLowerCase();
if(q5_UserInputNormalized === 'y' || q5_UserInputNormalized === 'yes') {
  alert(question5_AlertIfCorrect);
} else {
  alert(question5_AlertIfWrong);
}
console.log(name + ' answered ' + question5_UserInput + ' to question5_UserInput Question');
*/

// question6, numerical guess + if else tree
var maxGuesses = 4;
var numGuesses = 0;
while(numGuesses < maxGuesses){
  var question6_UserInput = prompt(question6);
  var q6InputToInteger = parseInt(question6_UserInput);

  if(q6InputToInteger === q6Answer) {
    alert(question6_AlertIfCorrect);
    console.log(name + ' guessed ' + question6_UserInput);
    console.log(name + ' guessed ' + numGuesses + ' time(s) and got it correct.');
    break;

  } else if (q6InputToInteger > q6Answer){
    alert(question6_AlertIfTooHigh);

  } else { // it will be less than the actual answer
    alert(question6_AlertIfTooLow);
  }

  numGuesses++;

  if(numGuesses === maxGuesses){
    alert(question6_AlertIfOutOfGuesses);
  }

  console.log(name + ' guessed ' + question6_UserInput);
  console.log(name + ' guessed ' + numGuesses + ' time(s)');

}


