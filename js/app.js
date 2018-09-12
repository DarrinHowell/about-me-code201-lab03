// Javascript file that controls functionality and interactivity of index.html
// strict comparisons only

// Begin web intereaction by asking for name
var visitorsName = prompt('What is your name?');
console.log(visitorsName + ' is the user\'s name');


/////////////////////


//Question & Answer Variable Declarations

// Question 1, plus feedback for correct and incorrect answers
var favNBAPlayerQ = visitorsName + ', does Darrin think that Steph Curry is the best player in the NBA?';
var favNBAPlayerAlertIfCorrect = 'Got \'em! Yup, no one else can make it splash like Steph.';
var favNBAPLayerAlertIfWrong = 'Ah, sorry. It looks like you don\'t know Darrin as well as you thought.'
                                + 'He loves Steph.';

// Question 2, plus feedback for correct and incorrect answers
var favFoodTypeQ = visitorsName + ', does Darrin enjoy Filipino food more than any other?';
var favFoodTypeIfCorrect = 'You were right; although he has Filipino ancestry, his favorite'
                            + ' type of food is Japanese food.';
var favFoodTypeIfWrong = 'Ah, bummer. Although Darrin is part Filipino, Filipino food'
                            + ' is not his number one. Japanese takes the top spot.';

// Question 3, plus feedback for correct and incorrect answers
var favCityQ = visitorsName + ', is Barcelona Darrin\'s favorite city?';
var favCityIfCorrect = 'You were right! Barcelona is not his favorite city. PNW all the way.';
var favCityIfWrong = 'Sorry! Barcelona is a great city, but Seattle has his heart.';

// Question 4, plus feedback for correct and incorrect answers
var favHipHopQ = visitorsName + ', is Kendrick Darrin\'s favorite hip-hop artist?';
var favHipHopIfCorrect = 'Yep, you were right: Darrin likes Lecrae most, not Kendrick.';
var favHipHopIfFalse = 'Ah, sorry, it\'s not Kendrick. It\'s Lecrae. Hipster, I know.';


// Question 5, plus feedback for correct and incorrect answers
var favAuthorQ = visitorsName + ', is Pierce Brown Darrin\'s favorite author?';
var favAuthorIfCorrect = 'Yep, you were right! The Red Rising book series,'
                        + ' authored by Pierce Brown, takes the cake for Darrin.';
var favAuthorIfWrong = 'Sorry, unfortunately that\'s the wrong answer. Pierce Brown is the'
                        + ' author of Darrin\'s favorite book series, Red Rising.';


/////////////////////


// Variable Calls + decision trees + console messages

// NBA question
var favNBAPlayer = prompt(favNBAPlayerQ);
if(favNBAPlayer.toLowerCase() === 'y' || favNBAPlayer.toLowerCase() === 'yes' ) {
  alert(favNBAPlayerAlertIfCorrect);
} else {
  alert(favNBAPLayerAlertIfWrong);
}
console.log(name + ' answered ' + favNBAPlayer+ ' to favNBAPlayer Question');


// food question
var favFood = prompt(favFoodTypeQ);
if(favFood.toLowerCase() === 'n' || favFood.toLowerCase() === 'no') {
  alert(favFoodTypeIfCorrect);
} else {
  alert(favFoodTypeIfWrong);
}
console.log(name + ' answered ' + favFood + ' to favFood Question');


// city question
var favCity = prompt(favCityQ);
if(favCity.toLowerCase() === 'n' || favCity.toLowerCase() === 'no') {
  alert(favCityIfCorrect);
} else {
  alert(favCityIfWrong);
}
console.log(name + ' answered ' + favCity + ' to favCity Question');


// hip-hop question
var favHipHop = prompt(favHipHopQ);
if(favHipHop.toLowerCase() === 'n' || favHipHop.toLowerCase() === 'no') {
  alert(favHipHopIfCorrect);
} else {
  alert(favHipHopIfFalse);
}
console.log(name + ' answered ' + favHipHop + ' to favHipHop Question');


// author question
var favAuthor = prompt(favAuthorQ);
if(favAuthor.toLowerCase() === 'y' || favAuthor.toLowerCase() === 'yes') {
  alert(favAuthorIfCorrect);
} else {
  alert(favAuthorIfWrong);
}
console.log(name + ' answered ' + favAuthor + ' to favAuthor Question');
