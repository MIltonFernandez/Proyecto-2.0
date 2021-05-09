import React, { useContext } from 'react';
import {QuizContext} from '../Helpers/Context'
import '../App.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Arte from '../img/Arte.jpg';
import Ciencia from '../img/Ciencia.jpg';
import Deportes from '../img/Deporte.jpg';
import Entretenimiento from '../img/Entretenimiento.jpg';
import Geografía from '../img/Geografía.jpg';
import Historia from '../img/Historia.jpg';


const useStyles = makeStyles({
    media: {
      height: 200,
    },
  });

export default function Theme() {
    const classes = useStyles();
    const {gameState, setGameState} = useContext(QuizContext)
    const {gameTheme, setGameTheme} = useContext(QuizContext)
    return (
      
<div>
        <div>
            <h1>Bienvenido al quiz</h1>
            <p>El objetivo es responder la mayor cantidad de preguntas correctas que puedas eligiendo la temática con la que más te sientas
              seguro, si estás indeciso de que elegir te dejo algunos datos curiosos para que elijas dependiendo de tu interés. 
              ¡Suerte!
            </p>
        </div>

        {console.log (gameTheme)}

      <Grid container spacing={3}>
        <Grid item sm = {4} xs = {12}>
        <Card className={classes.root} className = "Card">
        <CardActionArea>
          <CardMedia
            className = "CardMedia"
            className={classes.media}
            image= {Arte}
            title="Arte"
            onClick = { () => {setGameTheme("Arte"); setGameState("QuestionBank")}}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Arte
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            ¿Sabias que..."Leonardo da Vinci era vegetariano. Hay indicios de que por lo menos durante una parte de su vida da Vinci
            sí fue vegetariano."?
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
        </Grid>

        <Grid item sm = {4} xs = {12}>
        <Card className={classes.root} className = "Card">
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image= {Ciencia}
            title="Ciencia"
            onClick = { () => {setGameTheme("Ciencia"); setGameState("QuestionBank")}}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Ciencia
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            ¿Sabias que... "Las girafas tienen la lengua azul, son de colo azul oscuro, y tienen una longitud de aproximadamente
             20 pulgadas."?
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
        </Grid>

        <Grid item sm = {4} xs = {12}>
        <Card className={classes.root} className = "Card">
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={Deportes}
            title="Deportes"
            onClick = { () => {setGameTheme("Deportes"); setGameState("QuestionBank")}}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Deportes
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            ¿Sabias que..."El ciclista olímpico John Howard es considerado el más veloz de la historia.
            En 1985 alcanzó 245 km/h en una bicicleta diseñada especialmente para él."?
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
        </Grid>

        <Grid item sm = {4} xs = {12}>
        <Card className={classes.root} className = "Card">
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={Entretenimiento}
            title="Entretenimiento"
            onClick = { () => {setGameTheme("Entretenimiento"); setGameState("QuestionBank")}}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Entretenimiento
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            ¿Sabias que..."En Los Juegos del Hambre Jennifer Lawrence se quedo sorda durante el rodaje de la película,
               al bucear, un chorro de agua le perforó el tímpano."?
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
        </Grid>

        <Grid item sm = {4} xs = {12}>
        <Card className={classes.root} className = "Card">
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={Geografía}
            title="Geografía"
            onClick = { () => {setGameTheme("Geografía"); setGameState("QuestionBank")}}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Geografía
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              ¿Sabias que..."Los continentes pueden moverse a la misma velocidad que el crecimiento de las uñas de las manos."?
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
        </Grid>

        <Grid item sm = {4} xs = {12}>
        <Card className={classes.root} className = "Card">
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image= {Historia}
            title="Historia"
            onClick = { () => {setGameTheme("Historia"); setGameState("QuestionBank")}}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Historia
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              ¿Sabias que..."Cuando un faraón fallecía, era tradición que sus familiares y sirvientes 
              fueran enterrados vivos junto el. Se creía que continuarían sirviendo al faraón después de la muerte."?
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
        </Grid>
      </Grid>
      </div>  
     
    )
}
