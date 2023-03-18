export const contactSecondHeader = () => {
    const header = document.createElement('div');
    header.classList.add('contactHeader');
    const headerText = document.createElement('div');
    headerText.classList.add('headerTitle');
    const headerParagraph = document.createElement('div');
    headerParagraph.classList.add('headerParagraph');
    headerParagraph.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt';
    headerText.textContent = 'Contact Us';
    header.appendChild(headerText);
    header.appendChild(headerParagraph);
    
    return header;
}

const makeDiv = (text) => {
    const newDiv = document.createElement('div');
    newDiv.textContent = text;
    return newDiv;
}

export const contactInfo = () => {

    const contactInfoContainer = document.createElement('div');
    contactInfoContainer.classList.add('contactInfoContainer');
    const openingHoursInfoContainer = document.createElement('div');
    openingHoursInfoContainer.classList.add('openingHoursInfoContainer');
    const addressInfoContainer = document.createElement('div');
    addressInfoContainer.classList.add('addressInfoContainer');
    const addressInfo = document.createElement('div');
    
    const phoneNumberInfo = document.createElement('div');
    const openingHoursInfo = document.createElement('div');
    openingHoursInfo.classList.add('openingHoursInfo');
    addressInfo.classList.add('addressInfo');
    phoneNumberInfo.classList.add('phoneNumberInfo');
    openingHoursInfo.textContent = 'Opening Hours';
    const daysAndHours = [["Monday - Friday", "Saturday" , "Sunday"],
    ["8:00 am to 9:00 pm","8:00 am to 9:00 pm","CLOSED"]];
    addressInfo.innerText = '📍 9720 Ridgeview Ave Montgomery Village\nMD 20886';
    phoneNumberInfo.textContent = '☏ 123-456-789';
    addressInfoContainer.appendChild(addressInfo);
    addressInfoContainer.appendChild(phoneNumberInfo);

  openingHoursInfoContainer.appendChild(makeDiv(daysAndHours[0][0]));
  openingHoursInfoContainer.appendChild(makeDiv(daysAndHours[1][1]));
  openingHoursInfoContainer.appendChild(makeDiv(daysAndHours[0][1]));
  openingHoursInfoContainer.appendChild(makeDiv(daysAndHours[1][1]));
  openingHoursInfoContainer.appendChild(makeDiv(daysAndHours[0][2]));
  openingHoursInfoContainer.appendChild(makeDiv(daysAndHours[1][2]));
    contactInfoContainer.appendChild(openingHoursInfoContainer);
    contactInfoContainer.appendChild(addressInfoContainer);
    
    return contactInfoContainer;
}