export const homeHeader = () => {
  const header = document.createElement('header');
  const logoContainerAndLogoTextCotainer = document.createElement('div');
  logoContainerAndLogoTextCotainer.classList.add('logoContainer');
  const logoContainer = document.createElement('div');
  const logoTextContainer = document.createElement('div');
  const logo = document.createElement('img');
  const logoText = document.createElement('div');
  logoText.textContent = 'restaurant';
  logoContainer.appendChild(logo);
  logoTextContainer.appendChild(logoText);
  logo.src = 'img/logo.svg';
  logoContainerAndLogoTextCotainer.appendChild(logoContainer);
  logoContainerAndLogoTextCotainer.appendChild(logoTextContainer);

  const nav = document.createElement('nav');
  const ul = document.createElement('ul');

  const li = document.createElement('li');
  const li2 = document.createElement('li');
  const li3 = document.createElement('li');

  const homeLink = document.createElement('a');
  const menuLink = document.createElement('a');
  const contactLink = document.createElement('a');

  homeLink.href = '#';
  menuLink.href = '#';
  contactLink.href = '#';

  homeLink.classList.add('home');

  menuLink.classList.add('menu');
  contactLink.classList.add('contact');

  homeLink.textContent = 'Home';
  menuLink.textContent = 'Menu';
  contactLink.textContent = 'Contact';

  li.appendChild(homeLink);
  li2.appendChild(menuLink);
  li3.appendChild(contactLink);

  ul.appendChild(li);
  ul.appendChild(li2);
  ul.appendChild(li3);

  nav.appendChild(ul);

  const headerButton = document.createElement('button');
  headerButton.textContent = 'Book a table';

  header.appendChild(logoContainerAndLogoTextCotainer);
  header.appendChild(nav);
  header.appendChild(headerButton);

  return {
    header, homeLink, menuLink, contactLink, headerButton,
  };
};

export const homePage = () => {
  const leftColumnDiv = document.createElement('div');
  const rightColumnDiv = document.createElement('div');

  const leftColumn = () => {
    leftColumnDiv.classList.add('leftColumnDiv');

    const titleContainer = document.createElement('div');
    const paragraphContainer = document.createElement('div');

    titleContainer.textContent = 'We provide the best food for you';
    titleContainer.classList.add('titleContainer');
    paragraphContainer.classList.add('paragraphContainer');
    paragraphContainer.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    const menuBtn = document.createElement('button');
    const BookaTableBtn = document.createElement('button');
    menuBtn.classList.add('menuBtn');
    BookaTableBtn.classList.add('bookBtn');
    menuBtn.textContent = 'Menu';
    BookaTableBtn.textContent = 'Book a table';
    const buttons = document.createElement('div');
    buttons.classList.add('leftColumnButtons');
    buttons.appendChild(menuBtn);
    buttons.appendChild(BookaTableBtn);

    const socials = document.createElement('div');
    socials.classList.add('socials');
    const twitter = document.createElement('img');
    const facebook = document.createElement('img');
    const instagram = document.createElement('img');
    twitter.src = 'img/facebook.png';
    facebook.src = 'img/facebook.png';
    instagram.src = 'img/facebook.png';
    socials.appendChild(twitter);
    socials.appendChild(facebook);
    socials.appendChild(instagram);
    leftColumnDiv.appendChild(titleContainer);
    leftColumnDiv.appendChild(paragraphContainer);
    leftColumnDiv.appendChild(buttons);
    leftColumnDiv.appendChild(socials);
    return leftColumnDiv;
  };
  const rightColumn = () => {
    const restaurantImgDiv = document.createElement('img');
    const homePageDishImg = document.createElement('img');
    const homePageDishContainer = document.createElement('div');
    homePageDishContainer.classList.add('homePageDishContainer');
    homePageDishContainer.appendChild(homePageDishImg);
    restaurantImgDiv.src = 'img/restaurant.png';
    restaurantImgDiv.classList.add('restaurantImg');
    homePageDishImg.src = 'img/homepage-dish.png';
    homePageDishImg.classList.add('homeDish');
    rightColumnDiv.appendChild(restaurantImgDiv);
    rightColumnDiv.appendChild(homePageDishContainer);
    rightColumnDiv.classList.add('rightColumnDiv');
    return rightColumnDiv;
  };
  return { leftColumn, rightColumn };
};
