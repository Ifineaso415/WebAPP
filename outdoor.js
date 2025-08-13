"use strict";

<<<<<<< Updated upstream
// Airtable API constants
const OUTDOOR_URL =
  "https://api.airtable.com/v0/appyPO0xrhPPEy72s/Outdoor";
const INDOOR_URL =
  "https://api.airtable.com/v0/appyPO0xrhPPEy72s/Indoor";
const AIRTABLE_TOKEN =
  "patSMmsMZV3ld7iSm.adf9b201bf5b4fad908e372c585816eb2521b5e7086b7a3c9418caaa099ad817";
=======
const outdoorCourts = [
  {
    name: "Alta Plaza Park",
    addr: "2499 Steiner St, San Francisco, CA",
    hours: "6am-10pm",
    nets: 4,
    courts: 2,
    map: "https://maps.app.goo.gl/UYhycVNDrhVrRaRV7",
  
  },
  {
    name: "Buena Vista Park",
    addr: "198 Buena Vista Ave E, San Francisco, CA",
    hours: "6am-10pm",
    nets: 2,
    courts: 1,
    map: "https://maps.app.goo.gl/3f56TAhMwgNd6ib26",
  },
  {
    name: "Carl Larsen Park",
    addr: "850 Vicente St, San Francisco, CA",
    hours: "6am-10pm",
    nets: 2,
    courts: 1,
    map: "https://maps.app.goo.gl/QzJLJaEcLh7dCsAL6",
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
>>>>>>> Stashed changes

// Fetch courts from Airtable and render simple cards
async function fetchAndRenderCourts(type = "outdoor") {
  const container = document.getElementById("carousel-inner");
  container.innerHTML = "<p>Loading courts...</p>";
  const url = type === "indoor" ? INDOOR_URL : OUTDOOR_URL;
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${AIRTABLE_TOKEN}`,
      },
    });
    const data = await response.json();
    if (!data.records) {
      container.innerHTML = "<p>No courts found.</p>";
      return;
    }
    container.innerHTML = data.records
      .map((rec) => {
        const fields = rec.fields;
        const imgSrc =
          fields.Images && fields.Images[0]
            ? fields.Images[0].url
            : `https://via.placeholder.com/500x250?text=${encodeURIComponent(
                fields.Name
              )}`;
        return `
          <div class="card court-card mx-auto mb-3" style="max-width: 500px; cursor:pointer;" onclick="showCourtDetail('${rec.id}', 'outdoor')">
            <img src="${imgSrc}" class="card-img-top court-image" alt="${fields.Name}" />
            <div class="card-body">
              <h5 class="card-title">${fields.Name}</h5>
              <p class="card-text">${fields.Address || ""}</p>
            </div>
          </div>
        `;
      })
      .join("");
  } catch (err) {
    container.innerHTML = `<p>Error loading courts: ${err.message}</p>`;
  }
}

// Show detailed view for a court
async function showCourtDetail(recordId, type = "outdoor") {
  const container = document.getElementById("carousel-inner");
  container.innerHTML = "<p>Loading details...</p>";
  const url = type === "indoor" ? INDOOR_URL : OUTDOOR_URL;
  try {
    const response = await fetch(`${url}/${recordId}`, {
      headers: {
        Authorization: `Bearer ${AIRTABLE_TOKEN}`,
      },
    });
    const data = await response.json();
    const fields = data.fields;
    const imgSrc =
      fields.Images && fields.Images[0]
        ? fields.Images[0].url
        : `https://via.placeholder.com/500x250?text=${encodeURIComponent(
            fields.Name
          )}`;
    container.innerHTML = `
      <div class="card court-card mx-auto mb-3" style="max-width: 500px;">
        <img src="${imgSrc}" class="card-img-top court-image" alt="${fields.Name}" />
        <div class="card-body">
          <h5 class="card-title">${fields.Name}</h5>
          <p class="card-text">
            <strong>Address:</strong> ${fields.Address || ""}<br />
            <strong>Zip:</strong> ${fields.Zip || ""}<br />
            <strong>Number of Courts:</strong> ${fields["Number of Courts"] || ""}<br />
            <strong>Availability:</strong> ${fields.Availability || ""}<br />
            <strong>Type:</strong> ${fields.Type || ""}<br />
          </p>
          ${
            fields.Map
              ? `<a href="${fields.Map}" target="_blank" class="btn btn-outline-dark btn-sm">View on Map</a>`
              : ""
          }
          <button class="btn btn-secondary mt-2" onclick="fetchAndRenderCourts('outdoor')">Back to List</button>
        </div>
      </div>
    `;
  } catch (err) {
    container.innerHTML = `<p>Error loading details: ${err.message}</p>`;
  }
}

// On page load, show outdoor courts list
window.addEventListener("DOMContentLoaded", () => {
  fetchAndRenderCourts("outdoor");
});