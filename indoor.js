"use strict";

// Airtable API constants
const OUTDOOR_URL = "https://api.airtable.com/v0/appyPO0xrhPPEy72s/Outdoor";
const INDOOR_URL = "https://api.airtable.com/v0/appyPO0xrhPPEy72s/Indoor";
const AIRTABLE_TOKEN = "patYyGMLKmvINy9XH.60aeff31972e965ec2110dcd9652fcebcd43964f633a2af0fc18aa72f5b191a5";

// Fetch courts from Airtable and render simple cards
async function fetchAndRenderCourts(type = "indoor") {
  const container = document.getElementById("carousel-inner");
  if (!container) {
    console.error('Element with id "carousel-inner" not found.');
    return;
  }
  container.innerHTML = "<p>Loading courts...</p>";
  // Fetch directly from Airtable
  const url = INDOOR_URL;
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
        console.log('Airtable fields:', fields); // Debug log
        const imgSrc =
          fields.Images && fields.Images[0]
            ? fields.Images[0].url
            : `https://via.placeholder.com/500x250?text=${encodeURIComponent(
                fields.Name
              )}`;
        return `
          <div class="card court-card mx-auto mb-3" style="max-width: 500px; cursor:pointer;" onclick="showCourtDetail('${rec.id}', 'indoor')">
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
async function showCourtDetail(recordId, type = "indoor") {
  const container = document.getElementById("carousel-inner");
  if (!container) {
    console.error('Element with id "carousel-inner" not found.');
    return;
  }
  container.innerHTML = "<p>Loading details...</p>";
  // Fetch directly from Airtable
  const url = `${INDOOR_URL}/${recordId}`;
  try {
    const response = await fetch(url, {
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
          <button class="btn btn-secondary mt-2" onclick="fetchAndRenderCourts('indoor')">Back to List</button>
        </div>
      </div>
    `;
  } catch (err) {
    container.innerHTML = `<p>Error loading details: ${err.message}</p>`;
  }
}

// On page load, show indoor courts list
import('./Index.js').then(() => {
  window.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('carousel-inner');
    container.innerHTML = [
      {
        name: 'Hamilton Rec Center',
        address: '1900 Geary Blvd, San Francisco, CA 94115',
        image: 'images/Hamilton Rec Center.jpeg',
        zip: '94115',
        courts: 4,
        availability: 'Open',
        type: 'Indoor',
        map: 'https://goo.gl/maps/xyz1'
      },
      {
        name: 'Eureka Valley Rec Center',
        address: '100 Collingwood St, San Francisco, CA 94114',
        image: 'images/Eureka Valley Rec Center.jpeg',
        zip: '94114',
        courts: 3,
        availability: 'Open',
        type: 'Indoor',
        map: 'https://goo.gl/maps/xyz2'
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