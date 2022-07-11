import React from "react"

export default function Start(props) {

    return(
        <div id="start-page">
            <h1 className="header">Quizzical</h1>
            <h3 className="header-description">Can you get the five triva questions correct?</h3>
            <button onClick={props.startQuiz} className="btn-style">Start Quiz</button>
        </div>
    )
}