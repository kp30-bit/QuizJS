const quizData=[{
  question:"My best shot?",
  a:"Square Cut",
  b:"Square Drive",
  c:"Pull Shot",
  d:"Straight Drive",
  correct:"c",
  },
  {
    question:"My preffered position to bat?",
    a:"Opening Striker's End",
    b:"Opening Non Striker's End",
    c:"first down",
    d:"second down",
    correct:"a",
  },
  {
    question:"Which player do I idolize?",
    a:"Rahul Dravid",
    b:"MS Dhoni",
    c:"Sachin Tendulkar",
    d:"Yuvraj Singh",
    correct:"a",
  }

];
let index = 0;
let correct = 0,
    incorrect = 0,
    total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']");


document.querySelector("#submit").addEventListener(
    "click",
    function() {
        const data = quizData[index] //data is a dictionary
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
            <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
        </div>
    `
}
const loadQuestion = () => {
    if (total === index) {
        return quizEnd()
    }
    reset()
    const data = quizData[index]
    questionBox.innerHTML = `${index + 1}) ${data.question}`
    document.getElementById("op1").innerHTML=data.a
    document.getElementById("op2").innerHTML=data.b
    document.getElementById("op3").innerHTML=data.c
    document.getElementById("op4").innerHTML=data.d
}
loadQuestion(index);
