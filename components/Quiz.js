import React from "react"

export default function Quiz(props) {

    let questionList = props.questions.results.map(q => ({
            question: q.question,
            answerOptions: q.incorrect_answers,
            correctAnswer: q.correct_answer,
            selected: 0,
            correct: 4,
            key: q.question
        }))
    
    for (let i = 0; i < props.answers.length; i++) {
        questionList[i].selected = props.answers[i].selected
    }
    
    // map over all question object to return html for the question and answer tiles
    const questionElements = questionList.map((q, index) => {
        return (
            <div className="question-tile">
                <h3 className={`question ${props.theme}`}>{q.question}</h3>
                <button 
                    className={q.selected === 1 ? "answer-selected" : "answer"}
                    id={q.answerOptions[0]}
                    value={q.answerOptions[0]}
                    name={q.question}
                    onClick={() => props.handleClick(index, 1)}
                >{q.answerOptions[0]}</button>
                <button 
                    className={q.selected === 2 ? "answer-selected" : "answer"} 
                    id={q.answerOptions[1]}
                    value={q.answerOptions[1]}
                    name={q.question}
                    onClick={() => props.handleClick(index, 2)}
                >{q.answerOptions[1]}</button>
                {q.answerOptions[2] && <button 
                    className={q.selected === 3 ? "answer-selected" : "answer"}
                    id={q.answerOptions[2]}
                    value={q.answerOptions[2]}
                    name={q.question}
                    onClick={() => props.handleClick(index, 3)}
                >{q.answerOptions[2]}</button>}
                {q.correctAnswer && <button 
                    className={q.selected === 4 ? "answer-selected" : "answer"}
                    id={q.correctAnswer}
                    value={q.correctAnswer}
                    name={q.question}
                    onClick={() => props.handleClick(index, 4)}
                >{q.correctAnswer}</button>}
                <hr />
            </div>
        )})

    
    
    return (
        <div>
            <div className="quiz-page">
                {questionElements}
                <div className="submit-button-container">
                    <button className="submit-button" onClick={props.handleSubmit}>Check Answers</button>
                </div>
            </div>
        </div>
    )
}