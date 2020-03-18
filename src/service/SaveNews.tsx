import News from '../model/News';
 const SaveNews = async (news:News) => {
     console.log(news);
    let url = 'http://localhost:3002/news'
    const response = await fetch(url,{
        method:'POST',
        headers : {
            'Content-Type': "application/json"
        },
        body:JSON.stringify(news)
    })
    return await response.json();
}
export default SaveNews;