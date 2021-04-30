import './App.css';
import React, {useState, useContext} from 'react'
import Mainmenu from './Components/Mainmenu'
import Quiz from './Components/Quiz'
import Endscreen from './Components/Endscreen'


import {QuizContext} from "./Helpers/Context"

const App = () => {
  const [gameState, setGameState] = useState ("menu"); //Hacemos componentes basados en el estado del Quiz
  const [score, setScore] = useState(0)


  return (
    <div className="App">
      {""}
      <h1>Quiz App</h1>
      <QuizContext.Provider value = {{gameState, setGameState, score, setScore}}>
      {gameState === "menu" && <Mainmenu/>}
      {gameState === "quiz" && <Quiz/>}
      {gameState === "endscreen" && <Endscreen/>}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
