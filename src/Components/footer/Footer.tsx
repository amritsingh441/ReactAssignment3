import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  footer: {
    backgroundColor: 'cadetblue',
    height:'8vh',
    position:'fixed',
    marginTop:'94vh',
    width:'100%'
  },
}));

const Footer = () => {
  const classes = useStyles();
    return (
        <div className={classes.footer}>
          {/* <Container maxWidth="lg"> */}
            <Typography id="footer1" variant="subtitle1" color="textSecondary" align="center" component="p" gutterBottom>
             {/* Copyright info @Telegraph */}
             All Rights Reserved @The Telegraph & co. 2020.
            </Typography>
            {/* <Typography id="footer2" variant="subtitle1" align="center" color="textSecondary" component="p" gutterBottom>
                  All Rights Reserved @The Telegraph & co. 2020.                                 
            </Typography> */}
          {/* </Container> */}
        </div>
      );
}

export default Footer;