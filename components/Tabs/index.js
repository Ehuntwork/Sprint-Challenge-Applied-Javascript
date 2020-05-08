// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

function createTab(tabContent){
    let newTab = document.createElement('div')
    newTab.classList.add('tab')
    newTab.textContent = tabContent;

    return newTab;
}

let tabEntry = document.querySelector('.topics')

axios.get('https://lambda-times-backend.herokuapp.com/topics')
  .then(response => {
        for(let i = 0; i < response.data.topics.length; i++){
            let tabAdder = createTab(response.data.topics[i])
            tabEntry.appendChild(tabAdder)
        }
  })
  .catch(err =>{
      console.log('something went wrong', err)
  })
