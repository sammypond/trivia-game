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
var submit = document.getElementById('submit');

//call JSON query 

fetch(aPi)
    .then(function (results) {
        return results.json();
    })
    .then(function (json) {
        var questions = json.results;
        var question = questions[0].question;
        var answer = questions[0].correct_answer;
        var false1 = questions[0].incorrect_answers[0];
        var false2 = questions[0].incorrect_answers[1];
        var false3 = questions[0].incorrect_answers[2];
        var questionBox = document.getElementById('question');
        questionBox.textContent = question;
        console.log(questions);
        console.log(question);
        console.log(answer);
        console.log(false1);
        console.log(false2);
        console.log(false3);
        var answerButtons = document.getElementsByTagName('input');
        var answerLabels = document.getElementsByTagName('label');
        var answerLabel1 = answerLabels[0]
        var answerLabel2 = answerLabels[1];
        var answerLabel3 = answerLabels[2];
        var answerLabel4 = answerLabels[3];
        var answer1 = answerButtons[0];
        var answer2 = answerButtons[1];
        var answer3 = answerButtons[2];
        var answer4 = answerButtons[3];
        answer1.value = answer;
        answer2.value = false1;
        answer3.value = false2;
        answer4.value = false3; 
        answerLabel1.textContent = answer;
        answerLabel2.textContent = false1;
        answerLabel3.textContent = false2;
        answerLabel4.textContent = false3;

        getQuestion.addEventListener('click', function(e){
            var questionCounter = 0;
            questionCounter++;
            question = question[questionCounter]
        })
    
    })

    