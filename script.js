const quizData = [
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correct: "4",
    },
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: "Paris",
    },
    {
        question: "Which language runs in the browser?",
        options: ["Java", "C", "Python", "JavaScript"],
        correct: "JavaScript",
    },
];

const quiz = document.getElementById('quiz');
const submitBtn = document.getElementById('submit');
const result = document.getElementById('result');
const scoreEl = document.getElementById('score'); // Fixed typo in scoreEl

// Render the quiz
let currentQuiz = 0;
let score = 0;

const loadQuiz = () => {
    quiz.innerHTML = `
        <h2>${quizData[currentQuiz].question}</h2>
        <div>
            
            ${quizData[currentQuiz].options
                .map(
                    (option, index) => `
                    <div>
                        <input type="radio" id="option${index}" name="answer" value="${option}">
                        <label for="option${index}">${option}</label>
                    </div>
                `
                )
                .join('')}
        </div>
    `;
};

// Check the answer
const checkAnswer = () => {
    const answers = document.getElementsByName('answer');
    let selectedAnswer;
    answers.forEach((answer) => {
        if (answer.checked) {
            selectedAnswer = answer.value;
        }
    });

    if (selectedAnswer === quizData[currentQuiz].correct) {
        score++;
    }
};

// Event listener
submitBtn.addEventListener('click', () => {
    checkAnswer();
    currentQuiz++;

    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        quiz.classList.add('hidden');
        result.classList.remove('hidden');
        scoreEl.innerText = `${score}/${quizData.length}`;
    }
});

// Initialize the quiz
loadQuiz();
