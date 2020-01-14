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
              <li> <Typography variant="body1" component="p"> Accepted to Axel Springer Porsche accelerator in Berlin, attended diverse workshops, mentoring and pitch training. Tested our assumptions in the local eco-system <br/><br/> </Typography></li>
              <li> <Typography variant="body1" component="p"> Leading the product life-cycle, applying lean & agile methods </Typography> <br/> </li> 
              <li> <Typography variant="body1" component="p"> Web-app development: React, Redux, Node, Firebase, Firestore </Typography> </li>
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
                  Hands-on web development projects execution, from idea to production <br/><br/>
                  Managing clients, Translating needs into prioritized action items <br/><br/>
                  Coordinating internal resources and third parties/vendors
                </Typography>
            </ul>     
          </CardContent>
        </Card>
        <br/>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Holon
            </Typography>
            <Typography variant="h5" component="h3">
              BSc Computer Science, HIT
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              2016 - 2019
            </Typography>
              <ul>
                <Typography variant="body1" component="p">
                  C/C++ | SQL | Java | Python | Machine Learning  
                </Typography>
            </ul>     
          </CardContent>
        </Card>
        <br/>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5" component="h3">
              Recent Coding Projects
            </Typography>
              <ul>
                <Typography variant="body1" component="p">
                  <br/>
                  Goal: User uploads text -> receives key terms -> use api to match images to key terms<br/>
                  Front: React + SemanticUI<br/>
                  Back: Python, Flask, Spacy, Textacy, Firebase 
                  <hr/>
                  Goal: Use "Human activity recognition using smartphones" dataset to predict activity<br/>
                  Trained 3 different classifiers: SVM, Logistic regression, neural network and compare accuracy
                  Stack: Python, Matplotlib, Pandas, Sklearn, Tensorflow. 
                </Typography>
            </ul>     
          </CardContent>
        </Card>

    </div>
  );

  
}
