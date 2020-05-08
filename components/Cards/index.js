// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.
axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response=>{console.log(response.data.articles)})
function cardMaker(dataInput){
    let cardDiv = document.createElement('div')
    let cardHeadlineDiv = document.createElement('div')
    let cardAuthorDiv = document.createElement('div')
    let cardImgDiv = document.createElement('div')
    let cardImg = document.createElement('img')
    let cardSpan = document.createElement('span')

    cardDiv.classList.add('card')
    cardHeadlineDiv.classList.add('headline')
    cardAuthorDiv.classList.add('author')
    cardImgDiv.classList.add('img-container')

    cardDiv.appendChild(cardHeadlineDiv)
    cardDiv.appendChild(cardAuthorDiv)
    cardAuthorDiv.appendChild(cardImgDiv)
    cardAuthorDiv.appendChild(cardSpan)
    cardImgDiv.appendChild(cardImg)

    cardHeadlineDiv.textContent = dataInput.headline;
    cardImg.src = dataInput.authorPhoto;
    cardSpan.textContent = dataInput.authorName;

    return cardDiv;
}

let cardEntry = document.querySelector('.cards-container')

function test(testarr){
    axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        for(let x = 0; x < testarr.length; x++){
            let cardAdder = cardMaker(response.data.articles[testarr][x]);
            cardEntry.appendChild(cardAdder);}

    })
    .catch(err =>{
        console.log('something went wrong', err)
    })
}


axios.get('https://lambda-times-backend.herokuapp.com/topics')
  .then(response => {
        for(let i = 0; i < response.data.topics.length; i++){
            test(response.data.topics[i]);
        }
  })
  .catch(err =>{
      console.log('something went wrong', err)
  })
