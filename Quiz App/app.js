// // Quiz Data
// var quizData = [
//     {
//         img: "paris.jpg",
//         question: "What is the capital of France?",
//         options: ["Paris", "London", "Rome", "Berlin"],
//         answer: 0
//     },
//     {
//         img: "planet.jpg",
//         question: "Which planet is known as the Red Planet?",
//         options: ["Mars", "Venus", "Jupiter", "Saturn"],
//         answer: 0
//     },
//     {
//         img: "gold.jpg",
//         question: "What is the chemical symbol for gold?",
//         options: ["Ag", "Cu", "Au", "Pt"],
//         answer: 2
//     },
//     {
//         img: "math.jpg",
//         question: "What is 6*7 ?",
//         options: ["49", "42", "52", "59"],
//         answer: 1
//     },
//     {
//         img: "gravity.jpg",
//         question: "Who Discover Gravity",
//         options: ["Isaac Newtown", "Isaac Newtone", "Isaac Neutron", "Isaac Newton"],
//         answer: 3
//     }
// ];

// // Quiz Variables
// var currentQuestion = 0;
// var correctAnswers = 0;
// var wrongAnswers = 0;



// // DOM Elements
// var questionElement = document.getElementById('question');
// var optionsElement = document.getElementById('options');
// var backgroundElement = document.getElementById('overlay-image');
// var submitButton = document.getElementById('submit-btn');
// var feedbackElement = document.getElementById('feedback');
// var resultElement = document.getElementById('result');


// var totalQuestions = quizData.length;
// document.getElementById('total-quiz').innerHTML = totalQuestions;



// // Display Question
// function displayQuestion() {
//     var currentQuizData = quizData[currentQuestion];
//     questionElement.textContent = currentQuizData.question;
//     backgroundElement.setAttribute('src', currentQuizData.img);
//     document.getElementById('start-quiz').innerHTML = currentQuestion + 1;

//     optionsElement.innerHTML = '';
//     for (var i = 0; i < currentQuizData.options.length; i++) {
//         var option = document.createElement('button');
//         option.textContent = currentQuizData.options[i];
//         option.setAttribute('data-index', i);
//         option.addEventListener('click', checkAnswer);
//         optionsElement.appendChild(option);
//     }
// }

// // Check Answer
// function checkAnswer(event) {
//     var selectedOptionIndex = parseInt(event.target.getAttribute('data-index'));
//     var currentQuizData = quizData[currentQuestion];

//     if (selectedOptionIndex === currentQuizData.answer) {
//         let correct = document.getElementById('correct');
//         document.getElementById('result').innerHTML = 'Correct!'
//         correct.classList.add("show-correct");
//         correctAnswers++;
//     } else {
//         let wrong = document.getElementById('wrong');
//         document.getElementById('wrong').innerHTML = 'Wrong! The correct answer is: ' + currentQuizData.options[currentQuizData.answer]
//         wrong.classList.add("show-wrong");
//         wrongAnswers++;
//     }

//     setTimeout(function() {
//         currentQuestion++;
//         feedbackElement.textContent = '';
//         submitButton.disabled = false;

//         if (currentQuestion < quizData.length) {
//             displayQuestion();
//             let correct = document.getElementById('correct');
//             let wrong = document.getElementById('wrong');

//             correct.classList.remove("show-correct");
//             wrong.classList.remove("show-wrong");
//         } else {
//             let correct = document.getElementById('correct');
//             let wrong = document.getElementById('wrong');

//             correct.classList.remove("show-correct");
//             wrong.classList.remove("show-wrong");
//             showResult();
//         }
//     }, 2000); // Delay of 2 second (2000 milliseconds)
// }

// // Show Result
// function showResult() {

//     let scoring = document.getElementById('scoring-board');
//     scoring.classList.add('show-scoring-board');
//     document.getElementById('correct-count').innerHTML = correctAnswers;
//     document.getElementById('wrong-count').innerHTML = wrongAnswers;

//     var overlayImage = document.getElementById('overlay-image');
//     overlayImage.classList.add('show-confiti');


    


//     document.getElementById('question').innerHTML = 'Quiz Complete';
//     document.getElementById('choices-label').style.display = 'none';
//     optionsElement.innerHTML = '';
//     feedbackElement.style.display = 'none';
  
// }

// function shuffleArray(array) {
//     for (var i = array.length - 1; i > 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
// }

// shuffleArray(quizData); // Shuffle the quiz data array
// // Initialize Quiz
// displayQuestion();



var _0x5fd5=["\x70\x61\x72\x69\x73\x2E\x6A\x70\x67","\x57\x68\x61\x74\x20\x69\x73\x20\x74\x68\x65\x20\x63\x61\x70\x69\x74\x61\x6C\x20\x6F\x66\x20\x46\x72\x61\x6E\x63\x65\x3F","\x50\x61\x72\x69\x73","\x4C\x6F\x6E\x64\x6F\x6E","\x52\x6F\x6D\x65","\x42\x65\x72\x6C\x69\x6E","\x70\x6C\x61\x6E\x65\x74\x2E\x6A\x70\x67","\x57\x68\x69\x63\x68\x20\x70\x6C\x61\x6E\x65\x74\x20\x69\x73\x20\x6B\x6E\x6F\x77\x6E\x20\x61\x73\x20\x74\x68\x65\x20\x52\x65\x64\x20\x50\x6C\x61\x6E\x65\x74\x3F","\x4D\x61\x72\x73","\x56\x65\x6E\x75\x73","\x4A\x75\x70\x69\x74\x65\x72","\x53\x61\x74\x75\x72\x6E","\x67\x6F\x6C\x64\x2E\x6A\x70\x67","\x57\x68\x61\x74\x20\x69\x73\x20\x74\x68\x65\x20\x63\x68\x65\x6D\x69\x63\x61\x6C\x20\x73\x79\x6D\x62\x6F\x6C\x20\x66\x6F\x72\x20\x67\x6F\x6C\x64\x3F","\x41\x67","\x43\x75","\x41\x75","\x50\x74","\x6D\x61\x74\x68\x2E\x6A\x70\x67","\x57\x68\x61\x74\x20\x69\x73\x20\x36\x2A\x37\x20\x3F","\x34\x39","\x34\x32","\x35\x32","\x35\x39","\x67\x72\x61\x76\x69\x74\x79\x2E\x6A\x70\x67","\x57\x68\x6F\x20\x44\x69\x73\x63\x6F\x76\x65\x72\x20\x47\x72\x61\x76\x69\x74\x79","\x49\x73\x61\x61\x63\x20\x4E\x65\x77\x74\x6F\x77\x6E","\x49\x73\x61\x61\x63\x20\x4E\x65\x77\x74\x6F\x6E\x65","\x49\x73\x61\x61\x63\x20\x4E\x65\x75\x74\x72\x6F\x6E","\x49\x73\x61\x61\x63\x20\x4E\x65\x77\x74\x6F\x6E","\x71\x75\x65\x73\x74\x69\x6F\x6E","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x6F\x70\x74\x69\x6F\x6E\x73","\x6F\x76\x65\x72\x6C\x61\x79\x2D\x69\x6D\x61\x67\x65","\x73\x75\x62\x6D\x69\x74\x2D\x62\x74\x6E","\x66\x65\x65\x64\x62\x61\x63\x6B","\x72\x65\x73\x75\x6C\x74","\x6C\x65\x6E\x67\x74\x68","\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C","\x74\x6F\x74\x61\x6C\x2D\x71\x75\x69\x7A","\x74\x65\x78\x74\x43\x6F\x6E\x74\x65\x6E\x74","\x73\x72\x63","\x69\x6D\x67","\x73\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65","\x73\x74\x61\x72\x74\x2D\x71\x75\x69\x7A","","\x62\x75\x74\x74\x6F\x6E","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x64\x61\x74\x61\x2D\x69\x6E\x64\x65\x78","\x63\x6C\x69\x63\x6B","\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x67\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65","\x74\x61\x72\x67\x65\x74","\x61\x6E\x73\x77\x65\x72","\x63\x6F\x72\x72\x65\x63\x74","\x43\x6F\x72\x72\x65\x63\x74\x21","\x73\x68\x6F\x77\x2D\x63\x6F\x72\x72\x65\x63\x74","\x61\x64\x64","\x63\x6C\x61\x73\x73\x4C\x69\x73\x74","\x77\x72\x6F\x6E\x67","\x57\x72\x6F\x6E\x67\x21\x20\x54\x68\x65\x20\x63\x6F\x72\x72\x65\x63\x74\x20\x61\x6E\x73\x77\x65\x72\x20\x69\x73\x3A\x20","\x73\x68\x6F\x77\x2D\x77\x72\x6F\x6E\x67","\x64\x69\x73\x61\x62\x6C\x65\x64","\x72\x65\x6D\x6F\x76\x65","\x73\x63\x6F\x72\x69\x6E\x67\x2D\x62\x6F\x61\x72\x64","\x73\x68\x6F\x77\x2D\x73\x63\x6F\x72\x69\x6E\x67\x2D\x62\x6F\x61\x72\x64","\x63\x6F\x72\x72\x65\x63\x74\x2D\x63\x6F\x75\x6E\x74","\x77\x72\x6F\x6E\x67\x2D\x63\x6F\x75\x6E\x74","\x73\x68\x6F\x77\x2D\x63\x6F\x6E\x66\x69\x74\x69","\x51\x75\x69\x7A\x20\x43\x6F\x6D\x70\x6C\x65\x74\x65","\x64\x69\x73\x70\x6C\x61\x79","\x73\x74\x79\x6C\x65","\x63\x68\x6F\x69\x63\x65\x73\x2D\x6C\x61\x62\x65\x6C","\x6E\x6F\x6E\x65","\x72\x61\x6E\x64\x6F\x6D","\x66\x6C\x6F\x6F\x72"];var quizData=[{img:_0x5fd5[0],question:_0x5fd5[1],options:[_0x5fd5[2],_0x5fd5[3],_0x5fd5[4],_0x5fd5[5]],answer:0},{img:_0x5fd5[6],question:_0x5fd5[7],options:[_0x5fd5[8],_0x5fd5[9],_0x5fd5[10],_0x5fd5[11]],answer:0},{img:_0x5fd5[12],question:_0x5fd5[13],options:[_0x5fd5[14],_0x5fd5[15],_0x5fd5[16],_0x5fd5[17]],answer:2},{img:_0x5fd5[18],question:_0x5fd5[19],options:[_0x5fd5[20],_0x5fd5[21],_0x5fd5[22],_0x5fd5[23]],answer:1},{img:_0x5fd5[24],question:_0x5fd5[25],options:[_0x5fd5[26],_0x5fd5[27],_0x5fd5[28],_0x5fd5[29]],answer:3}];var currentQuestion=0;var correctAnswers=0;var wrongAnswers=0;var questionElement=document[_0x5fd5[31]](_0x5fd5[30]);var optionsElement=document[_0x5fd5[31]](_0x5fd5[32]);var backgroundElement=document[_0x5fd5[31]](_0x5fd5[33]);var submitButton=document[_0x5fd5[31]](_0x5fd5[34]);var feedbackElement=document[_0x5fd5[31]](_0x5fd5[35]);var resultElement=document[_0x5fd5[31]](_0x5fd5[36]);var totalQuestions=quizData[_0x5fd5[37]];document[_0x5fd5[31]](_0x5fd5[39])[_0x5fd5[38]]= totalQuestions;function displayQuestion(){var _0xad9axd=quizData[currentQuestion];questionElement[_0x5fd5[40]]= _0xad9axd[_0x5fd5[30]];backgroundElement[_0x5fd5[43]](_0x5fd5[41],_0xad9axd[_0x5fd5[42]]);document[_0x5fd5[31]](_0x5fd5[44])[_0x5fd5[38]]= currentQuestion+ 1;optionsElement[_0x5fd5[38]]= _0x5fd5[45];for(var _0xad9axe=0;_0xad9axe< _0xad9axd[_0x5fd5[32]][_0x5fd5[37]];_0xad9axe++){var _0xad9axf=document[_0x5fd5[47]](_0x5fd5[46]);_0xad9axf[_0x5fd5[40]]= _0xad9axd[_0x5fd5[32]][_0xad9axe];_0xad9axf[_0x5fd5[43]](_0x5fd5[48],_0xad9axe);_0xad9axf[_0x5fd5[50]](_0x5fd5[49],checkAnswer);optionsElement[_0x5fd5[51]](_0xad9axf)}}function checkAnswer(_0xad9ax11){var _0xad9ax12=parseInt(_0xad9ax11[_0x5fd5[53]][_0x5fd5[52]](_0x5fd5[48]));var _0xad9axd=quizData[currentQuestion];if(_0xad9ax12=== _0xad9axd[_0x5fd5[54]]){let _0xad9ax13=document[_0x5fd5[31]](_0x5fd5[55]);document[_0x5fd5[31]](_0x5fd5[36])[_0x5fd5[38]]= _0x5fd5[56];_0xad9ax13[_0x5fd5[59]][_0x5fd5[58]](_0x5fd5[57]);correctAnswers++}else {let _0xad9ax14=document[_0x5fd5[31]](_0x5fd5[60]);document[_0x5fd5[31]](_0x5fd5[60])[_0x5fd5[38]]= _0x5fd5[61]+ _0xad9axd[_0x5fd5[32]][_0xad9axd[_0x5fd5[54]]];_0xad9ax14[_0x5fd5[59]][_0x5fd5[58]](_0x5fd5[62]);wrongAnswers++};setTimeout(function(){currentQuestion++;feedbackElement[_0x5fd5[40]]= _0x5fd5[45];submitButton[_0x5fd5[63]]= false;if(currentQuestion< quizData[_0x5fd5[37]]){displayQuestion();let _0xad9ax13=document[_0x5fd5[31]](_0x5fd5[55]);let _0xad9ax14=document[_0x5fd5[31]](_0x5fd5[60]);_0xad9ax13[_0x5fd5[59]][_0x5fd5[64]](_0x5fd5[57]);_0xad9ax14[_0x5fd5[59]][_0x5fd5[64]](_0x5fd5[62])}else {let _0xad9ax13=document[_0x5fd5[31]](_0x5fd5[55]);let _0xad9ax14=document[_0x5fd5[31]](_0x5fd5[60]);_0xad9ax13[_0x5fd5[59]][_0x5fd5[64]](_0x5fd5[57]);_0xad9ax14[_0x5fd5[59]][_0x5fd5[64]](_0x5fd5[62]);showResult()}},2000)}function showResult(){let _0xad9ax16=document[_0x5fd5[31]](_0x5fd5[65]);_0xad9ax16[_0x5fd5[59]][_0x5fd5[58]](_0x5fd5[66]);document[_0x5fd5[31]](_0x5fd5[67])[_0x5fd5[38]]= correctAnswers;document[_0x5fd5[31]](_0x5fd5[68])[_0x5fd5[38]]= wrongAnswers;var _0xad9ax17=document[_0x5fd5[31]](_0x5fd5[33]);_0xad9ax17[_0x5fd5[59]][_0x5fd5[58]](_0x5fd5[69]);document[_0x5fd5[31]](_0x5fd5[30])[_0x5fd5[38]]= _0x5fd5[70];document[_0x5fd5[31]](_0x5fd5[73])[_0x5fd5[72]][_0x5fd5[71]]= _0x5fd5[74];optionsElement[_0x5fd5[38]]= _0x5fd5[45];feedbackElement[_0x5fd5[72]][_0x5fd5[71]]= _0x5fd5[74]}function shuffleArray(_0xad9ax19){for(var _0xad9axe=_0xad9ax19[_0x5fd5[37]]- 1;_0xad9axe> 0;_0xad9axe--){var _0xad9ax1a=Math[_0x5fd5[76]](Math[_0x5fd5[75]]()* (_0xad9axe+ 1));[_0xad9ax19[_0xad9axe],_0xad9ax19[_0xad9ax1a]]= [_0xad9ax19[_0xad9ax1a],_0xad9ax19[_0xad9axe]]}}shuffleArray(quizData);displayQuestion()