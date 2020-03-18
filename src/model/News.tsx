class News {
    "urlToImage": string;
    "title": string;
    "author": string;
    constructor(urlToImage: string, title: string, author: string) {
        this.urlToImage = urlToImage;
        this.title = title;
        this.author = author;
    }
}

export default News;