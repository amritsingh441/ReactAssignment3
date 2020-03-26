import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ReadNowService from '../../service/ReadNowService';
import Card from '../../Components/displayCard/DisplayCard';
import News from '../../model/News';
import Grid from '@material-ui/core/Grid';

const ReadNow = () => {
      const [news, setNews] = useState<News[]>([]);
      //const newsData = ReadNowService();
      ReadNowService().then(res => {
            let newsObjList = [...res];
            console.log("newsObjList:::"+newsObjList);
            if (news.length === 0) {
                  setNews(newsObjList)
            }
      })
      console.log("news:::"+news);
      let newsCardsList = news.map((newsData: News) =>
            <Card key={newsData.urlToImage} nData={newsData}></Card>)
      return (
            <Grid container  direction = "row" item sm={12} alignItems="center" justify="space-evenly" style={{marginTop:'16vh'}}>
                        {newsCardsList}
            </Grid>
            )

}
export default ReadNow;