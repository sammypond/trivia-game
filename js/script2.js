// declare DOM variables

var questionBox;
var answerBox;
var asTurn;
var bsTurn;
var ascore = 0;
var bscore = 0;
var aPie;
var bPie;
var aPi = "https://opentdb.com/api.php?amount=50&category=23&type=multiple";
var questionIndex = 0;
var questionBox;
var input = document.getElementById('input');
var getQuestion = document.getElementById('questionbutton');
var answerButtons = document.getElementById('radiocity');
var questions;
var question;
var answer;
var false1;
var false2;
var false3;
var questionBox;
var answerButtons;
var answerLabels;
var answerLabel1;
var answerLabel2;
var answerLabel3;
var answerLabel4;
var answer1;
var answer2;
var answer3;
var answer4;
var questionCounter = 0;
var turnCounter = 0;
var scorea = document.getElementById('scorea');
var scoreb = document.getElementById('scoreb');
var wrongMessage = document.getElementById('invisible');

//call JSON query 

fetch(aPi)
    .then(function (results) {
        return results.json();
    })
    .then(function (json) {
        questions = json.results;
        question = questions[0].question;
        answer = questions[0].correct_answer;
        false1 = questions[0].incorrect_answers[0];
        false2 = questions[0].incorrect_answers[1];
        false3 = questions[0].incorrect_answers[2];
        questionBox = document.getElementById('question');
        questionBox.textContent = question;
        answerButtons = document.getElementsByTagName('input');
        answerLabels = document.getElementsByTagName('label');
        answerLabel1 = answerLabels[0]
        answerLabel2 = answerLabels[1];
        answerLabel3 = answerLabels[2];
        answerLabel4 = answerLabels[3];
        answer1 = answerButtons[0];
        answer2 = answerButtons[1];
        answer3 = answerButtons[2];
        answer4 = answerButtons[3];
        answer1.value = answer;
        answer2.value = false1;
        answer3.value = false2;
        answer4.value = false3;
        answerLabel1.textContent = answer;
        answerLabel2.textContent = false1;
        answerLabel3.textContent = false2;
        answerLabel4.textContent = false3;
        questionCounter++;
    })

// getQuestion.addEventListener('click', function(e){
//     questionCounter++;
//     question = questions[questionCounter].question;
//     questionBox.textContent = question;
//     answer = questions[questionCounter].correct_answer;
//     false1 = questions[questionCounter].incorrect_answers[0];
//     false2 = questions[questionCounter].incorrect_answers[1];
//     false3 = questions[questionCounter].incorrect_answers[2];
//     questionBox = document.getElementById('question');
//     questionBox.textContent = question;
//     answerButtons = document.getElementsByTagName('input');
//     answerLabels = document.getElementsByTagName('label');
//     answerLabel1 = answerLabels[0]
//     answerLabel2 = answerLabels[1];
//     answerLabel3 = answerLabels[2];
//     answerLabel4 = answerLabels[3];
//     answer1 = answerButtons[0];
//     answer2 = answerButtons[1];
//     answer3 = answerButtons[2];
//     answer4 = answerButtons[3];
//     answer1.value = answer;
//     answer2.value = false1;
//     answer3.value = false2;
//     answer4.value = false3; 
//     answerLabel1.textContent = answer;
//     answerLabel2.textContent = false1;
//     answerLabel3.textContent = false2;
//     answerLabel4.textContent = false3;
// })

answerButtons.addEventListener('click', function (e) {
    turnCounter ++; 
    if (e.target.value == answer && turnCounter % 2 === 0) {
        ascore = ascore + 1;
        scorea.textContent = ascore;
    } else if (e.target.value == answer && turnCounter % 2 !== 0) {
        bscore = bscore + 1;
        scoreb.textContent = bscore;
    } else {
        alert('Incorrect!');
    }
    


    // var shuffle = document.querySelector('radiocity');
    // for (var i = shuffle.children.length; i >= 0; i--) {
    //     shuffle.appendChild(shuffle.children[Math.random() * i | 0]);
    // }
    questionCounter++;
    question = questions[questionCounter].question;
    questionBox.textContent = question;
    answer = questions[questionCounter].correct_answer;
    false1 = questions[questionCounter].incorrect_answers[0];
    false2 = questions[questionCounter].incorrect_answers[1];
    false3 = questions[questionCounter].incorrect_answers[2];
    questionBox = document.getElementById('question');
    questionBox.textContent = question;
    answerButtons = document.getElementsByTagName('input');
    answerLabels = document.getElementsByTagName('label');
    answerLabel1 = answerLabels[0]
    answerLabel2 = answerLabels[1];
    answerLabel3 = answerLabels[2];
    answerLabel4 = answerLabels[3];
    answer1 = answerButtons[0];
    answer2 = answerButtons[1];
    answer3 = answerButtons[2];
    answer4 = answerButtons[3];
    answer1.value = answer;
    answer2.value = false1;
    answer3.value = false2;
    answer4.value = false3;
    answerLabel1.textContent = answer;
    answerLabel2.textContent = false1;
    answerLabel3.textContent = false2;
    answerLabel4.textContent = false3;
})