import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import SaveNews from '../../service/SaveNews';


const DisplayCard = (props:any) => {    
return <div>
        <Card>
            <CardContent>
                <img alt="" id="imageUrl" src={props.nData.urlToImage}/>
                <p id="title">{props.nData.title}</p>
                <div id="author">{props.nData.author}</div>
                <Button variant="contained" color="primary" onClick ={() => SaveNews(props.nData)}>Add To Favourites</Button>
            </CardContent>
        </Card>
    </div>
}

export default DisplayCard;