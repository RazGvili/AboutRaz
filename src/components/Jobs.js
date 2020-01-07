import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    borderWidth: "2px",
    borderStyle: "solid",
    borderRadius: "20px",
    borderColor: "#406c71"

  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
      <div>
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Berlin-Israel
        </Typography>
        <Typography variant="h5" component="h3">
          Co-Founder, Treffen Anywhere
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          2018 - PRESENT
        </Typography>
          <ul style={{listStyleType: "none"}}>
            <li> <Typography variant="body1" component="p"> Raised pre-seed and joined Axel Springer Porsche accelerator in Berlin, attended Diverse workshops, Mentoring and pitch training <br/><br/> </Typography></li>
            <li> <Typography variant="body1" component="p"> Leading the product life-cycle, lean & agile approach </Typography> <br/> </li> 
            <li> <Typography variant="body1" component="p"> Development of the company web app, Stack: React, Node, Redux, Firebase, Firestore. Mainly backend </Typography> </li>
          </ul>
      </CardContent>
    </Card>
<br/>
<Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Tel Aviv
        </Typography>
        <Typography variant="h5" component="h3">
          Project/Product Manager, Compie Tech
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          2016 - 2018
        </Typography>
          <ul>
            <Typography variant="body1" component="p">
              Execution of Web development projects from idea to production <br/><br/>
              Translating client needs into action items <br/><br/>
              Managing clients, internal resources and third parties/vendors
            </Typography>
        </ul>     
      </CardContent>
    </Card>
    </div>
  );

  
}
