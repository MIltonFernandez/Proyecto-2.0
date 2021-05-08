import React, { useContext } from 'react';
import {useState} from 'react';
import {QuizContext} from '../Helpers/Context'
import { Questions } from '../Helpers/QuestionBank'
import '../App.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
    media: {
      height: 140,
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
        </div>

        {console.log (gameTheme)}

      <Grid container spacing={3}>
        <Grid item sm = {4} xs = {12}>
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Arte
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <i class="fas fa-play"></i>
        <button onClick = { () => {setGameTheme("Arte"); setGameState("QuestionBank")}}>Elegir tematica</button>
        </CardActions>
      </Card>
        </Grid>

        <Grid item sm = {4} xs = {12}>
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Ciencia
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <i class="fas fa-play"></i>
        <button onClick = { () => {setGameTheme("Ciencia"); setGameState("QuestionBank")}}>Elegir tematica</button>
        </CardActions>
      </Card>
        </Grid>

        <Grid item sm = {4} xs = {12}>
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Deportes
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <i class="fas fa-play"></i>
        <button onClick = { () => {setGameTheme("Deportes"); setGameState("QuestionBank")}}>Elegir tematica</button>
        </CardActions>
      </Card>
        </Grid>

        <Grid item sm = {4} xs = {12}>
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Entretenimiento
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <i class="fas fa-play"></i>
        <button onClick = { () => {setGameTheme("Entretenimiento"); setGameState("QuestionBank")}}>Elegir tematica</button>
        </CardActions>
      </Card>
        </Grid>

        <Grid item sm = {4} xs = {12}>
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Geografía
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <i class="fas fa-play"></i>
        <button onClick = { () => {setGameTheme("Geografía"); setGameState("QuestionBank")}}>Elegir tematica</button>
        </CardActions>
      </Card>
        </Grid>

        <Grid item sm = {4} xs = {12}>
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Historia
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <i class="fas fa-play"></i>
        <button onClick = { () => {setGameTheme("Historia"); setGameState("QuestionBank")}}>Elegir tematica</button>
        </CardActions>
      </Card>
        </Grid>
      </Grid>
      </div>  
     
    )
}
