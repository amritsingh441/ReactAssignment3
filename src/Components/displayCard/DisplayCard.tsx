import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import SaveNews from '../../service/SaveNews';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions/CardActions';

const useStyles = makeStyles({
    media: {
      height: 250,
    },
  });

const DisplayCard = (props:any) => {  
    const classes = useStyles();  
return <Grid item sm={4} container direction = "row">

    <Card className="col-lg-3 col-md-6 col-sm-12">
            <CardContent>
            <CardMedia  title={props.nData.title}  className={classes.media} image={props.nData.urlToImage} id="imageUrl"></CardMedia>
                {/* <img alt="" id="imageUrl" src={props.nData.urlToImage}/> */}
                {/* <p id="title">{props.nData.title}</p> */}
                <Typography id = "tHeader2" component="p" variant="body2" color="textSecondary">
                {props.nData.title} <br/>
                {props.nData.author}
                {/* <p id="author">{props.nData.author}</p> */}
                </Typography>
                <CardActions>
                <Button variant="contained" color="primary" onClick ={() => SaveNews(props.nData)}>Read Later</Button>
             </CardActions>
               
            </CardContent>
        </Card>
   </Grid> 
}

export default DisplayCard;