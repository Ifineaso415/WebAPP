"use strict";

// Hardcoded court data for reliable display
document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('carousel-inner');
  container.innerHTML = [
    {
      name: 'Eureka Valley Rec Center',
      address: '100 Collingwood Street',
      zip: '94114',
      map: 'https://maps.app.goo.gl/J1B2Ld3BruhsXz5m9',
      courts: 3,
      availability: 'open play',
      image: 'images/Eureka Valley Rec Center.jpeg'
    },
    {
      name: 'Glen Park Rec Center',
      address: "Bosworth & O'Shaughnessy 70 elk st.",
      zip: '94131',
      map: 'https://maps.app.goo.gl/1HXrwuUc7Ss23aTs9',
      courts: 3,
      availability: 'open play',
      image: 'images/Glen Park Rec Center.jpg'
    },
    {
      name: 'Hamilton Rec Center',
      address: '1900 Geary Boulevard',
      zip: '94115',
      map: 'https://maps.app.goo.gl/8cPuWFgjy3C68Eid9',
      courts: 3,
      availability: 'open play',
      image: 'images/Hamilton Rec Center.jpeg'
    },
    {
      name: 'Minnie & Lovie Ward Rec Center',
      address: '650 Capitol Avenue',
      zip: '94112',
      map: 'https://maps.app.goo.gl/QsF7V5KLagcjLzgn7',
      courts: 3,
      availability: 'open play',
      image: 'images/Minnie & Lovie Ward Rec Center.jpeg'
    },
    {
      name: 'Moscone Rec Center',
      address: '1800 Chestnut Street',
      zip: '94123',
      map: 'https://maps.app.goo.gl/KfaXLLPWVxWbQ8af9',
      courts: 1,
      availability: 'open play',
      image: 'images/Moscone Rec Center.jpg'
    },
    {
      name: 'Palace of Fine Arts',
      address: '3601 Lyon St',
      zip: '94123',
      map: 'https://maps.app.goo.gl/uXNnF5a2TG7oJEhMA',
      courts: 3,
      availability: 'open play',
      image: 'images/Palace of Fine Arts.jpg'
    },
    {
      name: 'Richmond Rec Center',
      address: '251 18th Avenue',
      zip: '94121',
      map: 'https://maps.app.goo.gl/ijRteYM9eZ7M18Wz8',
      courts: 4,
      availability: 'open play',
      image: 'images/Richmond Rec Center.jpeg'
    },
    {
      name: 'Upper Noe Rec Center',
      address: 'Day and Sanchez Street 295 Day Street',
      zip: '94131',
      map: 'https://maps.app.goo.gl/ip2nnnj7NV8fdocB9',
      courts: 4,
      availability: 'open play',
      image: 'images/Upper Noe Rec Center.jpeg'
    }
  ].map(court => `
    <div class="card court-card mx-auto mb-3" style="max-width: 500px;">
      <img src="${court.image}" class="card-img-top court-image" alt="${court.name}" />
      <div class="card-body">
        <h5 class="card-title">${court.name}</h5>
        <p class="card-text">
          <strong>Address:</strong> ${court.address}<br />
          <strong>Zip:</strong> ${court.zip}<br />
          <strong>Number of Courts:</strong> ${court.courts}<br />
          <strong>Availability:</strong> ${court.availability}<br />
        </p>
        <a href="${court.map}" target="_blank" class="btn btn-outline-dark btn-sm">View on Map</a>
      </div>
    </div>
  `).join('');
});






