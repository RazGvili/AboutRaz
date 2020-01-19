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
            <ul style={{listStyleType: "disc"}}>
              <li> <Typography variant="body1" component="p"> Accepted to Axel Springer Porsche accelerator in Berlin, attended diverse workshops, mentoring and pitch training.<br/> Validated  our hypotheses in the local eco-system <br/> </Typography></li>
              <li> <Typography variant="body1" component="p"> Improving delivery time and features impact by utilizing lean & agile methods. Turning feedback into features </Typography>  </li> 
              <li> <Typography variant="body1" component="p"> Web-app development from scratch to production: React, Redux, Node, Firebase, Firestore </Typography> </li>
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
              <ul style={{listStyleType: "disc"}}>
                  <li> <Typography variant="body1" component="p"> Managed multiple web development projects from specification to production on schedule </Typography> </li>
                  <li> <Typography variant="body1" component="p"> Successfully coordinated between clients, R&D, and management </Typography> </li>
                  <li> <Typography variant="body1" component="p"> Account management, Pre/Post sales </Typography> </li>
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
                  Webapp for automatic text summarization via NLP, Image search API <br/><br/>
                  <ul style={{listStyle: "disc"}}>
                    <li>Front: React + SemanticUI</li>
                    <li>Back: Python, Flask, Spacy, Textacy, Firebase</li>
                  </ul>
                  <hr/>
                  Use "Human activity recognition using smartphones" dataset to predict user activity<br/><br/>
                  <ul style={{listStyle: "disc"}}>
                    <li>Implementation of SVM, Logistic regression, neural network. Comparison of algorithms accuracy</li>
                    <li>Stack: Python, Matplotlib, Pandas, Sklearn, Tensorflow</li>
                  </ul>
                </Typography>
            </ul>     
          </CardContent>
        </Card>

    </div>
  );

  
}
