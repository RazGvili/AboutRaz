import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  close: {
    padding: theme.spacing(0.5),
    zIndex: "90"
  },
}));

export default function SimpleSnackbar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleLinkedIn = () => {
      window.open("https://www.linkedin.com/in/raz-gvili/", '_blank');
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        //autoHideDuration={6000}
        onClose={handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id"> I'm looking for my next challenge :)</span>}
        action={[
          <Button key="LinkedIn" color="secondary" size="small" onClick={handleLinkedIn}><div style={{textTransform: "none"}}>Contact</div></Button>
          ,
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            className={classes.close}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        ]}
      />
    </div>
  )
}