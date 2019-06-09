// declare DOM variables

var questionBox;
var answerBox;
var getQuestion = document.getElementById('questionbutton');
var submit = document.getElementById('submit');
var asTurn;
var bsTurn
var aPie;
var bPie;
var aPi = "https://opentdb.com/api.php?amount=10";
var questionIndex = 0;
var show = document.getElementById('question');
var input = document.getElementById('input');

//api address = https://opentdb.com/api.php?amount=10
// add event listeners

document.addEventListener('DOMContentLoaded', function (e) {
    fetch(aPi)
        .then(function (results) {
            return results.json();
        })
        .then(function (json) {
            var questions = json.results;
            var question = questions[0].question;
            console.log(questions);
            console.log(questions[0].question);

            var questionBox = document.getElementById('question');
            questionBox.textContent = question;

            submit.addEventListener('click', function (e) {
                var answers = json.results;
                console.log(json.results);
                var answer = answers[0].correct_answer;
                console.log(answers);
                console.log(answer);
                if (answer === input.value) {
                    alert("correct");
                }
                input.value = '';

            })
        })
    getQuestion.addEventListener('click', function (e) {
        fetch(aPi)
            .then(function (results) {
                return results.json();
            })
            .then(function (json) {
                var questions = json.results;
                var question = questions[0].question;
                console.log(questions);
                console.log(questions[0].question);

                var questionBox = document.getElementById('question');
                questionBox.textContent = question;

                submit.addEventListener('click', function (e) {
                    var answers = json.results;
                    console.log(json.results);
                    var answer = answers[0].correct_answer;
                    console.log(answers);
                    console.log(answer);
                    if (answer === input.value) {
                        alert("correct");
                    }
                    input.value = '';
                })
            })

    })

})

