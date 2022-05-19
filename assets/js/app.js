const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const questionImageElement = document.getElementById('question-image')
var progressBarValue = 10;
let playerName = ""
let pointsReceived = 0;

let shuffledQuestions, currentQuestionIndex 

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click' , () => {
    currentQuestionIndex++ // Adding 1 to the currentQuestionIndex
    setNextQuestion() //Calling the setNextQuestion to get next question
})

function startGame(){
    console.log('The Game has Begun')
    startButton.classList.add('hide')// Here we are hiding the startGame Button for the moment
    shuffledQuestions = questions.sort(() => Math.random() - .5)//Less than or more than 0 which will shuffle our questions for us
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')//Question Container has hide class, we now remove it to show questions
    setNextQuestion()// Here we set the next question for the user
    document.getElementById('progressBar').style.width = (10 + '%')
    document.getElementById('welcomeRulesMessage').innerHTML = `
    <h2>Hello ${playerName}, welcome to the rules page!</h2>`
    document.getElementById('firstName').innerHTML = `
    <input type="text" class="form-control" id="inputFirstName" value="${playerName}" placeholder="${playerName}" name="First Name" required>`
}


function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
    
}

function increaseProgressBar (){
    progressBarValue += 10;
    document.getElementById('progressBar').style.width = (progressBarValue + '%')
    console.log(progressBarValue)
}

function showQuestion(question){
    questionElement.innerHTML = question.question // Changes Question Text
    questionImageElement.innerHTML = question.image // Changes Question Image
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerHTML = answer.text // Changes Question Answer
        button.classList.add('btn') // Change the classlist of button to btn
        if (answer.correct) { 
            button.dataset.correct = answer.correct // Only set to true
            pointsReceived += 10;
            console.log("Points received is" + pointsReceived)

        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState(){
    clearStatusClass(document.body) // To reset the color of background inbetween questions
    nextButton.classList.add('hide') // Hiding the next button while within the questions
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target //Button pressed or selected
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct) // Check if set to correct or wrong
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) { 
        /*If the shuffled questions amount is greater than current question amount then show next button 
        else change text to restart and remove the hide button*/
        nextButton.classList.remove('hide') //We are removing the classlist hide to show nextButton
    } else {
        startButton.innerHTML = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    /*If correct we want to add correct class else add wrong class*/
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

 function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'What Country is this?',
        image: "<img src='assets/images/bangladesh.webp'>",
        answers: [
            {text: 'Japan', correct: false},
            {text: 'Bangladesh', correct: true},
            {text: 'Brazil', correct: false},
            {text: 'Antarctica', correct: false},
            
        ]
    },
    {
        question: 'What Country is this?',
        image: "<img src='assets/images/indonesia.webp'>",
        answers: [
            {text: 'Vietnam', correct: false},
            {text: 'China', correct: false},
            {text: 'Indonesia', correct: true},
            {text: 'Monaco', correct: false},
            
        ]
    },
    {
        question: 'What Country is this?',
        image: "<img src='assets/images/kazakhstan.webp'>",
        answers: [
            {text: 'Iraq', correct: false},
            {text: 'Kazakhstan', correct: true},
            {text: 'UAE', correct: false},
            {text: 'Egypt', correct: false},
            
        ]
    },
    {
        question: 'What Country is this?',
        image: "<img src='assets/images/laos.webp'>",
        answers: [
            {text: 'Laos', correct: true},
            {text: 'Japan', correct: false},
            {text: 'Bangladesh', correct: false},
            {text: 'Palau', correct: false},
            
        ]
    },
    {
        question: 'What Country is this?',
        image: "<img src='assets/images/lebanon.webp'>",
        answers: [
            {text: 'Ammam', correct: false},
            {text: 'Jerusalem', correct: false},
            {text: 'Nicosia', correct: false},
            {text: 'Lebanon', correct: true},
            
        ]
    },
    {
        question: 'What Country is this?',
        image: "<img src='assets/images/nepal.webp'>",
        answers: [
            {text: 'China', correct: false},
            {text: 'Nepal', correct: true},
            {text: 'Ethiopia', correct: false},
            {text: 'Uraguay', correct: false},
            
        ]
    },
    {
        question: 'What Country is this?',
        image: "<img src='assets/images/netherlands.webp'>",
        answers: [
            {text: 'Luxemburg', correct: false},
            {text: 'Russia', correct: false},
            {text: 'Netherlands', correct: true},
            {text: 'Thailand', correct: false},
            
        ]
    },
    {
        question: 'What Country is this?',
        image: "<img src='assets/images/philippines.webp'>",
        answers: [
            {text: 'Japan', correct: false},
            {text: 'Palau', correct: false},
            {text: 'Malaysia', correct: false},
            {text: 'Philippines', correct: true},
            
        ]
    },
    {
        question: 'What Country is this?',
        image: "<img src='assets/images/romania.webp'>",
        answers: [
            {text: 'Chad', correct: false},
            {text: 'Monaco', correct: false},
            {text: 'Luxemburg', correct: false},
            {text: 'Romania', correct: true},
            
        ]
    },
    {
        question: 'What Country is this?',
        image: "<img src='assets/images/thailand.webp'>",
        answers: [
            {text: 'Malaysia', correct: false},
            {text: 'Thailand', correct: true},
            {text: 'Vietnam', correct: false},
            {text: 'Netherlands', correct: false},
            
        ]
    }
]





/*Start of Show and Hide Sections found in StackOverFlow = https://stackoverflow.com/questions/8211128/multiple-distinct-pages-in-one-html-file*/
function show(shown, hidden) {
  document.getElementById(shown).style.display='block';
  document.getElementById(hidden).style.display='none';
  return false;
}

/*Start of Rules Modal*/

//Grab the Modal
var rulesModal = document.getElementById('openRulesModal');

//Grab the button that opens the modal - This is in the navBar
var rulesModalBtn = document.getElementById('openRules');

//Get the <span> element that closes the modal
var closeRulesModal = document.getElementsByClassName('closeRulesModal')[0];

//When the user clicks on the button, open the Rules Modal
rulesModalBtn.onclick = function(){
    rulesModal.style.display = "block";
}

//When the user clicks on <span> (x), then close the rulesModal
closeRulesModal.onclick = function() {
    rulesModal.style.display = "none";
}

//When the user clicks anywhere outside the rulesModal, then close it
window.onclick = function(event) {
    if (event.target == rulesModal) {
    rulesModal.style.display = "none";
    }
}

function captureName(){
    //get the start username button
    var startUsernameButton = document.getElementById('start-username-button');
    startUsernameButton.addEventListener('click', captureUsername);
    function captureUsername(e) {
        e.preventDefault()
        let username = document.getElementById('name');
        if (username.value == ('')) {
        playerName = 'Player 1';
        console.log(playerName)
        usernameModal.style.display = "none";
        startGame()
        } else {
            playerName = username.value;
            console.log(playerName)
            usernameModal.style.display = "none";
            startGame()
        }
    }
}

/*Start of username Modal*/

//Grab the Modal
var usernameModal = document.getElementById('openUsernameModal');

//Get the <span> element that closes the modal
var closeUsernameModal = document.getElementsByClassName('closeUsernameModal')[0];

//When the user clicks on the button, open the username Modal
onload = function(){
    usernameModal.style.display = "block";
}

/*Start of contact form Modal*/

//Grab the Modal
var contactForm = document.getElementById('openContactForm');

//Grab the button that opens the modal - This is in the navBar
var contactModalBtn = document.getElementById('contactModalBtn');

//Get the <span> element that closes the modal
var closeContactModal = document.getElementsByClassName('closeContactModal')[0];

//When the user clicks on the button, open the Rules Modal
contactModalBtn.onclick = function(){
    contactForm.style.display = "block";
}

//When the user clicks on <span> (x), then close the rulesModal
closeContactModal.onclick = function() {
    contactForm.style.display = "none";
}

//When the user clicks anywhere outside the rulesModal, then close it
window.onclick = function(event) {
    if (event.target == contactForm) {
        contactForm.style.display = "none";
    }
}


