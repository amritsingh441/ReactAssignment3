import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import NewsService from '../../service/NewsService';
import Card from '../../Components/displayCard/DisplayCard';
import News from '../../model/News';

const Dashboard = (props:any) => {
      const [news, setNews] = useState<News[]>([]);
      const newsData = NewsService(props.url);
      newsData.then(data => { return data }).then(res => {
            let newsObjList = [...res];
            if (news.length === 0) {
                  setNews(newsObjList)
            }
      })
      let newsCardsList = news.map((newsData: News) =>
            <Card key={newsData.urlToImage} nData={newsData}></Card>)
      return (
          
            <Container maxWidth="lg">
              
                  <Typography id = "dashBoardHeading" component="div" variant="h6" align="center" gutterBottom>
                        News of The Day
                  <br />
                        {newsCardsList}
                  </Typography>
            </Container>)

}
export default Dashboard;