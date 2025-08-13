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
        </div>
      </div>
    `;
  } catch (err) {
    container.innerHTML = `<p>Error loading details: ${err.message}</p>`;
  }
}

// On page load, show outdoor courts list
document.addEventListener('DOMContentLoaded', function() {
  const courts = [
    {
      name: 'Moscone Playground',
      address: '1800 Chestnut St',
      zip: '94123',
      map: 'https://maps.google.com/?q=Moscone+Playground+1800+Chestnut+St+San+Francisco+CA+94123',
      courts: 6,
      availability: 'open play',
      image: 'images/Moscone Playground.webp'
    },
    {
      name: 'Jackson Playground',
      address: '1500 Mariposa St',
      zip: '94107',
      map: 'https://maps.google.com/?q=Jackson+Playground+1500+Mariposa+St+San+Francisco+CA+94107',
      courts: 4,
      availability: 'open play',
      image: 'images/Jackson Playground.jpg'
    },
    {
      name: 'Alta Plaza Park',
      address: 'Jackson St & Steiner St',
      zip: '94115',
      map: 'https://maps.google.com/?q=Alta+Plaza+Park+Jackson+St+%26+Steiner+St+San+Francisco+CA+94115',
      courts: 2,
      availability: 'open play',
      image: 'images/Alta Plaza Park.webp'
    },
    {
      name: 'Buena Vista Park',
      address: 'Buena Vista Ave E & Duboce Ave',
      zip: '94117',
      map: 'https://maps.google.com/?q=Buena+Vista+Park+Buena+Vista+Ave+E+%26+Duboce+Ave+San+Francisco+CA+94117',
      courts: 2,
      availability: 'open play',
      image: 'images/Buena Vista Park.jpg'
    },
    {
      name: 'Goldman Tennis Center (GGP)',
      address: 'Golden Gate Park, Nancy Pelosi Dr',
      zip: '94117',
      map: 'https://maps.google.com/?q=Goldman+Tennis+Center+Golden+Gate+Park+Nancy+Pelosi+Dr+San+Francisco+CA+94117',
      courts: 4,
      availability: 'open play',
      image: 'images/Goldman Tennis Center (GGP).jpg'
    },
    {
      name: 'Parkside Square',
      address: '28th Ave & Vicente St',
      zip: '94116',
      map: 'https://maps.google.com/?q=Parkside+Square+28th+Ave+%26+Vicente+St+San+Francisco+CA+94116',
      courts: 2,
      availability: 'open play',
      image: 'images/Parkside Square.jpeg'
    },
    {
      name: 'Presidio Wall Playground',
      address: 'West Pacific Ave & Spruce St',
      zip: '94118',
      map: 'https://maps.google.com/?q=Presidio+Wall+Playground+West+Pacific+Ave+%26+Spruce+St+San+Francisco+CA+94118',
      courts: 3,
      availability: 'open play',
      image: 'images/Presidio Wall Playground.jpeg'
    },
    {
      name: 'States Street Playground',
      address: '50 States St',
      zip: '94114',
      map: 'https://maps.google.com/?q=States+Street+Playground+50+States+St+San+Francisco+CA+94114',
      courts: 1,
      availability: 'open play',
      image: 'images/States Street Playground.png'
    },
    {
      name: 'Carl Larsen Park',
      address: '19th Ave & Vicente St',
      zip: '94116',
      map: 'https://maps.google.com/?q=Carl+Larsen+Park+19th+Ave+%26+Vicente+St+San+Francisco+CA+94116',
      courts: 2,
      availability: 'open play',
      image: 'images/Carl Larsen.jpg'
    },
    {
      name: 'Crocker Amazon',
      address: '799 Moscow St',
      zip: '94112',
      map: 'https://maps.google.com/?q=Crocker+Amazon+799+Moscow+St+San+Francisco+CA+94112',
      courts: 2,
      availability: 'open play',
      image: 'images/Crocker Amazon.jpg'
    },
    {
      name: 'East Cut',
      address: 'Beale St & Howard St',
      zip: '94105',
      map: 'https://maps.google.com/?q=East+Cut+Beale+St+%26+Howard+St+San+Francisco+CA+94105',
      courts: 2,
      availability: 'open play',
      image: 'images/East Cut.jpg'
    },
    {
      name: 'Louis Sutter Pickleball Courts',
      address: 'Sutter Ave & University St',
      zip: '94134',
      map: 'https://maps.google.com/?q=Louis+Sutter+Pickleball+Courts+Sutter+Ave+%26+University+St+San+Francisco+CA+94134',
      courts: 4,
      availability: 'open play',
      image: 'images/Louis Sutter Pickleball Courts.jpg'
    },
    {
      name: 'Richmond Playground',
      address: '18th Ave & Lake St',
      zip: '94121',
      map: 'https://maps.google.com/?q=Richmond+Playground+18th+Ave+%26+Lake+St+San+Francisco+CA+94121',
      courts: 2,
      availability: 'open play',
      image: 'images/Richmond Playground.jpeg'
    },
    {
      name: 'Rossi Playground',
      address: '600 Arguello Blvd',
      zip: '94118',
      map: 'https://maps.google.com/?q=Rossi+Playground+600+Arguello+Blvd+San+Francisco+CA+94118',
      courts: 2,
      availability: 'open play',
      image: 'images/Rossi Playground.jpg'
    },
    {
      name: 'Stern Grove',
      address: '19th Ave & Sloat Blvd',
      zip: '94132',
      map: 'https://maps.google.com/?q=Stern+Grove+19th+Ave+%26+Sloat+Blvd+San+Francisco+CA+94132',
      courts: 2,
      availability: 'open play',
      image: 'images/Stern Grove.jpeg'
    }
  ];
  const container = document.getElementById('carousel-inner');
  function renderList() {
    let html = '<div class="row g-4 justify-content-center">';
    courts.forEach((court, idx) => {
      html += `
        <div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
          <div class="card court-card mb-3" style="max-width: 360px; min-width: 300px; min-height: 420px; height: 420px;">
            <img src="${court.image}" class="card-img-top court-image" alt="${court.name}" style="cursor:pointer;" onclick="showCourtDetail(${idx})" />
            <div class="card-body text-center">
              <h5 class="card-title">${court.name}</h5>
            </div>
          </div>
        </div>
      `;
    });
    html += '</div>';
    container.innerHTML = html;
    document.removeEventListener('mousedown', outsideDetailClick);
  }
  window.showCourtDetail = function(idx) {
    const court = courts[idx];
    container.innerHTML = `
      <div class="d-flex justify-content-center align-items-center" style="min-height: 80vh;">
        <div class="card court-card" id="detail-card" style="max-width: 400px; min-width: 300px; min-height: 420px; height: 420px;">
          <img src="${court.image}" class="card-img-top court-image" alt="${court.name}" />
          <div class="card-body">
            <h5 class="card-title">${court.name}</h5>
            <p class="card-text">
              <strong>Address:</strong> ${court.address}<br />
              <strong>Zip:</strong> ${court.zip}<br />
              <strong>Number of Courts:</strong> ${court.courts}<br />
              <strong>Availability:</strong> ${court.availability}<br />
            </p>
            <a href="${court.map}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-dark btn-sm">View on Map</a>
          </div>
        </div>
      </div>
    `;
    setTimeout(() => {
      document.addEventListener('mousedown', outsideDetailClick);
    }, 0);
  };
  function outsideDetailClick(e) {
    const card = document.getElementById('detail-card');
    if (!card) return;
    if (card.contains(e.target)) {
      // If clicking the map link, don't close
      if (e.target.tagName === 'A') return;
      return;
    }
    renderList();
  }
  renderList();
});