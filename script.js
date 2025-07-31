"use strict";

const AIRTABLE_API_URL = "https://api.airtable.com/v0/appyPO0xrhPPEy72s/Outdoor";

const AIRTABLE_API_KEY = "patkPgfH3w0Zj9FZy.f0419b0aa9697842f9b4b5f0e8e1b342009fc63756b22c3a8b5cce8959ba6725";

function createCourtCard(court) {
  const mapURL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(court.addr)}`;
  return `
    <div class="col-md-4 mb-4">
      <a href="${mapURL}" target="_blank" class="text-decoration-none">
        <div class="card h-100 shadow-sm">
          <img src="${court.img}" class="card-img-top" alt="${court.name}" />
          <div class="card-body">
            <h5 class="card-title">${court.name}</h5>
            <p class="card-text">
              ${court.addr}<br />
              <strong>Access:</strong> ${court.access || ""}<br />
              <strong>Nets:</strong> ${court.nets || ""}<br />
              <strong>Hours:</strong> ${court.hours || ""}
            </p>
            <span class="btn btn-sm btn-outline-primary mt-2">
              <i class="fas fa-map-marker-alt"></i> View on Map
            </span>
          </div>
        </div>
      </a>
    </div>`;
}

function getAllRecords() {
  fetch(AIRTABLE_API_URL, {
    headers: {
      Authorization: `Bearer ${AIRTABLE_API_KEY}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const courts = data.records.map((record) => ({
        name: record.fields.Name,
        addr: record.fields.Address,
        indoor: record.fields.Indoor === "Yes",
        nets: record.fields.Nets,
        access: record.fields.Access,
        hours: record.fields.Hours,
       img: record.fields.Image ? record.fields.Image[0].url : "images/default.jpg",
      }));

      const indoorList = courts.filter((c) => c.indoor);
      const outdoorList = courts.filter((c) => !c.indoor);

      document.getElementById("indoor-list").innerHTML = indoorList
        .map(createCourtCard)
        .join("");
      document.getElementById("outdoor-list").innerHTML = outdoorList
        .map(createCourtCard)
        .join("");
    })
    .catch((err) => {
      console.error("Error fetching Airtable data:", err);
    });
}

document.addEventListener("DOMContentLoaded", getAllRecords);


  // TOKEN : patkPgfH3w0Zj9FZy.f0419b0aa9697842f9b4b5f0e8e1b342009fc63756b22c3a8b5cce8959ba6725
  // Authentication: https://api.airtable.com/v0/appyPO0xrhPPEy72s/Outdoor
 