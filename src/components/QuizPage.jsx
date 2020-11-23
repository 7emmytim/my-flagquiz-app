import React from 'react'
import { FaUserNinja } from "react-icons/fa"
import Question from "./Question"

const QuizPage = ({ randomFlagArray, generateFlag, correctFlagNumber, score, wrong, isItCorrect, disabled, selected, handleClick, step }) => {

    return (
        <div id="quiz-page">
            <div className="quiztop px-4">
                <h1 className="display-4 py-4"><FaUserNinja />Flag Ninja <br /> <small>Quiz App</small> </h1>
            </div>
            <Question
                randomFlagArray={randomFlagArray}
                correctFlagNumber={correctFlagNumber}
                generateFlag={generateFlag}
                isItCorrect={isItCorrect}
                score={score}
                wrong={wrong}
                selected={selected}
                disabled={disabled}
                step={step}
                handleClick={handleClick} />
        </div>
    )
}

export default QuizPage
