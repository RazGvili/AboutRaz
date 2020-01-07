import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  card: {
    maxWidth: 345,
  },
  media: {
    minHeight: "200px"
  },
  /*content: {
    minHeight: "200px"
  }*/
  
});

const handleClick = () => {
  console.log("s")
};

export default function MediaCard() {
  const classes = useStyles();

  return (

    <div className={classes.root}>

      <Grid container spacing={3}>

        <Grid item xs={12} sm={6} lg={6} xl={4}>

            <Card className={classes.card}>
              <CardActionArea onClick={() => {window.open('https://en.wikipedia.org/wiki/Thinking,_Fast_and_Slow', '_blank');}}>
                <CardMedia
                  className={classes.media}
                  image="https://miro.medium.com/max/2700/1*_WyxwEksQLPZEXZGo2ZdxA.png"
                  title="Contemplative Reptile"
                />
                <CardContent className={classes.content}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Thinking, fast and slow
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  A brilliant book about the pitfalls of our thinking processes. Highly recommended for decision makers.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" href={"https://en.wikipedia.org/wiki/Thinking,_Fast_and_Slow"} target={"_blank"}>
                  More
                </Button>
              </CardActions>
            </Card>

        </Grid>

        
        <Grid item xs={12} sm={6} lg={6} xl={4}>

            <Card className={classes.card}>
              <CardActionArea onClick={() => {window.open('https://www.imdb.com/title/tt8111088/', '_blank');}}>
                <CardMedia
                  className={classes.media}
                  image="https://media.comicbook.com/2019/11/star-wars-the-mandalorian-chapter-4-baby-yoda-scenes-fan-reactio-1198039-1280x0.jpeg"
                  title="Contemplative Reptile"
                />
                <CardContent className={classes.content}>
                  <Typography gutterBottom variant="h5" component="h2">
                    The Mandalorian
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Amazing addition to the Starwars universe. and obviously baby yoda. <br/><br/>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" href={"https://www.imdb.com/title/tt8111088/"} target={"_blank"}>
                  More
                </Button>
              </CardActions>
            </Card>

        </Grid>

        
        <Grid item xs={12} sm={6} lg={6} xl={4}>

            <Card className={classes.card}>
              <CardActionArea onClick={() => {window.open('https://material-ui.com/getting-started/usage/', '_blank');}}> 
                <CardMedia
                  className={classes.media}
                  image="https://blueturtle.blog/img/cover/Material-UI.png"
                  title="Contemplative Reptile"
                />
                <CardContent className={classes.content}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Material-UI
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Great UI Framework for React, Useful docs. <br/><br/><br/>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" href={"https://material-ui.com/getting-started/usage/"} target={"_blank"}>
                  More
                </Button>
              </CardActions>
            </Card>

        </Grid>

      </Grid>
    </div>
  );
}
