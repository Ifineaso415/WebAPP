"use strict";

// Airtable API constants
// These are now only used for the proxy
const OUTDOOR_URL = "https://api.airtable.com/v0/appyPO0xrhPPEy72s/Outdoor";
const INDOOR_URL = "https://api.airtable.com/v0/appyPO0xrhPPEy72s/Indoor";
const AIRTABLE_TOKEN = "patYyGMLKmvINy9XH.60aeff31972e965ec2110dcd9652fcebcd43964f633a2af0fc18aa72f5b191a5";

// Fetch courts from Airtable and render simple cards
async function fetchAndRenderCourts(type = "outdoor") {
  const container = document.getElementById("carousel-inner");
  container.innerHTML = "<p>Loading courts...</p>";
  // Use local proxy for Airtable requests
  const url = `/api/courts?type=${type}`;
  try {
    const response = await fetch(url);
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
  // Use local proxy for Airtable requests
  const url = `/api/courts?type=${type}&id=${recordId}`;
  try {
    const response = await fetch(url);
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
import('./Index.js').then(() => {
  window.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('carousel-inner');
    container.innerHTML = [
      {
        name: 'Moscone Playground',
        address: '1800 Chestnut St, San Francisco, CA 94123',
        image: 'images/Moscone Playground.webp',
        zip: '94123',
        courts: 6,
        availability: 'Open',
        type: 'Outdoor',
        map: 'https://goo.gl/maps/xyz3'
      },
      {
        name: 'Jackson Playground',
        address: '1500 Mariposa St, San Francisco, CA 94107',
        image: 'images/Jackson Playground_files/499578554_18069213649949193_3539798198266338672_n.jpg',
        zip: '94107',
        courts: 4,
        availability: 'Open',
        type: 'Outdoor',
        map: 'https://goo.gl/maps/xyz4'
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
            <strong>Type:</strong> ${court.type}<br />
          </p>
          <a href="${court.map}" target="_blank" class="btn btn-outline-dark btn-sm">View on Map</a>
        </div>
      </div>
    `).join('');
  });
});