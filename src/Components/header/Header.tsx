import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Filter from '../filter/Filter';

const useStyles = makeStyles(() => ({
    header: {
      backgroundColor: '#b3b3b3'
    }
  }));

const Header = (props:any) => {
  const classes = useStyles();
const buttonShowHide=()=> {
if(props.token){
  return  <Typography id = "tHeader1" component="div" variant="h3" align="center" gutterBottom>
          <Button variant="contained" color="primary" onClick ={() =>handlePageUpdate("Dashboard")}>Dashboard</Button>
          <Button variant="contained" color="primary" onClick ={() => handlePageUpdate("ReadNow")}>Read Now</Button>
          <div>
          <Filter updateServiceUrl = {props.updateServiceUrl} updatePageSize= {props.updatePageSize}/></div>
          </Typography>
  
    }
};
const handlePageUpdate = (pageName : String) => {
props.updatePage(pageName);
};
    return (<header className={classes.header}>
        <Container maxWidth="lg">
        <Typography id = "tHeader1" component="div" variant="h3" align="center" gutterBottom> 
        The Telegraph Header
        </Typography>
      </Container>
      <div>{buttonShowHide()}</div>
    </header>);
}

export default Header;