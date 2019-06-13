// declare DOM variables

var questionBox;
var answerBox;
var asTurn;
var bsTurn;
var ascore = 0;
var bscore = 0;
var aPi;
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
var correct;
var myAnswers;
var correct = answer;
var buttonz = document.getElementById('buttonz');
var wager = document.getElementById('wager');
var category;
var ablueButton;
var ayellowButton;
var aredButton;
var agreenButton;
var bblueButton;
var byellowButton;
var bredButton;
var bgreenButton;

//open modal 
document.addEventListener('DOMContentLoaded', function (e) {
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";

    span.onclick = function () {
        modal.style.display = "none";
    }
})

buttonz.addEventListener('click', function (e) {
    if (e.target.id === "history") {
        console.log(e.target.id);
        aPi = "https://opentdb.com/api.php?amount=50&category=23&type=multiple";
    } else if (e.target.id === "geography") {
        aPi = "https://opentdb.com/api.php?amount=50&category=22&type=multiple";
    } else if (e.target.id === "sports") {
        aPi = "https://opentdb.com/api.php?amount=50&category=21&type=multiple";
    } else if (e.target.id === "general") {
        aPi = "https://opentdb.com/api.php?amount=50&category=9&type=multiple";
    }


    fetch(aPi)
        .then(function (results) {
            return results.json();
        })
        .then(function (json) {
            questions = json.results;
            console.log(json.results);
            question = questions[0].question;
            category = questions[0].category;
            console.log(category);
            answer = questions[0].correct_answer;
            false1 = questions[0].incorrect_answers[0];
            false2 = questions[0].incorrect_answers[1];
            false3 = questions[0].incorrect_answers[2];
            questionBox = document.getElementById('question');
            questionBox.innerHTML = question;
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
            answerLabel1.innerHTML = answer;
            answerLabel2.innerHTML = false1;
            answerLabel3.innerHTML = false2;
            answerLabel4.innerHTML = false3;
            questionCounter++;
            console.log(turnCounter);
        })
})


answerButtons.addEventListener('click', function (e) {
    if (wager.value > 0 && wager.value <= 1000) {
        if (e.target.value == answer && turnCounter % 2 === 0) {
            var wagerAmount = wager.value;
            var integer = parseInt(wagerAmount, 10);


            ascore = ascore + integer;
            scorea.textContent = ascore;
            wager.value = '10';
            console.log(category);
            if (category == "General Knowledge") {
                var ablueButton = document.getElementById('ageneral');
                ablueButton.style.backgroundColor = "white";
            } else if (category == "Sports") {
                var ayellowButton = document.getElementById('asports');
                ayellowButton.style.backgroundColor = "white";
            } else if (category == 'Geography') {
                var aredButton = document.getElementById('ageography')
                aredButton.style.backgroundColor = 'white';
            } else if (category == "History") {
                var agreenButton = document.getElementById('ahistory');
                agreenButton.style.backgroundColor = 'white';
            }

            var modal = document.getElementById("correctmodal");
            var span = document.getElementsByClassName("correctclose")[0];
            modal.style.display = "block";

            span.onclick = function () {
                modal.style.display = "none";
            }


        } else if (e.target.value == answer && turnCounter % 2 !== 0) {
            var wagerAmount = wager.value;
            var integer = parseInt(wagerAmount, 10);



            bscore = bscore + integer;
            scoreb.textContent = bscore;
            wager.value = '10';

            if (category == "General Knowledge") {
                var bblueButton = document.getElementById('bgeneral');
                bblueButton.style.backgroundColor = "white";
            } else if (category == "Sports") {
                var byellowButton = document.getElementById('bsports');
                byellowButton.style.backgroundColor = "white";
            } else if (category == 'Geography') {
                var bredButton = document.getElementById('bgeography')
                bredButton.style.backgroundColor = 'white';
            } else if (category == "History") {
                var bgreenButton = document.getElementById('bhistory');
                bgreenButton.style.backgroundColor = 'white';
            }

            var modal = document.getElementById("correctmodal");
            var span = document.getElementsByClassName("correctclose")[0];
            modal.style.display = "block";

            span.onclick = function () {
                modal.style.display = "none";
            }
        } else if (e.target.value !== answer && turnCounter % 2 !== 0) {
            var wagerAmount = wager.value;
            var integer = parseInt(wagerAmount, 10);

            ascore = ascore - integer;
            scorea.textContent = ascore;
            wager.value = '10';
            var modal = document.getElementById("wrongmodal");
            var span = document.getElementsByClassName("wrongclose")[0];
            modal.style.display = "block";

            span.onclick = function () {
                modal.style.display = "none";
            }
        } else if (e.target.value !== answer && turnCounter % 2 === 0) {
            var wagerAmount = wager.value;
            var integer = parseInt(wagerAmount, 10);

            bscore = bscore - integer;
            scoreb.textContent = bscore;
            wager.value = '10';
            var modal = document.getElementById("wrongmodal");
            var span = document.getElementsByClassName("wrongclose")[0];
            modal.style.display = "block";

            span.onclick = function () {
                modal.style.display = "none";
            }
        }

        questionCounter++;
        question = questions[questionCounter].question;
        //questionBox.textContent = question;
        category = questions[questionCounter].category;
        console.log(category);
        answer = questions[questionCounter].correct_answer;
        false1 = questions[questionCounter].incorrect_answers[0];
        false2 = questions[questionCounter].incorrect_answers[1];
        false3 = questions[questionCounter].incorrect_answers[2];
        questionBox = document.getElementById('question');
        questionBox.innerHTML = question;
        answerButtons = document.getElementsByTagName('input');
        answerLabels = document.getElementsByTagName('label');
        answerLabel1 = answerLabels[0];
        answerLabel2 = answerLabels[1];
        answerLabel3 = answerLabels[2];
        answerLabel4 = answerLabels[3];
        answer1 = answerButtons[0];
        answer2 = answerButtons[1];
        answer3 = answerButtons[2];
        answer4 = answerButtons[3];
        turnCounter++;
        console.log(turnCounter);
        shuffle();
    } else {
        var modal = document.getElementById("errormodal");
        var span = document.getElementsByClassName("errorclose")[0];
        modal.style.display = "block";

        span.onclick = function () {
            modal.style.display = "none";
        }
    }
    function shuffle(myAnswers) {
        myAnswers = [answer, false1, false2, false3];
        var i,
            j,
            temp;
        for (i = myAnswers.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = myAnswers[i];
            myAnswers[i] = myAnswers[j];
            myAnswers[j] = temp;
            answer1.value = myAnswers[0];
            answer2.value = myAnswers[1];
            answer3.value = myAnswers[2];
            answer4.value = myAnswers[3];
            answerLabel1.innerHTML = myAnswers[0];
            answerLabel2.innerHTML = myAnswers[1];
            answerLabel3.innerHTML = myAnswers[2];
            answerLabel4.innerHTML = myAnswers[3];
        }
        return myAnswers;



    };

    // checkWinner();
})
console.log(ablueButton.backgroundColor);

// function checkWinner() {
//     if (ascore >= 1000 && ablueButton.backgroundColor === 'white' && ayellowButton.backgroundColor === 'white' && aredButton.backgroundColor === 'white' && agreenButton.backgroundColor === 'white') {
//         alert('A is the winner');
//     } else if (bscore >= 1000 && bblueButton.backgroundColor === 'white' && byellowButton.backgroundColor === 'white' && bredButton.backgroundColor === 'white' && bgreenButton.backgroundColor === 'white') {
//         alert('B is the winner');
//     }
// }
