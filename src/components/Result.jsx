import React from 'react'
import { Link } from "react-router-dom"
import { FaUserNinja } from "react-icons/fa"

const Result = ({ score, restartQuiz }) => {
    return (
        <div id="result-page">
            <div className="quiztop px-4">
                <h1 className="display-4 py-4"><FaUserNinja />Flag Ninja <br /> <small>Quiz App</small> </h1>
            </div>
            <div className="container">
                <>
                    <h4 className="display-4 mt-5"> You are {score / 10 * 100}% Flag Ninja </h4>
                    <p className="lead my-3">You got {score} out of 10</p>
                    <Link to="/quizpage" className="btn btn-lg btn-primary lead mt-3" onClick={restartQuiz} >
                        Restart
                    </Link>
                </>
            </div>
        </div>
    )
}

export default Result
