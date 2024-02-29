console.log("Let's get this party started!");

window.addEventListener('load', function() {
    this.document.body.classList.add('fadeInAnimation');
})

const apiKey = 'pUFn2CMoFTYhjxq4rEi5OI7PVUHVFiGv';
const submitBtn = document.querySelector('#submitButton');
const searchBar = document.querySelector('#searchBar');
const gifContainer = document.querySelector('#gifContainer');
const removeGIFsBtn = document.querySelector('#removeGIFs');

async function searchGif(q, api_key) {
    const response = await axios.get('https://api.giphy.com/v1/gifs/search', {params: {q, api_key} });
    let numResults = response.data.data.length;
    const randomNum = Math.floor(Math.random() * numResults);
    const gifURL = response.data.data[randomNum].images.original.url;
    appendGIF(gifURL);
}

const getSearchTerm = () => {
    return searchBar.value;
}

const appendGIF = (gifURL) => {
    const newGif = document.createElement('img');
    newGif.src = gifURL;
    newGif.className = 'gifs';
    gifContainer.append(newGif);
}

submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    searchGif(getSearchTerm(), apiKey);
    searchBar.value = '';
});

removeGIFsBtn.addEventListener('click', function(e) {
    e.preventDefault();
    const allImgs = document.querySelectorAll('.gifs');

    for (let img of allImgs) {
        img.remove();
    };
})