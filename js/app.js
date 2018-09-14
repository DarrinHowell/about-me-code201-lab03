'use strict';
// Javascript file that controls functionality and interactivity of index.html
// strict comparisons only

// Begin web intereaction by asking for name
var visitorsName = prompt('What is your name?');
console.log(visitorsName + ' is the user\'s name');

var correctAnswers = 0;


/////////////////////


//Question & Answer Variable Declarations
// Question 1, plus feedback for correct and incorrect answers
var question1 = visitorsName + ', does Darrin think that Steph Curry is the best player in the NBA?';
var question1_AlertIfCorrect = 'Got \'em! Yup, no one else can make it splash like Steph.';
var question1_AlertIfWrong = 'Ah, sorry. It looks like you don\'t know Darrin as well as you thought.'
                                + ' He loves Steph.';

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


var question7 = 'What does Darrin like to do for fun?';
var question7_AlertIfCorrect = 'Nice, Darrin likes to do that!';
var question7_AlertIfWrong = 'Sorry, incorrect! Please make a(nother) guess.';
var question7_AlertIfOutOfGuesses = 'Ah, sorry, you\'re out of guesses. I guess you don\'t know him like that.';



var promptIfIrrelevantInput = 'You either didn\'t guess, or your input doesn\'t fit the question. Please answer Y/Yes or N/No on the next question. ';
var promptIfIrrelevantInput_Q6 = 'You either didn\'t guess or you didn\'t guess a number. We\'ll still have to burn one of your guesses. Please guess a number.';


/////////////////////


// Array generation
var questionArray = [
  question1,
  question2,
  question3,
  question4,
  question5,
  question6,
  question7
];

var correctGuessShortArray = [
  'y',
  'n',
  'n',
  'n',
  'y',
];

var correctGuessLongArray = [
  'yes',
  'no',
  'no',
  'no',
  'yes',
];

var incorrectAnswerShortArray = [
  'n',
  'y',
  'y',
  'y',
  'n'
];

var incorrectAnswerLongArray = [
  'no',
  'yes',
  'yes',
  'yes',
  'no'
];


var correctAlertArray = [
  question1_AlertIfCorrect,
  question2_AlertIfCorrect,
  question3_AlertIfCorrect,
  question4_AlertIfCorrect,
  question5_AlertIfCorrect,
  question6_AlertIfCorrect,
  question7_AlertIfCorrect
];

var wrongAlertArray = [
  question1_AlertIfWrong,
  question2_AlertIfWrong,
  question3_AlertIfWrong,
  question4_AlertIfWrong,
  question5_AlertIfWrong,
  '',
  question7_AlertIfWrong
];



/////////////////////



// function that runs true false game
function trueFalseGame(player, question, correctAnswerShort, correctAnswerLong, promptIfCorrect, promptIfWrong, incorrectAnswerLong, incorrectAnswerShort) {
  var userInput = prompt(question);
  var normalizedInput = userInput.toLowerCase();

  if(normalizedInput === correctAnswerShort || normalizedInput === correctAnswerLong ) {
    alert(promptIfCorrect);
    correctAnswers++;
  } else if(normalizedInput === incorrectAnswerShort || normalizedInput === incorrectAnswerLong) {
    alert(promptIfWrong);
  } else {
    alert(promptIfIrrelevantInput);
  }
  console.log(player + ' answered ' + userInput+ ' to question', i);

}

// function that runs number guessing game (question 6)
function guessNumberQuestion(player, question, correctNumber, promptIfCorrect, promptTooHigh, promptTooLow, promptOutOfGuesses){
  var maxGuesses = 4;
  var numGuesses = 0;
  while(numGuesses < maxGuesses){
    var question6_UserInput = prompt(question);
    var q6InputToInteger = parseInt(question6_UserInput);

    if(q6InputToInteger === correctNumber) {
      alert(promptIfCorrect);
      console.log(player + ' guessed ' + question6_UserInput);
      console.log(player + ' guessed ' + numGuesses + ' time(s) and got it correct.');
      correctAnswers++;
      break;

    } else if (q6InputToInteger > q6Answer){
      alert(promptTooHigh);

    } else if (q6InputToInteger < q6Answer){ 
      alert(promptTooLow);
    } else { // covers null and or string case
      alert(promptIfIrrelevantInput_Q6);
    }

    numGuesses++;

    if(numGuesses === maxGuesses){
      alert(promptOutOfGuesses);
    }

    console.log(player + ' guessed ' + question6_UserInput);
    console.log(player + ' guessed ' + numGuesses + ' time(s)');

  }
}

// function used to guess my favorite hobbies
function guessHobbyQuestion(player, question, promptIfCorrect, promptOutOfGuesses){
  var hobbiesArray = ['snowboard', 'flag football', 'read', 'rap', 'play piano', 'write spoken word'];
  var q7Guesses = 0;
  hobbyLoop : while(q7Guesses < 6){
    var question7_Input = prompt(question);
    var q7InputNormalized = question7_Input.toLocaleLowerCase();

    for(var i = 0; i < hobbiesArray.length; i++){
      var hobby = hobbiesArray[i];
      console.log('We ran through the loop ' + i + ' times.');

      if(hobby === q7InputNormalized){
        alert(promptIfCorrect);
        correctAnswers++;
        console.log(player +' guessed ' + q7InputNormalized + ' correctly');
        break hobbyLoop;

      } else if (i === hobbiesArray.length-1){
        alert(question7_AlertIfWrong);
        console.log('i = ' + i);
      }

    }
    q7Guesses++;
    console.log('number of guesses =' + q7Guesses);

    if(q7Guesses === 6){
      alert(promptOutOfGuesses);
    }
  }
}



/////////////////////



// Loop through the game, iterating five times through true/false game
// and once through the other two questions
var i = 0;
for(i; i < questionArray.length; i++){
  if(i < 5){
    trueFalseGame(visitorsName, questionArray[i], correctGuessShortArray[i], correctGuessLongArray[i], correctAlertArray[i], wrongAlertArray[i], incorrectAnswerLongArray[i], incorrectAnswerShortArray[i]);
  } else if(i < 6){
    guessNumberQuestion(visitorsName, questionArray[i], q6Answer, correctAlertArray[i], question6_AlertIfTooHigh, question6_AlertIfTooLow, question6_AlertIfOutOfGuesses);
  } else {
    guessHobbyQuestion(visitorsName, questionArray[i], correctAlertArray[i], question7_AlertIfOutOfGuesses);
  }
}


/////////////////////



// grand total alert
var finalScorePerfect = correctAnswers + ' out of 7. Perfect score! You may know Darrin better than he knows himself';
var finalScoreHigh = correctAnswers + ' out of 7. Well done. You must have spent some time with D!';
var finalScoreLow = correctAnswers + ' out of 7. You\'ve got a little bit of work to do. Take him out for a drink and an M\'s game and get to know him!';

if(correctAnswers === 7){
  alert(finalScorePerfect);
} else if(correctAnswers >= 5){
  alert(finalScoreHigh);
} else {
  alert(finalScoreLow);
}

// game over!!
