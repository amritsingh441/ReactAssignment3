import News from '../model/News';

const NewsService = (url:string) => {
    return fetch(url).then(resp => {
        return resp.json();
    }).then(data => {
        let cardList: any = [];
        if(data!=null && data.articles!=undefined){
            Array.prototype.forEach.call(data.articles, (article: any) => {
                let newsObj = new News(article.urlToImage, article.title, article.author);
                cardList.push(newsObj)
            })
        }else{
            Array.prototype.forEach.call(data.sources, (sources: any) => {
                let newsObj = new News(sources.url, sources.name, sources.description);
                cardList.push(newsObj)
            })
        }
        return cardList;
    }).catch(error => {
        throw new Error(error);
    });
}

export default NewsService;