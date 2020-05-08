// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>


function createTab(objNum){
    let newTab = document.createElement('div')
    newTab.classList.add('tab')
    newTab.textContent = data.topics[i];
  
}

let tabEntry = document.querySelector('.topics')
for(let i = 0; i < data.topics.length; i++){
    let tabAdder = createTab(i)
    tabEntry.appendChild(tabAdder)
}

let test = axios.get('https://lambda-times-backend.herokuapp.com/topics')
 .then(response , () =>{
     console.log(response.date.topics)

 })

console.log(test)