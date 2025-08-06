"use strict";

const outdoorCourts = [
  {
    name: "Alta Plaza Park",
    addr: "2499 Steiner St, San Francisco, CA",
    hours: "6am-10pm",
    nets: 4,
    courts: 2,
    map: "https://maps.app.goo.gl/6w6kQ2QkQ2QkQ2Qk7",
  },
  {
    name: "Buena Vista Park",
    addr: "198 Buena Vista Ave E, San Francisco, CA",
    hours: "6am-10pm",
    nets: 2,
    courts: 1,
    map: "https://maps.app.goo.gl/8v8v8v8v8v8v8v8v9",
  },
  {
    name: "Carl Larsen Park",
    addr: "850 Vicente St, San Francisco, CA",
    hours: "6am-10pm",
    nets: 2,
    courts: 1,
    map: "https://maps.app.goo.gl/7c7c7c7c7c7c7c7c8",
  },
  {
    name: "Crocker Amazon Playground",
    addr: "799 Moscow St, San Francisco, CA",
    hours: "6am-10pm",
    nets: 6,
    courts: 3,
    map: "https://maps.app.goo.gl/5a5a5a5a5a5a5a5a6",
  },
  {
    name: "East Cut",
    addr: "250 Main St, San Francisco, CA",
    hours: "6am-10pm",
    nets: 2,
    courts: 1,
    map: "https://maps.app.goo.gl/4e4e4e4e4e4e4e4e5",
  },
  {
    name: "George Christopher Playground",
    addr: "5210 Diamond Heights Blvd, San Francisco, CA 94131",
    hours: "6am-10pm",
    nets: 2,
    courts: 1,
    map: "https://maps.app.goo.gl/3g3g3g3g3g3g3g3g4",
  },
  {
    name: "Goldman Tennis Center (GGP)",
    addr: "Nancy Pelosi Dr & 50 Bowling Green Dr, Golden Gate Park, San Francisco, CA",
    hours: "6am-10pm",
    nets: 8,
    courts: 4,
    map: "https://maps.app.goo.gl/2g2g2g2g2g2g2g2g3",
  },
  {
    name: "Jackson Playground",
    addr: "17th & Arkansas St, San Francisco, CA",
    hours: "6am-10pm",
    nets: 2,
    courts: 1,
    map: "https://maps.app.goo.gl/1j1j1j1j1j1j1j1j2",
  },
  {
    name: "Louis Sutter Pickleball Courts",
    addr: "1150 Wayland St, San Francisco, CA",
    hours: "6am-10pm",
    nets: 6,
    courts: 6,
    map: "https://maps.app.goo.gl/9l9l9l9l9l9l9l9l0",
  },
  {
    name: "Moscone Playground",
    addr: "1800 Chestnut St, San Francisco, CA 94123",
    hours: "6am-10pm",
    nets: 2,
    courts: 1,
    map: "https://maps.app.goo.gl/8m8m8m8m8m8m8m8m9",
  },
  {
    name: "Parkside Square",
    addr: "28th Avenue and Vicente Street, San Francisco, CA",
    hours: "6am-10pm",
    nets: 2,
    courts: 1,
    map: "https://maps.app.goo.gl/7p7p7p7p7p7p7p7p8",
  },
  {
    name: "Presidio Wall Playground",
    addr: "Pacific Ave and Spruce St, San Francisco, CA",
    hours: "6am-10pm",
    nets: 2,
    courts: 1,
    map: "https://maps.app.goo.gl/6p6p6p6p6p6p6p6p7",
  },
  {
    name: "Richmond Playground",
    addr: "18th Ave & Lake St, San Francisco, CA",
    hours: "6am-10pm",
    nets: 2,
    courts: 1,
    map: "https://maps.app.goo.gl/5r5r5r5r5r5r5r5r6",
  },
  {
    name: "Rossi Playground",
    addr: "600 Arguello Blvd, San Francisco, CA",
    hours: "6am-10pm",
    nets: 2,
    courts: 1,
    map: "https://maps.app.goo.gl/4r4r4r4r4r4r4r4r5",
  },
  {
    name: "States Street Playground",
    addr: "States Street, San Francisco, CA",
    hours: "6am-10pm",
    nets: 1,
    courts: 1,
    map: "https://maps.app.goo.gl/3s3s3s3s3s3s3s3s4",
  },
  {
    name: "Stern Grove",
    addr: "22nd Avenue and Sloat Boulevard, San Francisco, CA",
    hours: "6am-10pm",
    nets: 2,
    courts: 1,
    map: "https://maps.app.goo.gl/2s2s2s2s2s2s2s2s3",
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
            <span class="btn btn-sm btn-outline-success mt-2">
              <i class="fas fa-map-marker-alt"></i> View on Map
            </span>
          </div>
        </div>
      </a>
    </div>`;
}

function renderOutdoorCourts() {
  document.getElementById("outdoor-list").innerHTML = outdoorCourts
    .map(createCourtCard)
    .join("");
}

document.addEventListener("DOMContentLoaded", renderOutdoorCourts);