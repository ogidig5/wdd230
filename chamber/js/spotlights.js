const requestURL = 'lesson09/business.json';
const sections = document.getElementById('spotlights');
let spotlightNumber = 1;


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {

        const business= jsonObject['business'];

        business.forEach(displaySpotlights);
    });

function displaySpotlights(business) {

    let membership = business.membership;
    let randInt = getRndInteger(0, 30);
    
    if (spotlightNumber < 4 && (membership === "Silver" || membership === "Gold")) {
        if (randInt % 2 === 0) {

            let section = document.createElement('section');
            let h3 = document.createElement('h3');
            let portrait = document.createElement('img');
            let membershipLevel = document.createElement('p');
            let contact = document.createElement('p');

            section.setAttribute('id', `spotlight-${spotlightNumber}`);

            h3.textContent = business.name;

            portrait.setAttribute('src', business.image);
            portrait.setAttribute('alt', `Image for ${business.name}`);
            portrait.setAttribute('loading', 'lazy');

            membershipLevel.textContent = `${membership}`;

            contact.setAttribute('class', 'spotlight-contact');
            contact.innerHTML = `Email: ${business.email} Phone: ${business.phone} <a href='#'>${business.website}</a>`;

            section.appendChild(h3);
            section.appendChild(portrait);
            section.appendChild(membershipLevel);
            section.appendChild(contact);

            sections.appendChild(section);

            spotlightNumber += 1;
        }

    }
    
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }