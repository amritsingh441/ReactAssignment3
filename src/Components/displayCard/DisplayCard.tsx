import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import SaveNews from '../../service/SaveNews';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    media: {
      height: 250,
    },
  });

const DisplayCard = (props:any) => {  
    const classes = useStyles();  
return <div>
        <Card >
            <CardContent>
            <CardMedia   className={classes.media} image={props.nData.urlToImage} id="imageUrl"></CardMedia>
                {/* <img alt="" id="imageUrl" src={props.nData.urlToImage}/> */}
                <p id="title">{props.nData.title}</p>
                <div id="author">{props.nData.author}</div>
                <Button variant="contained" color="primary" onClick ={() => SaveNews(props.nData)}>Add To Favourites</Button>
            </CardContent>
        </Card>
    </div>
}

export default DisplayCard;