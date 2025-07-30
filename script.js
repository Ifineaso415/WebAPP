const courts = [
  {
    name: "Palace of Fine Arts",
    addr: "3601 Lyon St, San Francisco, CA",
    indoor: true,
    nets: "Permanent",
    access: "Reservation only (free 90‑min morning slots)",
    hours: "Tue–Sun 9:30 AM–11:00 AM",
    img: "images/palace_of_fine_arts.jpg",
  },
  {
    name: "Upper Noe Recreation Center",
    addr: "295 Day St, San Francisco, CA",
    indoor: true,
    nets: "Portable",
    access: "Drop‑in + reservations",
    hours: "Tue & Thu 10:00 AM–1:30 PM",
    img: "images/upper_noe_rec_center.jpg",
  },
  {
    name: "Hamilton Rec Center",
    addr: "1900 Geary Blvd, San Francisco, CA",
    indoor: true,
    nets: "Portable",
    access: "Drop-in only",
    hours: "Wed 12:00 PM–2:30 PM",
    img: "images/hamilton_rec_center.jpg",
  },
  {
    name: "Richmond Rec Center",
    addr: "251 18th Ave, San Francisco, CA",
    indoor: true,
    nets: "Portable",
    access: "Drop-in",
    hours: "Tues/Thurs 10 AM–1 PM",
    img: "images/richmond_rec_center.jpg",
  },
  {
    name: "Bayview Rec Center",
    addr: "1950 Hunters Point Blvd, San Francisco, CA",
    indoor: true,
    nets: "Portable",
    access: "Drop-in",
    hours: "Mon/Wed/Fri 9 AM–1 PM",
    img: "images/bayview_rec_center.jpg",
  },
  {
    name: "Glen Park Rec Center",
    addr: "70 Elk St, San Francisco, CA",
    indoor: false,
    nets: "Permanent",
    access: "Walk-on or reservations",
    hours: "Daily 9 AM–6 PM",
    img: "images/glen_park_rec_center.jpg",
  },
  {
    name: "SOMA West Skatepark",
    addr: "1145 Stevenson St, San Francisco, CA",
    indoor: false,
    nets: "Portable",
    access: "Walk-on",
    hours: "Open daily 8 AM–8 PM",
    img: "images/soma_west_skatepark.jpg",
  },
  {
    name: "Presidio Wall Playground",
    addr: "Wallace Ave, San Francisco, CA 94129",
    indoor: false,
    nets: "Permanent",
    access: "First come, first served",
    hours: "Open daily sunrise to sunset",
    img: "images/presidio_wall_playground.jpg",
  },
  {
    name: "Mission Playground",
    addr: "19th & Linda St, San Francisco, CA",
    indoor: false,
    nets: "Portable",
    access: "Drop-in only",
    hours: "Mon–Fri 9 AM–5 PM",
    img: "images/mission_playground.jpg",
  },
  {
    name: "Margaret Hayward Playground",
    addr: "1016 Laguna St, San Francisco, CA",
    indoor: false,
    nets: "Permanent",
    access: "Reservation preferred",
    hours: "Everyday 8 AM–8 PM",
    img: "images/margaret_hayward_playground.jpg",
  },
  {
    name: "Balboa Park Courts",
    addr: "Ocean Ave & San Jose Ave, San Francisco, CA",
    indoor: false,
    nets: "Permanent",
    access: "Walk-on",
    hours: "Daily 7 AM–8 PM",
    img: "images/balboa_park_courts.jpg",
  },
  {
    name: "Joe DiMaggio Playground",
    addr: "651 Lombard St, San Francisco, CA",
    indoor: false,
    nets: "Permanent",
    access: "Walk-on",
    hours: "8 AM–8 PM",
    img: "images/joe_dimaggio_playground.jpg",
  },
];

function createCourtCard(court) {
  const mapURL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    court.addr
  )}`;
  return `
    <div class="col-md-4 mb-4">
      <a href="${mapURL}" target="_blank" class="text-decoration-none">
        <div class="card h-100 shadow-sm">
          <img src="${court.img}" class="card-img-top" alt="${court.name}" />
          <div class="card-body">
            <h5 class="card-title">${court.name}</h5>
            <p class="card-text">
              ${court.addr}<br />
              <strong>Access:</strong> ${court.access}<br />
              <strong>Nets:</strong> ${court.nets}<br />
              <strong>Hours:</strong> ${court.hours}
            </p>
            <span class="btn btn-sm btn-outline-primary mt-2">
              <i class="fas fa-map-marker-alt"></i> View on Map
            </span>
          </div>
        </div>
      </a>
    </div>`;
}

document.addEventListener("DOMContentLoaded", () => {
  const indoorList = courts.filter((c) => c.indoor);
  const outdoorList = courts.filter((c) => !c.indoor);

  document.getElementById("indoor-list").innerHTML = indoorList
    .map(createCourtCard)
    .join("");
  document.getElementById("outdoor-list").innerHTML = outdoorList
    .map(createCourtCard)
    .join("");
});
