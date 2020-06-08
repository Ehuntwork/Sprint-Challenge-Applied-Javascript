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

function cardCreator(obj){
    let newCard = document.createElement('div')

    ////card elements/////////////////////////////////////////////
    let cardHeadline = document.createElement('div');
    let cardAuthor = document.createElement('div');
    ///cardAuthor elements////
    let authorImgDiv = document.createElement('div');
    let authorName = document.createElement('span')
    //imgDiv element///
    let authorImg = document.createElement('img')
    
    
    
    ////card element class names///////////////////////////////////
    newCard.classList.add('card');
    cardHeadline.classList.add('headline');
    cardAuthor.classList.add('author');
    authorImgDiv.classList.add('img-container')


    ////element nesting/////////////////////////////////////////////
    newCard.appendChild(cardHeadline)
    newCard.appendChild(cardAuthor)

    cardAuthor.appendChild(authorImgDiv)
    cardAuthor.appendChild(authorName)

    authorImgDiv.appendChild(authorImg)

    ////element content/////////////////////////////////////////////
    cardHeadline.textContent = obj.headline;
    authorImg.src = obj.authorPhoto;
    authorName.textContent = `By ${obj.authorName}`;


    return newCard;

}

let cardContainer = document.querySelector('.cards-container');

function getData(subject){
    axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(res=>{
        for(let i = 0; i< res.data.articles[subject].length; i++){
            let cardData = cardCreator(res.data.articles[subject][i])
            cardContainer.appendChild(cardData)
        }
    })
    .catch(err =>{
        console.log('Error', err)
    })

}
  
    axios.get('https://lambda-times-backend.herokuapp.com/topics')
      .then(response => {
            for(let i = 0; i < response.data.topics.length-1; i++){
                getData(response.data.topics[i]);
            }
      })
      .catch(err =>{
          console.log('Error', err)
      })