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
    ////create elements/////
    const headerDiv = document.createElement('div');
    const headerDate = document.createElement('span');
    const headerH1 = document.createElement('h1');
    const headerTemp = document.createElement('span');


    ////add classnames///////
    headerDiv.classList.add('header');
    headerDate.classList.add('date');
    headerTemp.classList.add('temp');

    ////element content//////
    headerDiv.appendChild(headerDate);
    headerDiv.appendChild(headerH1);
    headerDiv.appendChild(headerTemp);

    headerDate.textContent = 'MARCH 28, 2019';

    headerH1.textContent = 'Lambda Times';

    headerTemp.textContent = '98°';



    return headerDiv;
    
}

let header = document.querySelector('.header-container');
header.appendChild(Header())
