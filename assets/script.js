
//function that displays the last saved score from local storage
renderLastScore();

function renderLastScore () {
    var lastEntry = JSON.parse(localStorage.getItem('highScore'));
    
    var lastScore = lastEntry.score;
    var lastUser = lastEntry.init
    $("#highScore").text(lastUser + lastScore)
}

//global variable for buttonclick 
var userAnswer = " "
    $('button').on("click", function (event) {
        userAnswer = $(this).text();
       console.log(userAnswer);
    }
        
    );



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
$("#hide").hide()


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
    countdown();
    
    $("#hide").show()
    gameHeaderEl.text('');
  
    console.log("LETS PLAY A GAME!");
    
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

//code to answer questions

document.getElementById("choice1").addEventListener("click", checkQuestion);
document.getElementById("choice2").addEventListener("click", checkQuestion);
document.getElementById("choice3").addEventListener("click", checkQuestion);
document.getElementById("choice4").addEventListener("click", checkQuestion);

// compares user's answer to the correct answer
function checkQuestion(event) {
  
    var question = questions[currentQuestion];

    if (userAnswer === question.answer) {
        alert("Correct!");
        userScore += 5
    } else {
        alert("Incorrect");
        secondsLeft -= 10;
    }
    if(currentQuestion < questions.length -1){
    currentQuestion++
    getQuestion()
    }
    else{
        endGame();
        timeEl.text("Your FinalScore:" + ( userScore + secondsLeft));
        saveHighScore();
    }
}

// function that occurs once the game ends
function endGame(){ 
    
    questionHeadEl.text("GAME OVER");
    console.log("game over!");
    $("#hide").hide();
    clearInterval(timerInterval);
}


function saveHighScore() {
    // get initials and final score
    let initials = prompt("Enter Your Initials:");
    let finalScore = userScore + secondsLeft;
    console.log("final score = " + finalScore);
    var highScore = { init: initials, score: finalScore};
    var lastScore = JSON.parse(localStorage.getItem("highScore"))
      

    document.getElementById('highScore').textContent = initials + " " + finalScore;
    document.getElementById('message').textContent = lastScore;
    var lastScore = JSON.parse(localStorage.getItem("highScore"));
    localStorage.setItem("highScore", JSON.stringify(highScore));
}
    

var timeEl = $('#timer');
var secondsLeft = 45;

var timerInterval 
function countdown() {
     timerInterval = setInterval(function( ) {
        secondsLeft--;
        timeEl.text(secondsLeft + " seconds left!!!");

        if (secondsLeft < 1) {
            timeEl.text("Your Final Score:" + ( userScore + secondsLeft));
            endGame();
            saveHighScore();
            
        }
    }, 1000)

}



