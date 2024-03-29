document.addEventListener('DOMContentLoaded', () => {
    console.log('Initializing quiz game...');

    class QuizGame {
        constructor() {
            console.log('Initializing QuizGame instance...');
            this.quizContainer = document.getElementById('quiz-container');
            this.questionElement = document.getElementById('question');
            this.answerButtonsElement = document.getElementById('answer-buttons');
            this.resultContainer = document.getElementById('result-container');
            this.progressBar = document.getElementById('progress-bar');
            this.progressBarText = document.getElementById('progress-text');
            this.currentQuestionIndex = 0;
            this.typeScores = {};
            this.userName = '';

            this.questions = window.questions;
            this.roommateTypeDescriptions = window.roommateTypeDescriptions;

            this.startQuiz(); // Start quiz directly without intro or signup
            this.setupEventListeners(); // Keep setupEventListeners for future expansion
        }

        setupEventListeners() {
            // No need for event listeners related to intro or signup
        }

        startQuiz() {
            console.log('Starting quiz...');
            this.quizContainer.classList.remove('hidden');
            this.setNextQuestion();
        }

        // Rest of the methods remain the same
        // ...
    }

    // Initialization check.
    if (window.questions && window.roommateTypeDescriptions) {
        console.log('Questions and descriptions available. Initializing QuizGame...');
        new QuizGame();
    } else {
        console.error('Quiz initialization failed: Missing questions or descriptions.');
    }
});
