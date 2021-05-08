import './App.css';
import React, {useState, useContext} from 'react'
import Mainmenu from './Components/Mainmenu'
import Quiz from './Components/Quiz'
import Endscreen from './Components/Endscreen'
import QuestionBank from './Helpers/QuestionBank'

import {QuizContext} from "./Helpers/Context"
import Theme from './Components/Theme';

const App = () => {
  const [gameState, setGameState] = useState ("Theme"); //Hacemos componentes basados en el estado del Quiz
  const [score, setScore] = useState(0)
  const [gameTheme, setGameTheme] = useState (""); 
  const [Questions, setQuestions] = useState (); 


  return (
    <div className="App">
      <QuizContext.Provider value = {{gameState, setGameState, score, setScore, gameTheme, setGameTheme, Questions, setQuestions}}>
      {gameState === "Theme" && <Theme/>}
      {gameState === "menu" && <Mainmenu/>}
      {gameState === "quiz" && <Quiz/>}
      {gameState === "endscreen" && <Endscreen/>}
      {gameState === "QuestionBank" && <QuestionBank/>}
      
      {gameTheme === "Arte" && <QuestionBank/>}
      {gameTheme === "Ciencia" && <QuestionBank/>}
      {gameTheme === "Deportes" && <QuestionBank/>}
      {gameTheme === "Entretenimiento" && <QuestionBank/>}
      {gameTheme === "Geografía" && <QuestionBank/>}
      {gameTheme === "Historia" && <QuestionBank/>} 
      </QuizContext.Provider>
    </div>
  );
}

export default App;
