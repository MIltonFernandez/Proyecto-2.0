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
             optionC: "Inglaterra", optionD: "Países Bajos", answer: "A"},

            {prompt: "¿Qué pintor italiano es considerado el principal exponente del Renacimiento en Venecia?", optionA: "Donatello", optionB: "Botticelli",
             optionC: "Tiziano", optionD: "Miguel Ángel", answer: "B"},
            
             {prompt: "¿Qué pintor italiano es el responsable de la famosa pintura de La Última Cena?", optionA: "Donatello", optionB: "Miguel Ángel",
             optionC: "Rafael", optionD: "Leonardo da Vinci", answer: "D"},

             {prompt: "¿Cuál fue la profesión del italiano Giorgione?", optionA: "Ingeniero", optionB: "Escultor",
             optionC: "Principe", optionD: "Pintor", answer: "D"},

             {prompt: "¿De qué país es el pintor renacentista y artista gráfico Alberto Durero?", optionA: "Alemania", optionB: "Bélgica",
             optionC: "Países Bajos", optionD: "Hungría", answer: "A"}]
    
        const Ciencia = [
            {prompt: "¿Cuál de las siguientes enfermedades ataca al higado?", optionA: "Hepatitis", optionB: "Diabetes",
             optionC: "Artrósis", optionD: "Cifoescoliosis",answer: "A"},
                
            {prompt: "¿Cómo tomarías la sustancia alucinógena natural llamada ayahuasca?", optionA: "Inhalada ", optionB: "Esnifada",
             optionC: "Inyectada", optionD: "Ingerida", answer: "D"},
         
            {prompt: "¿Cuál es la función principal del instestino grueso?", optionA: "La absorción de nutrientes", optionB: "La digestión mecánica de los alimentos",
             optionC: "La absorción de agua", optionD: "La digestión química de alimentos", answer: "C"},

            {prompt: "¿Qué cambio de estado ocurre en la sublimación?", optionA: "De sólido a líquido", optionB: "De sólido a gaseoso",
             optionC: "De gaseoso a líquido", optionD: "De líquido a solido", answer: "B"},

            {prompt: "¿Qué órgano del cuerpo humano produce la bilis?", optionA: "Hígado", optionB: "Páncreas",
             optionC: "Intestino delgado", optionD: "Riñon", answer: "A"},

            {prompt: "¿Cuál de los siguientes órganos NO es parte del sistema inmunológico?", optionA: "Esófago", optionB: "Médula ósea",
             optionC: "Bazo", optionD: "Timo", answer: "A"},
            
            {prompt: "¿De donde de saca la sacarina?", optionA: "Del aceite de girasol", optionB: "Del azúcar",
             optionC: "Del carbón", optionD: "Del azufre", answer: "D"},

            {prompt: "¿Cuántas caras tiene un icosaedro?", optionA: "20", optionB: "16",
             optionC: "8", optionD: "24", answer: "A"}]
        
        const Deportes = [
            {prompt: "¿Cuál es el clásico rival del Flamengo (BRA)?", optionA: "Corinthians", optionB: "Palmeiras",
             optionC: "Cruzeiro", optionD: "São Paulo",answer: "A"},
                
            {prompt: "¿Qué jugadora de hockey sobre césped ha ganado 7 veces el premio a la mejor jugadora del mundo de 2013?", optionA: "Luciana Aymar", optionB: "Natascha Keller",
             optionC: "Alyson Annan", optionD: "Maartje Paumen", answer: "A"},
         
            {prompt: "¿Cuántas finales del mundo jugó la Selección Argentina de fútbol?", optionA: "5", optionB: "6",
             optionC: "4", optionD: "3", answer: "C"},

            {prompt: "¿Qué jugadora de hockey sobre césped ha ganado 7 veces el premio a la mejor jugadora del mundo de 2013?", optionA: "Luciana Aymar", optionB: "Natascha Keller",
             optionC: "Alyson Annan", optionD: "Maartje Paumen", answer: "A"},
            
            {prompt: "¿Cuál es el estilo de natación más rápido?", optionA: "Crol", optionB: "Espalda", optionC: "Pecho",
             optionD: "Mariposa", answer: "A"},
            
            {prompt: "¿Cuántos jugadores componen un equipo de rugby?", optionA: "11", optionB: "12",
             optionC: "15", optionD: "21", answer: "C"},
            
            {prompt: "¿En qué país se inventó el voleibol?", optionA: "Gran Bretaña", optionB: "Francia",
             optionC: "Rusia", optionD: "Estados Unidos", answer: "D"},
            
            {prompt: "¿A qué barrio porteño pertenece el club de fútbol San Lorenzo?", optionA: "Boedo", optionB: "La Boca",
             optionC: "Liniers", optionD: "Paternal", answer: "A"}]
        
        const Entretenimiento = [
                {prompt: "¿En qué año se estrenó la película de Disney Pinocho?", optionA: "1940", optionB: "1950", optionC: "1952", optionD: "1946", answer: "A"},
                    
                {prompt: "Arroz con leche me quiero casar con una señorita de...", optionA: "San Nicolás", optionB: "San Martin", optionC: "San Justo",
                 optionD: "San josé", answer: "A"},
            
                {prompt: "¿Quién es la mascota de SEGA?", optionA: "Sonic", optionB: "Mario", optionC: "Pac Man", optionD: "Ryu", answer: "A"},
            
                {prompt: "¿Cómo se llamaba el personaje que interpretaba Al Pacino en Scarface?", optionA: "Tony Montana", optionB: "Sonny Montana",
                 optionC: "Michael Corleone", optionD: "Frank Slade", answer: "A"},
            
                {prompt: "¿A qué película de Disney pertenece la canción 'Un mundo ideal'?", optionA: "Aladdín", optionB: "Pocahontas",
                 optionC: "Mulán", optionD: "Hércules", answer: "A"},
            
                {prompt: "¿Cómo se llama el protagonista de la saga Indiana Jones?", optionA: "Jack Nicholson", optionB: "Michael Fox", optionC: "Harrison Ford",
                 optionD: "Robin Williams", answer: "C"},
            
                {prompt: "¿Qué animal es la mascota de Jazmín en Aladdin", optionA: "Elefante", optionB: "Tigre", optionC: "Mono", optionD: "Serpiente", answer: "B"},
            
                {prompt: "¿A quién se considera el Rey del Pop?", optionA: "Justin Bieber", optionB: "Michael Jackson", optionC: "Zayn Malik", optionD: "Zac Efron", answer: "B"},] 

        const Geografía = [
            {prompt: "¿Cuál es el país menos turístico de Europa?", optionA: "Armenia", optionB: "Moldavia",
             optionC: "Liechtenstein", optionD: "Hungría",answer: "C"},
                
            {prompt: "¿A qué país pertenece la isla de Tasmania?", optionA: "Estados Unidos", optionB: "Australia",
             optionC: "Portugal", optionD: "Ninguna es correcta", answer: "B"},
         
            {prompt: "¿En cuál de los siguientes países NO hay ningún desierto?", optionA: "España", optionB: "Chile",
             optionC: "Mongolia", optionD: "Alemania", answer: "D"},
        
            {prompt: "Cuál de estas características NO pertenece al clima Mediterráneo?", optionA: "Veranos secos y calurosos", optionB: "Es un tipo de clima templado",
             optionC: "Lluvias muy abundantes", optionD: "Variables temperaturas en primavera", answer: "C"},
        
            {prompt: "¿Cuál es principal celebración holandesa?", optionA: "Navidad", optionB: "La llegada del verano",
             optionC: "El día de la Reina", optionD: "Hallowen", answer: "C"},
        
            {prompt: "¿Cuál de las siguientes especialidades NO es típica de la cocina estadounidense?", optionA: "La hamburguesa", optionB: "El pastel de cangrejo",
             optionC: "La tarta de manzana", optionD: "Todas son típicas", answer: "D"},
        
            {prompt: "¿Con cuántos países limita Argentina??", optionA: "Tres", optionB: "Cuatro",
             optionC: "Cinco", optionD: "Seis", answer: "C"},
        
            {prompt: "¿En qué país está Ushuaia, la ciudad más al sur del mundo?", optionA: "Chile", optionB: "Argentina",
             optionC: "Sudáfrica", optionD: "Nueva Zelanda", answer: "B"},]

        const Historia = [
            {prompt: "¿En qué año tuvo lugar el ataque a Pearl Harbor?", optionA: "1939", optionB: "1940",
             optionC: "1941", optionD: "1942",answer: "C"},
                
            {prompt: "¿Con qué hecho histórico relacionarías al 'hombre del tanque' o 'rebelde desconocido'?", optionA: "Protestas de plaza Tian'anmen, Pekín", optionB: "Protestas de plaza Tahrir, El Cairo",
             optionC: "Protestas de plaza del Sol, Madrid", optionD: "Protestas de plaza de Mayo, Buenos Aires", answer: "A"},
         
            {prompt: "¿Cuál es la ciudad más antigua de América Latina?", optionA: "Caral", optionB: "Valparaíso",
             optionC: "Arequipa", optionD: "La Paz", answer: "A"},
        
            {prompt: "El Renacimiento marcó el inicio de la Edad..", optionA: "Moderna", optionB: "Antigüedad clásica",
             optionC: "Contemporánea", optionD: "Media", answer: "A"},
        
            {prompt: "¿Qué país fue dirigido por Stalin?", optionA: "Unión Soviética", optionB: "Cuba",
             optionC: "Alemania", optionD: "Polonia", answer: "A"},
        
            {prompt: "¿Quién liberó a Argentina, Chile y Perú?", optionA: "Ernesto 'Che' Guevara", optionB: "Manual Belgrano",
             optionC: "José de San Martín", optionD: "Simón Bolívar", answer: "C"},
        
            {prompt: "¿Dónde surgió la filosofía?", optionA: "Grecia", optionB: "España",
             optionC: "Egipto", optionD: "Japón", answer: "A"},
        
            {prompt: "¿Para qué fue creado el plan Marshall en 1947?", optionA: "Regalo", optionB: "Conquista",
             optionC: "Reconstrucción", optionD: "Comercio", answer: "C"},
        
            {prompt: "¿Quién fue galardonado con el premio Nobel de la Paz en 2007?", optionA: "Albert Einstein", optionB: "Albert Gore",
             optionC: "Albert Schweitzer", optionD: "Albert Van Bommel", answer: "B"},]

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

