const requestURL = 'https://ogidig5.github.io/wdd230/chamber/lesson09/business.json';

const cards = document.getElementById('dirCards');
const list = document.getElementById('dirList');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);

        const business = jsonObject['business'];

        business.forEach(displayBusinessCards);
        business.forEach(displayBusinessList);
    });

function displayBusinessCards(business) {
    let card = document.createElement('section');
    let portrait = document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let email = document.createElement('p');
    let website = document.createElement('a');

    portrait.setAttribute('src', business.image);
    portrait.setAttribute('alt', `portrait for ${business.name}`);
    portrait.setAttribute('loading', 'lazy');

    address.textContent = business.address;
    phone.textContent = business.phone;
    email.textContent = business.email;
    website.textContent = business.website;
    website.setAttribute('href', '#');

    card.appendChild(portrait);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    card.appendChild(email);

    cards.appendChild(card);
}

function displayBusinessList(business) {
    let listItem = document.createElement('section');
    let name = document.createElement('p');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('a');

    name.textContent = business.name;
    address.textContent = business.address;
    phone.textContent = business.phone;
    website.textContent = business.website;
    website.setAttribute('href', '#');

    listItem.appendChild(name);
    listItem.appendChild(address);
    listItem.appendChild(phone);
    listItem.appendChild(website);

    list.appendChild(listItem);
}
// THIS IS AN ALTERNATIVE WAY TO WRITE THE CODE:

// const requestURL = 'http://127.0.0.1:5500/chamber/lesson09/business.json';
// const cards = document.querySelector('.cards');


// fetch(requestURL)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (jsonObject) {
//     console.table(jsonObject);  // temporary checking for valid response and data parsing
//     const business = jsonObject['business'];
//     business.forEach(displayBusiness);

//     function displayBusiness(business) {
//       // Create elements to add to the document
//       let card = document.createElement('section');
//       card.setAttribute('class', 'bizSection');
//       let h2 = document.createElement('h2');
//       h2.setAttribute('class', 'bizTitle');
//       let portrait = document.createElement('img');
//       portrait.setAttribute('class', 'bizImage');
//       let address = document.createElement('p');
//       address.setAttribute('class', 'bizAddress');
//       let phone = document.createElement('p');
//       phone.setAttribute('class', 'bizPhone');
//       let email = document.createElement('p');
//       email.setAttribute('class', 'bizEmail');
    
//       // Change the textContent property of the h2 element to contain the busines's full name
//       h2.textContent = business.name;
//       address.textContent = 'Address: ' + business.address;
//       phone.textContent = 'Phone Number: ' + business.phone;
//       email.textContent = 'Email: ' + business.email
//       // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
//       portrait.setAttribute('src', business.image);
//       portrait.setAttribute('alt', 'Portait of ' + business.name);
//       portrait.setAttribute('loading', 'lazy');
    
//       // Add/append the section(card) with the h2 element
//       card.appendChild(h2);
//       card.appendChild(portrait);
//       card.appendChild(address);
//       card.appendChild(phone);
//       card.appendChild(email);
      
//       // Add/append the existing HTML div with the cards class with the section(card)
//       cards.appendChild(card);
//     }
//   });
