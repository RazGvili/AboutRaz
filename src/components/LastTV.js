import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
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


export default function MediaCard() {
  const classes = useStyles();

  return (

    <div className={classes.root}>

      <Grid container spacing={4}>

        <Grid item xs={12} sm={6} lg={6} xl={4}>

        <Card className={classes.card}>
            <CardActionArea onClick={() => {window.open('https://www.youtube.com/channel/UCYO_jab_esuFRV4b17AJtAw', '_blank');}}>
              <CardMedia
                className={classes.media}
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/3B1B_Logo.svg/1200px-3B1B_Logo.svg.png"
              />
              <CardContent className={classes.content}>
                <Typography gutterBottom variant="h5" component="h2">
                  3Blue1Brown
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Heaven for math enthusiasts.<br/><br/><br/>
                </Typography>
              </CardContent>
            </CardActionArea>

          </Card>

        </Grid>

        <Grid item xs={12} sm={6} lg={6} xl={4}>

            <Card className={classes.card}>
              <CardActionArea onClick={() => {window.open('https://en.wikipedia.org/wiki/Thinking,_Fast_and_Slow', '_blank');}}>
                <CardMedia
                  className={classes.media}
                  image="https://miro.medium.com/max/2700/1*_WyxwEksQLPZEXZGo2ZdxA.png"
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

            </Card>

        </Grid>

        
        <Grid item xs={12} sm={6} lg={6} xl={4}>

            <Card className={classes.card}>
              <CardActionArea onClick={() => {window.open('https://www.imdb.com/title/tt8111088/', '_blank');}}>
                <CardMedia
                  className={classes.media}
                  image="https://media.comicbook.com/2019/11/star-wars-the-mandalorian-chapter-4-baby-yoda-scenes-fan-reactio-1198039-1280x0.jpeg"
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

            </Card>

        </Grid>

        
        <Grid item xs={12} sm={6} lg={6} xl={4}>

            <Card className={classes.card}>
              <CardActionArea onClick={() => {window.open('https://hackernoon.com/wtf-is-a-strategy-bcaa3fda9a31', '_blank');}}> 
                <CardMedia
                  className={classes.media}
                  image="https://hackernoon.com/hn-images/1*zgbiZewPC2alrG6ZK0XHEg.png"
                />
                <CardContent className={classes.content}>
                  <Typography gutterBottom variant="h5" component="h2">
                    WTF is Strategy?
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Great read about strategy. <br/><br/><br/>
                  </Typography>
                </CardContent>
              </CardActionArea>

            </Card>

        </Grid>

        <Grid item xs={12} sm={6} lg={6} xl={4}>

            <Card className={classes.card}>
              <CardActionArea onClick={() => {window.open('https://www.mobilespoon.net/2019/04/collection-cognitive-biases-how-to-use.html?m=1', '_blank');}}> 
                <CardMedia
                  className={classes.media}
                  image="https://1.bp.blogspot.com/-4SuhzYAKxA0/XfsegHW0uVI/AAAAAAAAQMM/Kpg0u0l4fHcYVzlUNhfa81Aezw7UQ271wCEwYBhgL/s640/Perceived%2BValue%2BBias.png"
                />
                <CardContent className={classes.content}>
                  <Typography gutterBottom variant="h5" component="h2">
                    84 cognitive biases
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  One of my favorites about cognitive biases and UI/UX. <br/><br/>
                  </Typography>
                </CardContent>
              </CardActionArea>

            </Card>

        </Grid>

        
        <Grid item xs={12} sm={6} lg={6} xl={4}>

            <Card className={classes.card}>
              <CardActionArea onClick={() => {window.open('https://en.wikipedia.org/wiki/Dune_(novel)', '_blank');}}> 
                <CardMedia
                  className={classes.media}
                  image="https://i.pinimg.com/originals/e2/a3/d1/e2a3d16d9151e71deb263baec3fc896f.jpg"
                />
                <CardContent className={classes.content}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Dune
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    A Sci-Fi masterpiece. Astounding book.  <br/> <br/><br/>
                  </Typography>
                </CardContent>
              </CardActionArea>

            </Card>

        </Grid>

         
        <Grid item xs={12} sm={6} lg={6} xl={4}>

            <Card className={classes.card}>
              <CardActionArea onClick={() => {window.open('https://www.imdb.com/title/tt0141842/', '_blank');}}> 
                <CardMedia
                  className={classes.media}
                  image="https://m.media-amazon.com/images/M/MV5BYjQzNWZjYmMtOWQzMS00YTcyLWIyYzctODNmMmE4MjYzYTYxXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg"
                />
                <CardContent className={classes.content}>
                  <Typography gutterBottom variant="h5" component="h2">
                    The Sopranos
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    TV at its best. Smart, funny, powerful. <br/> <br/><br/>
                  </Typography>
                </CardContent>
              </CardActionArea>

            </Card>

        </Grid>
        

      </Grid>
    </div>
  );
}
