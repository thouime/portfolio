import React from "react"
import he from "he"

export default function Quiz(props) {

    // Randomize the Button array
    const buttons = props.answers.map(answer => {
        const button = {
            backgroundColor: "white",
            border: "none"
        }
        if (props.checkAnswers && answer === props.correctAnswer) {
            button.backgroundColor = "#94D7A2"
        }
        else if(props.checkAnswers && answer === props.currentAnswer) {
            button.backgroundColor = "#F8BCBC"
            button.color = "#293264"
            button.opacity = 0.5
        }
        else if (answer === props.currentAnswer) {
            button.backgroundColor = "#D6DBF5"
        } else {
            button.border = "1px solid #4D5B9E"
        }
        return (
            <input
                type="button"
                key={answer}
                onClick={props.setAnswer}
                value={he.decode(answer)}
                style={button}
            />
        )
    })

    return (
        <div className="quiz--box">
            <h2 className="quiz--question">
                {he.decode(props.question)}
            </h2>
            <div className="quiz--answers">
                {buttons}
            </div>
        </div>
    )
}