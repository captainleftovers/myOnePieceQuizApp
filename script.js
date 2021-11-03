const  quizData = [
    {
      question: 'Who is the main character of One Piece?' ,
      a: 'Zoro',
      b:  'Bartolomeo',
      c: ' Luffy',
      d: 'Roger',

      correct: 'c'
    } , {
        question: "Who was Luffy's first mate?" ,
        a: 'Nami',
        b: 'Sanji',
        c:'Chopper',
        d:'Zoro',

        correct: 'd'
    }, {
        question: 'Who is the Pirate King?',
        a: 'Buggy',
        b: 'Shanks',
        c:'Roger',
        d:'Ivankov',
        
        correct: 'c'

    } , {
        question: 'What kind of animal is Chopper?',
        a: 'Reindeer',
        b:'Raccoon',
        c:'Dog',
        d:'Cat',

        correct:'a'
    } , {
        question: "Who is Luffy's Father?",
        a: 'Garp',
        b:'Roger',
        c:'Dragon',
        d:'Sengoku',

        correct:'c'

    }
]

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})
