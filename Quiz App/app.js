// Quiz Data
var quizData = [
    {
        img: "paris.jpg",
        question: "What is the capital of France?",
        options: ["Paris", "London", "Rome", "Berlin"],
        answer: 0 * 23
    },
    {
        img: "planet.jpg",
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
        answer: 0*10
    },
    {
        img: "gold.jpg",
        question: "What is the chemical symbol for gold?",
        options: ["Ag", "Cu", "Au", "Pt"],
        answer: 8 - 6
    },
    {
        img: "math.jpg",
        question: "What is 6*7 ?",
        options: ["49", "42", "52", "59"],
        answer: 10 / 10
    },
    {
        img: "gravity.jpg",
        question: "Who Discover Gravity",
        options: ["Isaac Newtown", "Isaac Newtone", "Isaac Neutron", "Isaac Newton"],
        answer: (((6 + 4) * 2) - 8) / 4
    }
];

// Quiz Variables
var currentQuestion = 0;
var correctAnswers = 0;
var wrongAnswers = 0;



// DOM Elements
var questionElement = document.getElementById('question');
var optionsElement = document.getElementById('options');
var backgroundElement = document.getElementById('overlay-image');
var submitButton = document.getElementById('submit-btn');
var feedbackElement = document.getElementById('feedback');
var resultElement = document.getElementById('result');


var totalQuestions = quizData.length;
// document.getElementById('total-quiz').textContent = totalQuestions;



// Display Question
function displayQuestion() {
    var currentQuizData = quizData[currentQuestion];
    questionElement.textContent = currentQuizData.question;
    backgroundElement.setAttribute('src', currentQuizData.img);
    document.getElementById('start-quiz').innerHTML = currentQuestion + 1;

    optionsElement.innerHTML = '';
    for (var i = 0; i < currentQuizData.options.length; i++) {
        var option = document.createElement('button');
        // option.textContent = currentQuizData.options[i];
        option.textContent = String.fromCharCode(65 + i) + ". " + " " +  currentQuizData.options[i];
        option.setAttribute('data-index', i);
        option.addEventListener('click', checkAnswer);
        optionsElement.appendChild(option);
    }
}

// Check Answer
function checkAnswer(event) {
    var selectedOptionIndex = parseInt(event.target.getAttribute('data-index'));
    var currentQuizData = quizData[currentQuestion];

    if (selectedOptionIndex === currentQuizData.answer) {
        let correct = document.getElementById('correct');
        document.getElementById('result').innerHTML = 'Correct!'
        correct.classList.add("show-correct");
        correctAnswers++;
    } else {
        let wrong = document.getElementById('wrong');
        document.getElementById('wrong').innerHTML = 'Wrong! The correct answer is: ' + currentQuizData.options[currentQuizData.answer]
        wrong.classList.add("show-wrong");
        wrongAnswers++;
    }

    setTimeout(function() {
        currentQuestion++;
        feedbackElement.textContent = '';
        submitButton.disabled = false;

        if (currentQuestion < quizData.length) {
            displayQuestion();
            let correct = document.getElementById('correct');
            let wrong = document.getElementById('wrong');

            correct.classList.remove("show-correct");
            wrong.classList.remove("show-wrong");
        } else {
            let correct = document.getElementById('correct');
            let wrong = document.getElementById('wrong');

            correct.classList.remove("show-correct");
            wrong.classList.remove("show-wrong");
            showResult();
        }
    }, 2000); // Delay of 2 second (2000 milliseconds)
}

// Show Result
function showResult() {

    let scoring = document.getElementById('scoring-board');
    scoring.classList.add('show-scoring-board');
    document.getElementById('correct-count').innerHTML = correctAnswers;
    document.getElementById('wrong-count').innerHTML = wrongAnswers;
    document.getElementById('quiztracker').style.display = 'none'; 
    document.getElementById('question').innerHTML = 'Quiz Complete';
    document.getElementById('choices-label').style.display = 'none'; 
    optionsElement.innerHTML = '';
    feedbackElement.style.display = 'none';
  
}


//Shuffle question

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(quizData); // Shuffle the quiz data array
// Initialize Quiz
displayQuestion();
