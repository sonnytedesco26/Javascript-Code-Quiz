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
//need to initialize timeInterval here, not in function 
var timeInterval = 0;

var questions = [
    {
        ques: "Inside which HTML element do we put the JavaScript?",
        options: ["<javascript>","<scripting>","<script>","<js>"],
        answer: "<script>"
    },
    {
        ques: "What is the correct syntax for referring to an external script called 'xxx.js?'",
        options: ['<script src="xxx.js">','<script href="xxx.js">','<script name="xxx.js">','<script="xxx.js">'],
        answer: '<script src="xxx.js">'
    },
    {
        ques: 'How do you write "Hello World" in an alert box?',
        options: ['alert("Hello World");','alertBox("Hello World");','msg("Hello World");','msgBox("Hello World");'],
        answer: 'alert("Hello World");'
    },
    {
        ques: "How do you create a function in JavaScript?",
        options: ["function = myFunction()","function myFunction()","function:myFunction()","create function myFunction()"],
        answer: "function myFunction()"
    },
    {
        ques: "What can arrays in JavaScript be used to store?",
        options: ["numbers and strings","booleans","other arrays","all of the above"],
        answer: "all of the above"
    },
    {
        ques: "Which of the following is the proper way to write an IF statement in JavaScript?",
        options: ["if i == 5 then","if (i == 5)","if i = 5 then","if i = 5"],
        answer: "if (i == 5)"
    },
    {
        ques: "What is the correct way to write a JavaScript array?",
        options: ['var colors = ["red", "green", "blue"]','var colors = (1:"red", 2:"green", 3:"blue")','var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")','var colors = "red", "green", "blue"'],
        answer: 'var colors = ["red", "green", "blue"]'
    },
    {
        ques: "How do you find the number with the highest value of x and y?",
        options: ["Math.max(x, y)","ceil(x, y)","Math.ceil(x, y)","top(x, y)"],
        answer: "Math.max(x, y)"
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
//Displays questions from question objects array
function showQuestion(questionShowing){
    question.innerText = questionShowing.ques;
    answerOne.textContent = questionShowing.options[0];
    answerTwo.textContent = questionShowing.options[1];
    answerThree.textContent = questionShowing.options[2];
    answerFour.textContent = questionShowing.options[3];
}
//shows first question, initiates timer
function startQuiz(){
    showQuestion(questions[0]);
    timer();
}
//if selected answer matches with the answer field from question object, then score increases by 10
function checkAnswer(userAnswer){
    if (userAnswer === questions[currentQuestion].answer){
        score += 10;
        //if user answers incorrectly, time goes down
    } else{
        timeLeft -= 8;
    }
    //regardless, needs to move onto the next question
    NextQuestion();
}

function NextQuestion(){
    //if  you're at the last question (-1 cause 0 index), call quiz end function
    if(currentQuestion === questions.length - 1){
        quizEnd();
    } else{
        //otherwhise, increase question index, and display the next question
        currentQuestion++;
        showQuestion(questions[currentQuestion]);
    };
}

function timer(){
    //connect with the time left text
    document.getElementById("timeLeft").innerText = timeLeft;
    //take time down by one
    timeLeft--;
    //if no time left, take you to the high score page (quiz). No need to call Endquiz again, cause issues arise if it's called
    if(timeLeft < 0){
        window.location.replace("highscore.html");
    }
    else{
        //if there's still time left, call the timer function again, redo every 1000 milliseconds
        timeInterval = setTimeout(timer, 1000);
    }
}

function quizEnd(){
    quizAnswers.remove();
    //replace question text with the resulting score
    question.textContent = "You scored " + score;  
    //adds new text, prompting user to enter initals below
    var userHighScore = document.createElement("p");
    userHighScore.textContent = "Enter initials here";
    //puts userHighScore text below "question" text
    question.appendChild(userHighScore);
    //puts user text input box below "question" text
    var initials = document.createElement("input");
    initials.setAttribute("type", "text");
    question.appendChild(initials);
    //adds save high score button below
    var saveHighScore = document.createElement("button");
    saveHighScore.setAttribute("type", "button");
    saveHighScore.textContent = "Save High Score";
    question.appendChild(saveHighScore);
    //stops timer
    clearInterval(timeInterval);

    //entering your initials takes you to the high score page where it gets displayed
    function storeScore(name, addedScore){
        localStorage.setItem("scoreAdded", JSON.stringify({name, addedScore}));
        location.replace("highscore.html");
    };

    //preventDefault used to keep the initial entry from automatically disappearing
    saveHighScore.addEventListener("click", function (object){
        object.preventDefault();
        if (initials.value === ""){
            window.alert("Please enter initials")
        } else{
            //if users actually put stuff into the initial box, call the store score function
            storeScore(initials.value, score)
        }
    });
}