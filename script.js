const button = document.getElementById('button');
button.addEventListener('click',function(){
    var wordInput = document.getElementById('wordInput').value;
    keyWord = wordInput
    getData(keyWord);
})
var newsContainer = document.getElementById('news-container');
async function getData(keyWord){
    const url = `https://newsapi.org/v2/everything?q=${keyWord}&language=en&apiKey=c5bf4098406348c0a296bba8e48f6526`;
    try {
        const response = await fetch(url);
        const json = await response.json();
        let ele = document.getElementById("news-container");
        while (ele.firstChild) {
            ele.removeChild(ele.firstChild);
        }
        json.articles.forEach(article => {
            addElement(article);
            /*
            const articleElement = document.createElement('div');
            const titleElement = document.createElement('h3');
            const authorElement = document.createElement('p');
            const linkElement = document.createElement('a');
            const imageElement = document.createElement('img');

            titleElement.textContent = article.title;
            authorElement.textContent = article.author || 'Unknown Author'; 
            imageElement.src = article.urlToImage;
            imageElement.alt = article.title;
            imageElement.style.width = "200px";
            linkElement.href = article.url;
            linkElement.textContent = article.url;

            articleElement.appendChild(titleElement);
            articleElement.appendChild(authorElement);
            articleElement.appendChild(imageElement);
            articleElement.appendChild(linkElement);
            newsContainer.appendChild(articleElement);
            */
        })
        console.log(json)
    } catch (error) {
        console.error(error.message);
    }
}

function addElement(article) {
    const articleElement = document.createElement('div');
    const titleElement = document.createElement('h3');
    const authorElement = document.createElement('p');
    const linkElement = document.createElement('a');
    const imageElement = document.createElement('img');

    titleElement.textContent = article.title;
    authorElement.textContent = article.author || 'Unknown Author'; 
    imageElement.src = article.urlToImage;
    imageElement.alt = article.title;
    imageElement.style.width = "200px";
    linkElement.href = article.url;
    linkElement.textContent = article.url;

    articleElement.appendChild(titleElement);
    articleElement.appendChild(authorElement);
    articleElement.appendChild(imageElement);
    articleElement.appendChild(linkElement);
    newsContainer.appendChild(articleElement);
}