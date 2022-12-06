// list of variables

// list of questions
var questions = [
    {
        number: 1,
        title: 'Inside which HTML element do we put the JavaScript?',
        choices: ['<script>', '<javascript>','<js>','<scripting>'],
        answer: '<script>'
    },
    {
        number: 2,
        title: 'How do you create a function in JavaScript??',
        choices: ['function = myFunction()', 'function myFunction()','function:myFunction()','var function = myFunction()'],
        answer: 'function myFunction()'
    },
    {
        number: 3,
        title: 'How to write an IF statement in JavaScript?',
        choices: ['if i = 5 then', 'if i == 5 then','if (i == 5)','if i = 5'],
        answer: 'if (i == 5)'
    },
    {
        number: 4,
        title: 'How does a FOR loop start?',
        choices: ['for i = 1 to 5', 'for (i <= 5; i++)','for (i = 0; i <= 5)','for (i = 0; i <= 5; i++)'],
        answer: 'for (i = 0; i <= 5; i++)'
    },
    {
        number: 5,
        title: 'What is the correct way to write a JavaScript array?',
        choices: ['var colors = ["red", "green", "blue"]', 'var colors = "red", "green", "blue"','var colors = (1:"red", 2:"green", 3:"blue")','var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")'],
        answer: 'var colors = ["red", "green", "blue"]'
    },
    {
        number: 6,
        title: 'How do you write "Hello World" in an alert box?',
        choices: ['msgBox("Hello World")', 'alert("Hello World")','msg("Hello World")','alertBox("Hello World")'],
        answer: 'alert("Hello World")'
    }
];


// button to start game
var startBtn = document.querySelector("#start");

//hides questions until quiz starts
// var hide =$("#hide");
// hide.style.display = 'none';
// all the variable and elements

startBtn.addEventListener("click",playGame);

// var for game section
var gameHeaderEl = $('#gmeHead');

// var for question display
var questionHeadEl = $('#queHead');
var choice1El = $('#choice1');
var choice2El = $('#choice2');
var choice3El = $('#choice3');
var choice4El = $('#choice4');


// game function
function playGame () {
    gameHeaderEl.text('');
    // questionHeadEl.text('WHAT IS THE MEANING OF LIFE');
    // choice1El.text('A');
    // choice2El.text('B');
    // choice3El.text('C');
    // choice4El.text('D');
    //unhide choices
    // hide.style.display = 'block'
    console.log("LETS PLAY A GAME!");
    countdown();
    getQuestion();
   

}

// question variables
var currentQuestion = 0
var userScore = 0

// function that gets question
function getQuestion() {
    var question = questions[currentQuestion]

    questionHeadEl.text(question.title);
    choice1El.text(question.choices[0]);
    choice2El.text(question.choices[1]);
    choice3El.text(question.choices[2]);
    choice4El.text(question.choices[3]);

}

//answer question
document.getElementById("choice1").addEventListener("click", checkQuestion);
document.getElementById("choice2").addEventListener("click", checkQuestion);
document.getElementById("choice3").addEventListener("click", checkQuestion);
document.getElementById("choice4").addEventListener("click", checkQuestion);

function checkQuestion(event) {
    // // e.preventDefault();
    // if (!e.target.matches('button'))
    // return;
    
    // var element = event.target;
    // if (element.matches("button") === true) {
    //     var userAnswer = element.getAttribute("button");
    // }

    var userAnswer =$('button').click(function () {
         $(this).valueOf();
         value.innerText.questions.choices;
    }
        
    );

    // //user's answer
    // var userAnswer = e.target.textContent;
    //current question
    var question = questions[currentQuestion];
    //correct answer
    console.log(userAnswer)
    console.log(question.answer)
    console.log(question.title)
    if (userAnswer === questions.answer) {
        alert("Correct!");
    } else {
        alert("Incorrect");
        secondsLeft -= 10;
    }

    currentQuestion++
    getQuestion()
    if (currentQuestion > 6) {
        questionHeadEl.text("GAME OVER");


        
    }
    saveHighScore();


}

function saveHighScore() {
    // get initials and final score
    let initials = prompt("Enter Your Initials:");
    let finalScore = userScore + secondsLeft;
    var highScore = { init: initials, score: finalScore};   

    document.getElementById('highScore').textContent = initials + " " + finalScore;
    document.getElementById('message').textContent = lastScore;
    var lastScore = JSON.parse(localStorage.getItem("highScore"));
    localStorage.setItem("highScore", JSON.stringify(highScore));
}
    
//     var lastScore = JSON.parse(localStorage.getItem("highScore"));
//     // saving to a new object

//     localStorage.setItem("highScore", JSON.stringify(highScore));

// }

//compare results

//next question

// Need a timer
var timeEl = $('#timer');
var secondsLeft = 60;


function countdown() {
    var timerInterval = setInterval(function( ) {
        secondsLeft--;
        timeEl.text(secondsLeft + " seconds left!!!");

        if (secondsLeft < 1) {
            clearInterval(timerInterval);
            timeEl.text("GAME OVER :)");
            questionHeadEl.text("GAME OVER");
            choice1El.text('');
            choice2El.text('');
            choice3El.text('');
            choice4El.text('');
        
            return
        }
    }, 1000)

}

// Need a way to track results


