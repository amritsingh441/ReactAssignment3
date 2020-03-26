import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import NewsService from '../../service/NewsService';
import Card from '../../Components/displayCard/DisplayCard';
import News from '../../model/News';
import Grid from '@material-ui/core/Grid';

const Dashboard = (props:any) => {
      const [news, setNews] = useState<News[]>([]);
      const newsData = NewsService(props.url);
      console.log("newsData in dashBoard :: "+newsData)
      newsData.then(data => { 
            console.log("data in dashBoard :: "+data)
            return data }).then(res => {
            console.log("res in dashBoard :: "+res)
            let newsObjList = [...res];
            if (news.length === 0) {
                  setNews(newsObjList)
            }
      })
      let newsCardsList = news.map((newsData: News) =>
            <Card key={newsData.urlToImage} nData={newsData}></Card>)
      return (<Grid container  direction = "row" item sm={12} alignItems="center" justify="space-evenly" style={{marginTop:'16vh'}}>
                        {newsCardsList}
            </Grid>)

}
export default Dashboard;