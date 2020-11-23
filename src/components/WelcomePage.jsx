import React from 'react'
import { Link } from "react-router-dom"
import { FaUserNinja } from "react-icons/fa"

const WelcomePage = () => {

    return (
        <div id="welcome-page">
            <div className="container">
                <h1 className="display-4"><span>Flag <FaUserNinja style={{ color: "#C5CAE9" }} /> Ninja</span> <br /> Quiz App</h1>
                <p className="lead my-3">There are over 200 countries in the world, take this quiz to find out how many of these countries
                 you can identify by flag.</p>
                <Link to="/quizpage" className="btn btn-lg text-light btn-warning" >
                    START QUIZ
                </Link>
            </div>
        </div>
    )
}

export default WelcomePage
