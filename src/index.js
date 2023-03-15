import { homeHeader , homePage} from "./home";

import './style.css';

const loadHome = (() =>{


console.log(homeHeader());
console.log(homePage().leftColumn());
const content = document.getElementById('content');
const img = document.createElement('img');
img.src = 'homepage-dish.png';
const combineLeftAndRightColumn = document.createElement('div');
combineLeftAndRightColumn.classList.add('homeGrid');
combineLeftAndRightColumn.appendChild(homePage().leftColumn());
combineLeftAndRightColumn.appendChild(homePage().rightColumn());
//  combineLeftAndRightColumn.appendChild(homePage().rightColumn().homePageDishImg);
content.appendChild(homeHeader());

content.appendChild(combineLeftAndRightColumn);
})();

