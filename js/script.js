// declare DOM variables

var questionBox;
var answerBox;
var asTurn;
var bsTurn;
var ascore = 0;
var bscore = 0;
var aPie;
var bPie;
var aPi = "https://opentdb.com/api.php?amount=10";
var questionIndex = 0;
var questionBox;
var input = document.getElementById('input');
var getQuestion = document.getElementById('questionbutton');
var submit = document.getElementById('submit');

//api address = https://opentdb.com/api.php?amount=10

// document.addEventListener('DOMContentLoaded', function (e) {
//     fetch(aPi)
//         .then(function (results) {
//             return results.json();
//         })
//         .then(function (json) {
//             var questions = json.results;
//             var question = questions[0].question;
//             var questionBox = document.getElementById('question');
//             questionBox.textContent = question;
//             //console.log(questions);

//             submit.addEventListener('click', function (e) {
//                 var answers = json.results;
//                 var answer = answers[0].correct_answer;
//                 if (answer === input.value) {
//                     alert("correct");

//                 } 

//                 console.log(answer);
//                 answers.pop();
//                 //console.log(input.value);
//                 //input.value = '';

//             })
//         })

// })

getQuestion.addEventListener('click', function (e) {
    fetch(aPi)
        .then(function (results) {
            return results.json();
        })
        .then(function (json) {
            var questions = json.results;
            var question = questions[0].question;
            var questionBox = document.getElementById('question');
            questionBox.textContent = question;

            submit.addEventListener('click', function (e) {
                var answers = json.results;
                var answer = answers[0].correct_answer;
                console.log(answers);
                if (answer === input.value) {
                    alert("correct");
                } else {
                    alert("incorrect");
                }
                answers.shift();
                questions.shift();
                console.log(answer);
                console.log(input.value);
                //input.value = '';

            })
        })

})