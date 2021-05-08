import { useContext } from 'react'
import {useEffect} from 'react'
import {QuizContext} from '../Helpers/Context'


  export default function QuestionBank () {
 
    const { gameTheme, setGameState} = useContext(QuizContext);
    const { Questions, setQuestions} = useContext(QuizContext); 

        const Arte = [
            {prompt: "¿Por qué pintura es el italiano Sandro Botticelli conocido?", optionA: "La última cena", optionB: "El nacimiento de Venus",
             optionC: "Día del juicio Final", optionD: "La Venus durmiente",answer: "B"},
                
            {prompt: "¿Qué pintor alemán del Renacimiento pintó Adán y Eva (1507)?", optionA: "Rogier Van Der Weyden", optionB: "Alberto Durero",
             optionC: "Jan Van Eyck", optionD: "Hans Holbein", answer: "B"},
         
            {prompt: "¿De qué país era el escultor Donatello?", optionA: "Italia", optionB: "Francia",
             optionC: "Inglaterra", optionD: "Países Bajos", answer: "A",},

            {prompt: "¿Qué pintor italiano es considerado el principal exponente del Renacimiento en Venecia?", optionA: "Donatello", optionB: "Botticelli",
             optionC: "Tiziano", optionD: "Miguel Ángel", answer: "B",},
            
             {prompt: "¿Qué pintor italiano es el responsable de la famosa pintura de La Última Cena?", optionA: "Donatello", optionB: "Miguel Ángel",
             optionC: "Rafael", optionD: "Leonardo da Vinci", answer: "D",},

             {prompt: "¿Cuál fue la profesión del italiano Giorgione?", optionA: "Ingeniero", optionB: "Escultor",
             optionC: "Principe", optionD: "Pintor", answer: "D",},

             {prompt: "¿De qué país es el pintor renacentista y artista gráfico Alberto Durero?", optionA: "Alemania", optionB: "Bélgica",
             optionC: "Países Bajos", optionD: "Hungría", answer: "A",}]
        
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

