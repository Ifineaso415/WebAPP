"use strict";

// Airtable API constants
const AIRTABLE_URL = "https://api.airtable.com/v0/appyPO0xrhPPEy72s/Outdoor";
const AIRTABLE_TOKEN = "patSMmsMZV3ld7iSm.adf9b201bf5b4fad908e372c585816eb2521b5e7086b7a3c9418caaa099ad817";

// Removed hardcoded indoor courts
// Removed hardcoded indoor courts

// Carousel code commented out for Airtable integration
/*
function createSlide(court, isActive) {
  // ...carousel slide rendering code...
}

function showCarousel() {
  // ...carousel rendering logic...
}

document.addEventListener("DOMContentLoaded", showCarousel);
*/

function showCarousel() {
  const container = document.getElementById("carousel-inner");
  const courts = shuffle(allCourts).slice(0, 5);
  container.innerHTML = courts.map((c, i) => createSlide(c, i === 0)).join("");
}

document.addEventListener("DOMContentLoaded", showCarousel);
