import React, {useRef} from "react"

export default function Main(props) {
    
    return (
        <div className="landing-page">

            <div className={`landing-text ${props.theme}`} id="landing-text">
                <h1 className="title">⚡ You're a Quizard! ⚡</h1>
                <h4 className="description">A battle for the house cup!</h4>
                <p className="subtitle">(actually just a trivia app for muggles)</p>
                <p className="description"><u>Select your house</u></p>
                <div className="house-buttons-container">
                    <button className="house-button gryffindor" onClick={() => props.changeTheme("gryffindor")}>Gryffindor 🦁</button>
                    <button className="house-button hufflepuff" onClick={() => props.changeTheme("hufflepuff")}>Hufflepuff 🦡</button>
                    <button className="house-button ravenclaw" onClick={() => props.changeTheme("ravenclaw")}>Ravenclaw 🦅</button>
                    <button className="house-button slytherin" onClick={() => props.changeTheme("slytherin")}>Slytherin 🐍</button>
                </div>
                
                <button disabled={props.theme === "none"} className="start-button" onClick={props.quizButton}>Start Quiz 📜</button>
            </div>

        </div>
    )
}