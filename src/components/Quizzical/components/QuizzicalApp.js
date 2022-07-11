/**
 * A basic quiz project that fetches quiz questions and answers 
 * from the Open Triva Database (https://opentdb.com)
 * 
 * The purpose of the project was to practice using React and demonstrate
 * knowledge attained from the Scrimba React course.
 */

import React from "react"
import blobsLemony from '../images/blobs-lemony.png'
import blobsBaby from '../images/blobs-baby.png'
import Start from './Start'
import Quiz from './Quiz'
import { nanoid } from 'nanoid'
import Confetti from "react-confetti"
import he from "he"

export default function Quizzical() {

  const [quizStarted, setQuizStarted] = React.useState(false)
  const [quizEnded, setQuizEnded] = React.useState(false)
  const [quizData, setQuizData] = React.useState([])
  const [userData, setUserData] = React.useState([])
  const [score, setScore] = React.useState(0)

  React.useEffect(function() {
    getQuizData()
  }, [])

  function getQuizData() {
    fetch("https://opentdb.com/api.php?amount=5")
        .then(res => res.json())
        .then(data => setQuizData(data.results))
  }

  function startQuiz() {
    setQuizStarted(true)
    createQuizData()
  }

  function createQuizData(){
      setUserData(quizData.map(quizElement => {    

      const answers = [
        quizElement.correct_answer, 
        ...quizElement.incorrect_answers
      ]
      const randomAnswers = answers
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value}) => value)
        .map(value => he.decode(value))

      return {
        id: nanoid(),
        question: quizElement.question,
        answers: randomAnswers,
        selectedAnswer: "",
        correctAnswer: he.decode(quizElement.correct_answer)
      }
    }))
  }

  function setAnswer(event, id) {
    const newAnswer = event.target.value
    // Don't set a new answer after the quiz has ended.
    if (quizEnded) return
    setUserData(prevData => prevData.map(quizElement => {
      return quizElement.id === id ?
        {...quizElement, selectedAnswer: newAnswer} :
        quizElement
    }))
  }

  function checkAnswers() {
    setScore(userData.filter(userElement => 
        quizData.some(quizElement =>
          quizElement.question === userElement.question &&
          quizElement.correct_answer === userElement.selectedAnswer)
        ).length
    )
    setQuizEnded(true)
    getQuizData()
  }

  function playAgain() {
    setQuizEnded(false)
    createQuizData()
    setScore(0)
  }

  const quizQuestions = userData.map(quizElement => {
    return (
      <Quiz
        key = {quizElement.id}
        question = {quizElement.question}
        answers = {quizElement.answers}
        currentAnswer = {quizElement.selectedAnswer}
        setAnswer = {(event) => setAnswer(event, quizElement.id)}
        correctAnswer = {quizElement.correctAnswer}
        checkAnswers = {quizEnded}
      />
    )
  })

  const quizCheck = (
    <div className="quiz--end">
      <button 
          key="btnCheckAnswers"
          className="btn--final"
          onClick={checkAnswers}
        >
          Check Answers
      </button>
    </div>
  )

  const quizEnd = (
    <div className="quiz--end">
      <h1>You scored {score}/5 correct answers</h1>
      <button 
        className="btn--final"
        onClick={playAgain}
      >
        Play Again
        </button>
    </div>
  )

  const lemonStyle = {
    right: "-32px",
    top: "-10px",
    transition: "right 1s, top 1s"
  }

  const babyStyle = {
    width: "210px",
    height: "145px",
    left: "-30px",
    transition: "width 1s, height 1s"
  }

  function setStyle() {
    if(window?.location.pathname === '/quizzical') {
      require('../../../css/QuizzicalApp.css');
    }
  }

  return (
    <div className={quizStarted ? "quiz--container" : undefined}>
      {setStyle()}
      {score === 5 && <Confetti />}
      <img className="img-blobs-lemony" src={blobsLemony} alt="Lemony Blob" style={quizStarted ? lemonStyle : undefined}/>
      <img className="img-blobs-baby" src={blobsBaby} alt="Baby Blob" style={quizStarted ? babyStyle : undefined} />
      {quizStarted ? quizQuestions : <Start startQuiz={() => startQuiz()}/>}
      {quizEnded ? quizEnd : quizCheck}
    </div>
  );
}
