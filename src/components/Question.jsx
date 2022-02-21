import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa"
import { countries } from "../world_countries/data/world";

const Question = ({ randomFlagArray, correctFlagNumber, generateFlag, score, wrong, isItCorrect, disabled, selected, step, handleClick }) => {
    let correctFlag = countries[randomFlagArray[correctFlagNumber]]
    // const flagImage = require(`../world_countries/flags/${correctFlag.alpha2}.png`)
    const myRef = useRef(null)
    //conditional because correctFlag is returning undefined sometimes
    if (correctFlag === undefined) {
        correctFlag = countries[randomFlagArray[0]]
        console.log("undefined")
    }

    return (
        <div className="container">
            <div className="lead mt-5 bg-light">
                <small>{step}/10</small>
                <small className="text-success mx-4">{score} correct</small>
                <small className="text-danger">{wrong} wrong</small>
            </div>
            <div className="row py-auto" style={{ height: "75vh" }}>

                <div className="col-sm-6 quizbody my-auto">
                    <img src={`https://flagcdn.com/w2560/${correctFlag.alpha2}.png`} alt={correctFlag.name} />
                    {/* <img src={flagImage} alt={correctFlag.name} /> */}
                </div>

                <div className="col-sm-6 options container my-auto" >
                    {randomFlagArray.map((a, i) => {
                        return (
                            <div className="input-group my-2" key={i}>
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-sm">{i + 1}.</span>
                                </div>
                                <div
                                    style={disabled ? { pointerEvents: "none", backgroundColor: "#f8f9fa" } : null}
                                    className={`form-control ${countries[a].name === correctFlag.name && isItCorrect ? `correct`
                                        : selected === countries[a].name && isItCorrect ? `wrong` : null}`}
                                    onClick={(e) => handleClick(e, correctFlag, myRef)} >

                                    {countries[a].name}

                                    {
                                        countries[a].name === correctFlag.name && isItCorrect ?
                                            <FaCheckCircle className="ml-3 text-success" /> :
                                            selected === countries[a].name && isItCorrect ?
                                                <FaTimesCircle className="ml-3 text-danger" />
                                                : null
                                    }

                                </div>
                            </div>
                        )
                    })}

                    <div className="mt-4" ref={myRef} >
                        {step < 10 ?
                            isItCorrect ?
                                <button
                                    className="btn btn-md btn-block text-light btn-next lead"
                                    onClick={generateFlag} >
                                    Next Flag
                        </button> : null
                            : isItCorrect ?
                                <Link to="/result" className="btn btn-md btn-block btn-warning text-light" >
                                    Finish
                                </Link> : null
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Question
