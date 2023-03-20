export const header = (title, description, className) => {
  const menuHeader = document.createElement('div');
  menuHeader.classList.add(className);
  const headerText = document.createElement('div');
  headerText.classList.add('headerTitle');
  const headerParagraph = document.createElement('div');
  headerParagraph.classList.add('headerParagraph');
  headerParagraph.textContent = description;
  headerText.textContent = title;
  menuHeader.appendChild(headerText);
  menuHeader.appendChild(headerParagraph);

  return menuHeader;
};
export const menuDishes = (imgSrc, title, description, price) => {
  const newGrid = document.createElement('div');
  const priceTag = document.createElement('div');
  const dishGrid = document.createElement('div');
  const dishTitle = document.createElement('div');

  const dishDescription = document.createElement('div');
  const dishImg = document.createElement('img');
  dishImg.src = imgSrc;
  dishImg.classList.add('dishImg');
  priceTag.classList.add('priceTag');
  dishDescription.classList.add('dishDescription');
  dishTitle.classList.add('dishTitle');
  dishTitle.textContent = title;
  priceTag.textContent = price;
  dishDescription.textContent = description;
  dishGrid.classList.add('dishGrid');

  dishGrid.appendChild(priceTag);
  dishGrid.appendChild(dishImg);

  dishGrid.appendChild(dishTitle);
  dishGrid.appendChild(dishDescription);

  newGrid.appendChild(dishGrid);
  return newGrid;
};
export const createGridContainer = (...grid) => {
  const dishGridContainer = document.createElement('div');

  dishGridContainer.classList.add('dishGridContainer');

  for (let i = 0; i < grid.length; i += 1) {
    dishGridContainer.appendChild(grid[i]);
  }

  return dishGridContainer;
};
