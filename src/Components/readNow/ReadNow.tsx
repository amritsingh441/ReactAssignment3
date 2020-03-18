import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ReadNowService from '../../service/ReadNowService';
import Card from '../../Components/displayCard/DisplayCard';
import News from '../../model/News';

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
          
            <Container maxWidth="lg">
              
                  <Typography id = "dashBoardHeading" component="div" variant="h6" align="center" gutterBottom>
                        News of The Day
                  <br />
                        {newsCardsList}
                  </Typography>
            </Container>)

}
export default ReadNow;