import News from '../model/News';

const NewsService = () => {
    let url = "http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=7b95fa856336437295a0ee3d0a53fd69";
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