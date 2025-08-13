"use strict";

// Airtable API constants
const OUTDOOR_URL = "https://api.airtable.com/v0/appyPO0xrhPPEy72s/Outdoor";
const INDOOR_URL = "https://api.airtable.com/v0/appyPO0xrhPPEy72s/Indoor";
const AIRTABLE_TOKEN = "patSMmsMZV3ld7iSm.adf9b201bf5b4fad908e372c585816eb2521b5e7086b7a3c9418caaa099ad817";

// Fetch courts from Airtable and render simple cards
async function fetchAndRenderCourts() {
  const container = document.getElementById("carousel-inner");
  container.innerHTML = "<p>Loading courts...</p>";
  async function fetchAndRenderCourts(type = "outdoor") {
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
    container.innerHTML = data.records.map((rec) => {
      const fields = rec.fields;
      const imgSrc = fields.Images && fields.Images[0] ? fields.Images[0].url : `https://via.placeholder.com/500x250?text=${encodeURIComponent(fields.Name)}`;
      return `
        <div class="card court-card mx-auto mb-3" style="max-width: 500px; cursor:pointer;" onclick="showCourtDetail('${rec.id}')">
          <img src="${imgSrc}" class="card-img-top court-image" alt="${fields.Name}" />
          <div class="card-body">
            <h5 class="card-title">${fields.Name}</h5>
            <p class="card-text">${fields.Address || ""}</p>
          </div>
        </div>
      `;
    }).join("");
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
    const imgSrc = fields.Images && fields.Images[0] ? fields.Images[0].url : `https://via.placeholder.com/500x250?text=${encodeURIComponent(fields.Name)}`;
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
          ${fields.Map ? `<a href="${fields.Map}" target="_blank" class="btn btn-outline-dark btn-sm">View on Map</a>` : ""}
          <button class="btn btn-secondary mt-2" onclick="fetchAndRenderCourts()">Back to List</button>
        </div>
      </div>
    `;
  } catch (err) {
    container.innerHTML = `<p>Error loading details: ${err.message}</p>`;
  }
}

// On page load, show courts list
// To show indoor courts, call fetchAndRenderCourts('indoor')
window.addEventListener("DOMContentLoaded", () => {
  // This page now loads indoor courts by default
  fetchAndRenderCourts('indoor');
});






