import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Filter from '../filter/Filter';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(() => ({
    header: {
      backgroundColor: 'cadetblue',
      position: 'fixed',
      width: '100%'
    },
    buttonCls:{
     
    }
  }));

const Header = (props:any) => {
  const classes = useStyles();
const buttonShowHide=()=> {
if(props.token){
  return <Grid id = "tHeader2" container  direction = "row" item sm={12} alignItems="center" justify="space-evenly">
          <Button size="small" variant="contained" id="dashBoardBtn" onClick ={() =>handlePageUpdate("Dashboard")}>Dashboard</Button>
          <Button size="small" variant="contained" id="readNowBtn"  onClick ={() => handlePageUpdate("ReadNow")}>Read Now</Button>
          <Filter updateServiceUrl = {props.updateServiceUrl} updatePageSize= {props.updatePageSize}/>
          </Grid>
  
    }
};
const handlePageUpdate = (pageName : String) => {
props.updatePage(pageName);
};
    return (<div className={classes.header} style={{zIndex:1}}>
        {/* <Container maxWidth="lg"> */}
        <Typography id = "tHeader1" component="div" variant="h4" align="center" gutterBottom> 
        The Telegraph
         {buttonShowHide()}
        </Typography>
      {/* </Container> */}
    </div>);
}

export default Header;