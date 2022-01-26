var answerOne = document.getElementById("answerOne");
var answerTwo = document.getElementById("answerTwo");
var answerThree = document.getElementById("answerThree");
var answerFour = document.getElementById("answerFour");
var answerFive = document.getElementById("answerFive");
var answerSix = document.getElementById("answerSix");
var answerSeven = document.getElementById("answerSeven");
var answerEight = document.getElementById("answerEight");
var question = document.getElementById("ques");
var quesBox = document.getElementById("quesBox");
var score = 0;
var currentQuestion = 0;
var quizAnswers = document.getElementById("quizAnswers");
var timeLeft = 60;
var timeInterval = 0;

var questions = [
    {
        ques: "Inside which HTML element do we put the JavaScript?",
        options: ["<javascript>","<scripting>","<script>","<js>"],
        answer: "<script>"
    }

];

loadQuiz();

function loadQuiz(){
    startQuiz();
    quizAnswers.addEventListener("click", function(object){
        var buttonClicked = object.target;
        checkAnswer(buttonClicked.innerText);
    });
}

function showQuestion(questionShowing){
    question.innerText = questionShowing.ques;
    answerOne.textContent = questionShowing.options[0];
    answerTwo.textContent = questionShowing.options[1];
    answerThree.textContent = questionShowing.options[2];
    answerFour.textContent = questionShowing.options[3];
}

function checkAnswer(userAnswer){
    if (userAnswer === questions[currentQuestion].answer){
        score += 10;
        console.log(score);
    } else{
        timeLeft -= 7;
    }
    NextQuestion();
}

function NextQuestion(){
    if(currentQuestion === questions.length - 1){
        quizEnd();
    } else{
        currentQuestion++;
        showQuestion(questions[currentQuestion]);
    };
}

function timer(){
    document.getElementById("timeLeft").innerText = timeLeft;
    timeLeft--;
    if(timeLeft <= 0){
        window.location.replace("highscore.html");
    }
    else{
        timeInterval = setTimeout(timer, 1000);
    }
}

function startQuiz(){
    showQuestion(questions[0]);
    timer();
}

function quizEnd(){
    quizAnswers.remove();
    question.textContent = "You scored " + score;  
    var userHighScore = document.createElement("p");
    userHighScore.textContent = "Enter initials here";
    question.appendChild(userHighScore);
    var initials = document.createElement("input");
    initials.setAttribute("type", "text");
    question.appendChild(initials);
    var saveHighScore = document.createElement("button");
    saveHighScore.setAttribute("type", "button");
    saveHighScore.textContent = "Save High Score";
    question.appendChild(saveHighScore);
    clearInterval(timeInterval);

    saveHighScore.addEventListener("click", function (object){
        if (initials.value === ""){
            window.alert("Please enter initials")
        } else{
            storeScore(initials.value, score)
        }

    function storeScore(name, addedScore){
        localStorage.setItem("scoreAdded", JSON.stringify({name, addedScore}));
        location.replace("highscore.html");
    };
    });
}

/////// HIGHSCORE SECTION

var highScores = document.getElementById('HighScoreList');
var clear = document.getElementById("clearButton");
var addScore = JSON.parse(localStorage.getItem("ScoreAdded"));


if(addScore){

}


function clearHighScores(){
    clearButton.addEventListener("click", function(object){
        localStorage.clear();
        scoreArray = [];
        highScores.textContent = "";
    });
}

function saveScores(){
    scoreArray.push(entry);
    scoreArray.sort(function (a,b) {return b - a});
    console.log(scoreArray);
    localStorage.setItem("scoreArray", JSON.stringify(scoreArray));
}

function listScores(){
    for (i=0;i<scoreArray.length;i++){
        var newScore = document.createElement("p");
        newScore.textContent = scoreArray[i].name + "     " + scoreArray[i].newScore;
        highScores.appendChild(newScore);
    }
}