import News from '../model/News';

const ReadNowService = async () => {
    let url = "http://localhost:3002/news";
    return  await fetch(url).then(resp => {
        console.log("resp json data::: "+resp);
        return resp.json();
    }).then(data => {
        console.log(" data::: "+data);
        let cardList: any = [];
        Array.prototype.forEach.call(data,(data:News)  => {
            let newsObj = new News(data.urlToImage, data.title, data.author);
            cardList.push(newsObj)
        })
        return cardList;
    }).catch(error => {
        throw new Error(error);
    });
}

export default ReadNowService;