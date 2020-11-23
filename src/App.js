import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "./App.css"
import { countries } from "./world_countries/data/world"
import WelcomePage from "./components/WelcomePage"
import QuizPage from "./components/QuizPage"
import Result from "./components/Result"

function App() {
  const num1 = Math.floor(Math.random() * countries.length)
  const [num2, setNum2] = useState(Math.floor(Math.random() * countries.length))
  // const [fiftyArray, setFiftyArray] = useState([])
  const [randomFlagArray, setRandomFlagArray] = useState([num1, Math.abs(num1 - num2), num2, Math.abs(num2 - 30)])
  const [correctFlagNumber, setCorrectFlagNumber] = useState(Math.floor(Math.random() * randomFlagArray.length))
  const [step, setStep] = useState(1)
  const [score, setScore] = useState(0)
  const [wrong, setWrong] = useState(0)
  const [isItCorrect, setIsItCorrect] = useState("")
  const [disabled, setDisabled] = useState(false)
  const [selected, setSelected] = useState("")
// 249
  const generateFlag = () => {
    setCorrectFlagNumber(0)
    setIsItCorrect("")
    setDisabled(false)
    setRandomFlagArray([])
    for (let i = 0; i < 4; i++) {
      setRandomFlagArray(previous => {
        const newPush = Math.floor(Math.random() * (countries.length))
        return [
          ...previous.filter(a => !(a === newPush)), newPush
        ]
      })
    }
    setCorrectFlagNumber(Math.floor(Math.random() * randomFlagArray.length))
    if (step < 10) {
      setStep(p => p += 1)
    }
  }

  useEffect(() => {
    console.log(randomFlagArray)
  }, [randomFlagArray])

  useEffect(() => {
    num1 === num2 ? setNum2(Math.floor(Math.random() * countries.length)) : setNum2(p => p)
  }, [num1, num2])

  const executeScroll = (myRef) => myRef.current.scrollIntoView()

  const handleClick = (e, correctFlag, myRef) => {
    setDisabled(true)
    if (e.target.textContent === correctFlag.name) {
      setIsItCorrect("correct")
      setScore(p => p += 1)
    } else {
      setIsItCorrect("incorrect")
      setWrong(p => p += 1)
      // take the wrongly selected option and pass it to compare with the 
      // mapped elements and when any is equal to this let the background be red
      setSelected(e.target.textContent)
    }
    executeScroll(myRef)
  }

  const restartQuiz = () => {
    generateFlag()
    setStep(1)
    setScore(0)
    setWrong(0)
    setSelected("")
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/" >
          <WelcomePage generateFlag={generateFlag} />
        </Route>
        <Route path="/quizpage" >
          <QuizPage
            generateFlag={generateFlag}
            randomFlagArray={randomFlagArray}
            correctFlagNumber={correctFlagNumber}
            handleClick={handleClick}
            isItCorrect={isItCorrect}
            disabled={disabled}
            score={score}
            wrong={wrong}
            selected={selected}
            step={step} />
        </Route>
        <Route path="/result" >
          <Result
            score={score}
            restartQuiz={restartQuiz} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
