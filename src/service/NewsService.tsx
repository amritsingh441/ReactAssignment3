import News from '../model/News';

const NewsService = (url:string) => {
    return fetch(url).then(resp => {
        return resp.json();
    }).then(data => {
        let cardList: any = [];
        Array.prototype.forEach.call(data.articles, (article: any) => {
            let newsObj = new News(article.urlToImage, article.title, article.author);
            cardList.push(newsObj)
        })
        return cardList;
    }).catch(error => {
        throw new Error(error);
    });
}

export default NewsService;