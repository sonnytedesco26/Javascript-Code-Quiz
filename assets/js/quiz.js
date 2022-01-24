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
var timeLeft = 60;

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
    },
];

function showQuestion()