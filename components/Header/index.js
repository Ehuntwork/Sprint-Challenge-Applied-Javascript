// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    let headerDiv = document.createElement('div')
    let headerDateSpan = document.createElement('span')
    let headerH1 = document.createElement('h1')
    let headerTempSpan = document.createElement('span')

    headerDiv.classList.add('header')
    headerDateSpan.classList.add('date')
    headerTempSpan.classList.add('temp')

    headerDateSpan.textContent = 'SMARCH 28, 2019';
    headerH1.textContent = 'Lambda Times';
    headerTempSpan.textContent = '98°';
    
    headerDiv.appendChild(headerDateSpan)
    headerDiv.appendChild(headerH1)
    headerDiv.appendChild(headerTempSpan)

    return headerDiv;
}

let headerEntry = document.querySelector('.header-container');
let header = Header();
headerEntry.appendChild(header)

