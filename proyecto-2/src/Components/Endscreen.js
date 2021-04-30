import React, { useContext } from 'react'
import {QuizContext} from '../Helpers/Context'
import '../App.css'
import {Questions} from "../Helpers/QuestionBank"

export default function Endscreen() {

    const restartQuiz = () => {
        setScore(0);
        setGameState ("menu");
    }

    const {score, setScore, setGameState} = useContext (QuizContext);
    return (
    <div className = "Endscreen">
        <h1>Quiz finished</h1>
        <h3>{score} / {Questions.length}</h3>
        <button onClick = {restartQuiz}>Reestart Quiz</button>
    </div>
    )
}
