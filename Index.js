"use strict";

const indoorCourts = [
  {
    name: "Eureka Valley Rec Center",
    addr: "100 Collingwood Street, 94114",
    hours: "Mon–Fri 9am–9pm, Sat 9am–5pm, Sun Closed",
    nets: 3,
    courts: 1,
    map: "https://maps.app.goo.gl/J1B2Ld3BruhsXz5m9",
    type: "Indoor",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrMqxvQYuDnu89gbBTc02SgljP9rznmSWpmytBgyy-gj0KNNqxUTYx8rOpTT6aQXlMgeVcbNKS6Y26A-EFyZEIIT60NVJwwVo2KNUdZuThmBSkrf-LMnlaJGaDFxTGs7iUFVRWu=s1360-w1360-h1020-rw",
  },
  {
    name: "Hamilton Rec Center",
    addr: "1900 Geary Blvd, 94115",
    hours: "Mon–Fri 9am–8pm, Sat 9am–1pm, Sun Closed",
    nets: 2,
    courts: 1,
    map: "https://maps.app.goo.gl/JLhJ2LBwqxwMbYxn6",
    type: "Indoor",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npFHL_CxfRSZPS9n_LhUi3En_jtdwTQT8fZwSym1McVRPoex_AyRPex3_6jspVts1efdRX_sRSEkdReD6MBkv07sx0XgCR9iz2ilwiStTWq1HrUq8egkKaX7tPUpcZh4_mzEw19_w=s1360-w1360-h1020-rw",
  },
];

const outdoorCourts = [
  {
    name: "Alta Plaza Park",
    addr: "2499 Steiner St, San Francisco, CA",
    hours: "6am–10pm",
    nets: 4,
    courts: 2,
    map: "https://maps.app.goo.gl/6w6kQ2QkQ2QkQ2Qk7",
    type: "Outdoor",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/21/Alta_Plaza_Park_SF_2021.jpg",
  },
  {
    name: "Presidio Wall Playground",
    addr: "336 Washington Blvd, 94129",
    hours: "6am–9pm",
    nets: 3,
    courts: 1,
    map: "https://maps.app.goo.gl/hjFeLdqMwYJmbdYj6",
    type: "Outdoor",
    image: "https://sfrecpark.org/wp-content/uploads/2020/07/presidio-wall-playground.jpg",
  },
  {
    name: "Potrero Hill Rec Center",
    addr: "801 Arkansas St, 94107",
    hours: "6am–8pm",
    nets: 2,
    courts: 1,
    map: "https://maps.app.goo.gl/s9r2sQJ3GT92gmZ67",
    type: "Outdoor",
    image: "https://sfrecpark.org/wp-content/uploads/2020/06/potrero-hill-rec.jpg",
  },
];

const allCourts = indoorCourts.concat(outdoorCourts);

// Shuffle helper function
function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

// Create carousel slide HTML
function createSlide(court, isActive) {
  const imgSrc =
    court.image ||
    `https://via.placeholder.com/500x250?text=${encodeURIComponent(court.name)}`;

  return `
    <div class="carousel-item ${isActive ? "active" : ""}">
      <div class="card court-card mx-auto" style="max-width: 500px;">
        <img src="${imgSrc}" class="card-img-top court-image" alt="${court.name}" />
        <div class="card-body">
          <h5 class="card-title">
            ${court.name}
            <span class="badge type-badge ${court.type.toLowerCase()}">${court.type}</span>
          </h5>
          <p class="card-text">
            ${court.addr}<br />
            <strong>Hours:</strong> ${court.hours}<br />
            <strong>Nets:</strong> ${court.nets}<br />
            <strong>Courts:</strong> ${court.courts}
          </p>
          <a href="${court.map}" target="_blank" class="btn btn-outline-dark btn-sm">View on Map</a>
        </div>
      </div>
    </div>
  `;
}

function showCarousel() {
  const container = document.getElementById("carousel-inner");
  const courts = shuffle(allCourts).slice(0, 5);
  container.innerHTML = courts.map((c, i) => createSlide(c, i === 0)).join("");
}

document.addEventListener("DOMContentLoaded", showCarousel);
