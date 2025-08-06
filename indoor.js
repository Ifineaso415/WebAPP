"use strict";

const indoorCourts = [
  {
    name: "Eureka Valley Rec Center",
    addr: "100 Collingwood Street, 94114",
    hours: "Mon-Fri 9am-9pm, Sat 9am-5pm, Sun Closed",
    nets: 3,
    courts: 1,
    map: "https://maps.app.goo.gl/J1B2Ld3BruhsXz5m9",
  },
  {
    name: "Glen Park Rec Center",
    addr: "Bosworth & O'Shaughnessy 70 Elk St., 94131",
    hours: "Mon-Fri 9am-9pm, Sat 9am-5pm, Sun Closed",
    nets: 3,
    courts: 1,
    map: "https://maps.app.goo.gl/1HXrwuUc7Ss23aTs9",
  },
  {
    name: "Hamilton Rec Center",
    addr: "1900 Geary Boulevard, 94115",
    hours: "Mon-Fri 9am-9pm, Sat 9am-5pm, Sun Closed",
    nets: 3,
    courts: 1,
    map: "https://maps.app.goo.gl/8cPuWFgjy3C68Eid9",
  },
  {
    name: "Minnie & Lovie Ward Rec Center",
    addr: "650 Capitol Avenue, 94112",
    hours: "Mon-Fri 9am-9pm, Sat 9am-5pm, Sun Closed",
    nets: 3,
    courts: 1,
    map: "https://maps.app.goo.gl/QsF7V5KLagcjLzgn7",
  },
  {
    name: "Moscone Rec Center",
    addr: "1800 Chestnut Street, 94123",
    hours: "Mon-Fri 9am-9pm, Sat 9am-5pm, Sun Closed",
    nets: 1,
    courts: 1,
    map: "https://maps.app.goo.gl/KfaXLLPWVxWbQ8af9",
  },
  {
    name: "Palace of Fine Arts",
    addr: "3601 Lyon St, 94123",
    hours: "Mon-Fri 9am-9pm, Sat 9am-5pm, Sun Closed",
    nets: 3,
    courts: 1,
    map: "https://maps.app.goo.gl/uXNnF5a2TG7oJEhMA",
  },
  {
    name: "Richmond Rec Center",
    addr: "251 18th Avenue, 94121",
    hours: "Mon-Fri 9am-9pm, Sat 9am-5pm, Sun Closed",
    nets: 4,
    courts: 1,
    map: "https://maps.app.goo.gl/ijRteYM9eZ7M18Wz8",
  },
  {
    name: "Upper Noe Rec Center",
    addr: "Day and Sanchez Street 295 Day Street, 94131",
    hours: "Mon-Fri 9am-9pm, Sat 9am-5pm, Sun Closed",
    nets: 4,
    courts: 1,
    map: "https://maps.app.goo.gl/ip2nnnj7NV8fdocB9",
  },
];

function createCourtCard(court) {
  return `
    <div class="col-md-4 mb-4">
      <a href="${court.map}" target="_blank" class="text-decoration-none">
        <div class="card h-100 shadow-sm">
          <img src="https://via.placeholder.com/400x200?text=Pickleball+Court" class="card-img-top" alt="Court image placeholder">
          <div class="card-body">
            <h5 class="card-title">${court.name}</h5>
            <p class="card-text">
              ${court.addr}<br />
              <strong>Hours:</strong> ${court.hours}<br />
              <strong>Nets:</strong> ${court.nets}<br />
              <strong>Courts:</strong> ${court.courts}
            </p>
            <span class="btn btn-sm btn-outline-primary mt-2">
              <i class="fas fa-map-marker-alt"></i> View on Map
            </span>
          </div>
        </div>
      </a>
    </div>`;
}

function renderIndoorCourts() {
  document.getElementById("indoor-list").innerHTML = indoorCourts
    .map(createCourtCard)
    .join("");
}

document.addEventListener("DOMContentLoaded", renderIndoorCourts);