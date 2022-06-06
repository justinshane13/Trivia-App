import React from "react"
import Main from "./components/Main"
import Quiz from "./components/Quiz"
import Submitted from "./components/Submitted"

export default function App() {
    const [page, setPage] = React.useState(false)
    const [questions, setQuestions] = React.useState([])
    const [answers, setAnswers] = React.useState([])
    const [score, setScore] = React.useState(0)
    const [buttons, setButtons] = React.useState([])
    const [submitted, setSubmitted] = React.useState(false)
    const [total, setTotal] = React.useState(0)
    const [theme, setTheme] = React.useState("none")

    
    React.useEffect(() => 
        fetch("https://opentdb.com/api.php?amount=5&category=21&difficulty=medium&type=multiple")
            .then(res => res.json())
            .then(data => setQuestions(data))
            , []
    )
    
    React.useEffect(() =>
        fetch("https://opentdb.com/api.php?amount=5&category=21&difficulty=medium&type=multiple")
            .then(res => res.json())
            .then(data => setAnswers(data.results.map(q => ({
                selected: 0
            }))))
            , []
    )
    
    function quizButton() {
        setPage(true)
    }
    
    function handleClick(quest, ans) {
        setAnswers(oldAnswers => oldAnswers.map((a, index) => {
            return index === quest ?
                {selected: ans} :
                a
        }))
    }
    
    console.log(answers)
    
    function submitAnswers() {
        setSubmitted(true)
        let count = 0
        for (let i = 0; i < answers.length; i++) {
            if (answers[i].selected === 4) {
                count++
            }
        }
        setTotal(count)
    }
    
    function restart() {
        setSubmitted(false)
        setPage(false)
        fetch("https://opentdb.com/api.php?amount=5&category=21&difficulty=medium&type=multiple")
            .then(res => res.json())
            .then(data => setAnswers(data.results.map(q => ({
                selected: 0
            }))))
        fetch("https://opentdb.com/api.php?amount=5&category=21&difficulty=medium&type=multiple")
            .then(res => res.json())
            .then(data => setQuestions(data))
    }
    
    function changeTheme(house) {
        setTheme(house)
    }
    
    switch (theme) {
        case "none":
            document.body.style.background = "#DFDFEF";
            break;
        case "slytherin":
            document.body.style.background = "#1A472A";
            break;
        case "gryffindor":
            document.body.style.background = "#740001";
            break;
        case "ravenclaw":
            document.body.style.background = "#0E1A40";
            break;
        case "hufflepuff":
            document.body.style.background = "#FFD800";
    }
    
    return (
        <div>
            {!page && <Main quizButton={quizButton} theme={theme} changeTheme={changeTheme} />}
            {page && !submitted && <Quiz questions={questions} answers={answers} handleClick={handleClick} handleSubmit={submitAnswers} submitted={submitted} theme={theme} />}
            {page && submitted && <Submitted questions={questions} answers={answers} handleClick={handleClick} handleSubmit={submitAnswers} submitted={submitted} total={total} restart={restart} theme={theme} />}
        </div>
    )
}

