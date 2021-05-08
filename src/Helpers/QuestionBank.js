import { useContext } from 'react'
import {useEffect} from 'react'
import {QuizContext} from '../Helpers/Context'


  export default function QuestionBank () {
 
    const { gameTheme, setGameState} = useContext(QuizContext);
    const { Questions, setQuestions} = useContext(QuizContext); 

        const Arte = [
            {prompt: "1+2?", optionA: "24", optionB: "21", optionC: "4", optionD: "2",answer: "D"},
                
            {prompt: "2+2?", optionA: "24", optionB: "21", optionC: "4", optionD: "2", answer: "C"},
         
            {prompt: "12+12?", optionA: "24", optionB: "21", optionC: "4", optionD: "2", answer: "A",}]
        
        const Ciencia = [
            {prompt: "1+1?", optionA: "24", optionB: "21", optionC: "4", optionD: "2",answer: "D"},
                
            {prompt: "2+2?", optionA: "24", optionB: "21", optionC: "4", optionD: "2", answer: "C"},
         
            {prompt: "12+12?", optionA: "24", optionB: "21", optionC: "4", optionD: "2", answer: "A",}]
        
        const Deportes = [
            {prompt: "1+3?", optionA: "24", optionB: "21", optionC: "4", optionD: "2",answer: "D"},
                
            {prompt: "2+2?", optionA: "24", optionB: "21", optionC: "4", optionD: "2", answer: "C"},
         
            {prompt: "12+12?", optionA: "24", optionB: "21", optionC: "4", optionD: "2", answer: "A",}]
        
        const Entretenimiento = [
                {prompt: "1+1?", optionA: "24", optionB: "21", optionC: "4", optionD: "2",answer: "D"},
                    
                {prompt: "2+2?", optionA: "24", optionB: "21", optionC: "4", optionD: "2", answer: "C"},
            
                {prompt: "12+12?", optionA: "24", optionB: "21", optionC: "4", optionD: "2", answer: "A",}] 

        const Geografía = [
            {prompt: "1+1?", optionA: "24", optionB: "21", optionC: "4", optionD: "2",answer: "D"},
                
            {prompt: "2+2?", optionA: "24", optionB: "21", optionC: "4", optionD: "2", answer: "C"},
         
            {prompt: "12+12?", optionA: "24", optionB: "21", optionC: "4", optionD: "2", answer: "A",}]

        const Historia = [
            {prompt: "1+1?", optionA: "24", optionB: "21", optionC: "4", optionD: "2",answer: "D"},
                
            {prompt: "2+2?", optionA: "24", optionB: "21", optionC: "4", optionD: "2", answer: "C"},
         
            {prompt: "12+12?", optionA: "24", optionB: "21", optionC: "4", optionD: "2", answer: "A",}]

            useEffect(() => {
                gameTheme === "Arte" && setQuestions(Arte)
                gameTheme === "Ciencia" && setQuestions(Ciencia)
                gameTheme === "Deportes" && setQuestions(Deportes)
                gameTheme === "Entretenimiento" && setQuestions(Entretenimiento)
                gameTheme === "Geografía" && setQuestions(Geografía)
                gameTheme === "Historia" && setQuestions(Historia) 
                setGameState("quiz")
            
            },[gameTheme]) 
    
    return (null)
    
    }

