import React from 'react'
import trickQuestions from './trickQuestions'
import Questions from './Questions'

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/map;

function QuestionApp() {
    const questionComponents =
    trickQuestions.map(questions =>
        <Questions
            key={questions.id}
            question={questions.question}
            answer={questions.answer}
        />)
    return (
        <div>
            {questionComponents}
        </div>
    )
}

export default QuestionApp


