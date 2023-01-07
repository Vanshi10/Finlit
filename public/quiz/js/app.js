const quizData = [{
    question: "Where do you fall in terms of age?",
    a: "Below 18 ",
    b: "from 18 to 23",
    c: "from 23 to 32",
    d: "Above 32",
    correct: "a",
},
{
    question: "What is your annual income?",
    a: "1000",
    b: "10,000-1,00,000",
    c: "10,00,000",
    d: "Above 10,00,000",
    correct: "a",
},
{
    question: "Are you ever done saving?",
    a: "Yes regularly",
    b: "No",
    c: "Sometimes",
    d: "depends upon earning",
    correct: "b",
},
{
    question: "How will you describe your knowledge about personal finances?",
    a: "Fundamental/Basic",
    b: "Intermediate",
    c: "Advance",
    d: "Expert",
    correct: "b",
},
{
    question: "How important is it for you to have emergency funds?",
    a: "Extremely important",
    b: "Somewhat important",
    c: "Not so important",
    d: "I am not sure",
    correct: "b",
},
{
    question: "How much of your income should go toward housing?",
    a: "Upto 10,000",
    b: "Upto 50,000",
    c: "Upto 1,00,000",
    d: "More than 1,00,000",
    correct: "b",
},
{
    question: "Which of the below insurances do you have?",
    a: "Life / Health",
    b: "Home",
    c: "Long Term Care / Other",
    d: "None",
    correct: "b",
}
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
allInputs[4].nextElementSibling.innerText = data.e
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Thanks your level is ${correct} / ${total} </h3>
    </div>
`
}
loadQuestion(index);
