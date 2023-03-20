import { homeHeader, homePage } from './home';
import { header, menuDishes, createGridContainer } from './menu';
import { contactInfo } from './contact';

const content = document.getElementById('content');
const loadHome = () => {
  content.innerHTML = '';

  const combineLeftAndRightColumn = document.createElement('div');
  combineLeftAndRightColumn.classList.add('homeGrid');
  combineLeftAndRightColumn.appendChild(homePage().leftColumn());
  combineLeftAndRightColumn.appendChild(homePage().rightColumn());

  content.appendChild(homeHeader().header);

  content.appendChild(combineLeftAndRightColumn);
};
const loadMenu = () => {
  content.innerHTML = '';
  const menuMainContent = document.createElement('div');
  const menuHeaderContent = document.createElement('div');
  menuMainContent.classList.add('menuMainContent');
  menuHeaderContent.classList.add('menuHeaderContent');
  const description = 'Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor';
  menuHeaderContent.appendChild(homeHeader().header);

  menuMainContent.appendChild(header('Our Spcial Dishes', description, 'menuHeader'));
  const grid = menuDishes('img/dish1.png', 'Lumpia with Suace', description, '$12');
  const grid2 = menuDishes('img/dish2.png', 'Tofu Chili', description, '$112');
  const grid3 = menuDishes('img/dish3.png', 'Fish and Veggie', description, '$22');
  const grid4 = menuDishes('img/dish4.png', 'Egg and Cocumber', description, '$42');
  const grid5 = menuDishes('img/dish2.png', 'Tofu Chili', description, '$12');
  const grid6 = menuDishes('img/dish3.png', 'Egg and Cocumber', description, '$2');
  const grid7 = menuDishes('img/dish1.png', 'Fish and Veggie', description, '$62');
  const grid8 = menuDishes('img/dish3.png', 'Fish and Veggie', description, '$90');
  const grid9 = menuDishes('img/dish1.png', 'Fish and Veggie', description, '$62');
  const grid10 = menuDishes('img/dish4.png', 'Fish and Veggie', description, '$90');

  menuMainContent
    .appendChild(createGridContainer(
      grid,
      grid2,
      grid3,
      grid4,
      grid5,
      grid6,
      grid7,
      grid8,
      grid9,
      grid10,
    ));

  content.appendChild(menuHeaderContent);
  content.appendChild(menuMainContent);
};

const loadContact = () => {
  content.innerHTML = '';

  const contactMainContent = document.createElement('div');
  const contactHeaderContent = document.createElement('div');

  contactMainContent.classList.add('contactMainContent');
  contactHeaderContent.classList.add('contactHeaderContent');

  contactHeaderContent.appendChild(homeHeader().header);

  contactMainContent.appendChild(header('Contact Us', '', 'contactHeader'));
  contactMainContent.appendChild(contactInfo());
  content.appendChild(contactHeaderContent);
  content.appendChild(contactMainContent);
};
loadHome();
document.addEventListener('click', (e) => {
  const value = e.target.innerText;
  switch (value) {
    case 'Contact':
      loadContact();
      break;
    case 'Home':
      loadHome();
      break;
    case 'Menu':
      loadMenu();
      break;
    default:
      console.error('error');
  }
});
