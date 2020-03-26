import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Filter from '../filter/Filter';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(() => ({
    header: {
      backgroundColor: '#b3b3b3'
    },
    buttonCls:{
     
    }
  }));

const Header = (props:any) => {
  const classes = useStyles();
const buttonShowHide=()=> {
if(props.token){
  return <Grid id = "tHeader2" container  direction = "row" sm={12} alignItems="center" justify="space-evenly">
  {/* <Typography id = "tHeader2" component="div" variant="h3"> */}
          <Button variant="contained" id="dashBoardBtn" color="primary" onClick ={() =>handlePageUpdate("Dashboard")}>Dashboard</Button>
          <Button variant="contained" id="readNowBtn"  color="primary" onClick ={() => handlePageUpdate("ReadNow")}>Read Now</Button>
          <Filter updateServiceUrl = {props.updateServiceUrl} updatePageSize= {props.updatePageSize}/>
          {/* </Typography> */}
          </Grid>
  
    }
};
const handlePageUpdate = (pageName : String) => {
props.updatePage(pageName);
};
    return (<div className={classes.header}>
        {/* <Container maxWidth="lg"> */}
        <Typography id = "tHeader1" component="div" variant="h4" align="center" gutterBottom> 
        The Telegraph
         {buttonShowHide()}
        </Typography>
      {/* </Container> */}
    </div>);
}

export default Header;