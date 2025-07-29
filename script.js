const courts = [
  {
    name: "SF Indoor Sports Center",
    type: "indoor",
    address: "123 Market St, SF, CA",
    link: "https://sfindoorsports.com",
    image: "images/indoor1.jpg"
  },
  {
    name: "Bay Club SF",
    type: "indoor",
    address: "456 Embarcadero, SF, CA",
    link: "https://bayclubsf.com",
    image: "images/indoor2.jpg"
  },
  {
    name: "Golden Gate Park Courts",
    type: "outdoor",
    address: "501 Stanyan St, SF, CA",
    link: "https://sfrecpark.org",
    image: "images/outdoor1.jpg"
  },
  {
    name: "Mission Playground",
    type: "outdoor",
    address: "19th & Linda St, SF, CA",
    link: "https://sfrecpark.org",
    image: "images/outdoor2.jpg"
  }
];

function createCourtCard(court) {
  return `
    <div class="col-md-6 col-lg-4 mb-4">
      <div class="card h-100 shadow-sm">
        <img src="${court.image}" class="card-img-top" alt="${court.name}" />
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${court.name}</h5>
          <p class="card-text mb-2"><i class="fas fa-map-marker-alt me-1"></i>${court.address}</p>
          <a href="${court.link}" target="_blank" class="btn btn-primary mt-auto">View Details</a>
        </div>
      </div>
    </div>
  `;
}

function renderCourts() {
  const indoorList = document.getElementById('indoor-list');
  const outdoorList = document.getElementById('outdoor-list');
  indoorList.innerHTML = courts.filter(c => c.type === 'indoor').map(createCourtCard).join('');
  outdoorList.innerHTML = courts.filter(c => c.type === 'outdoor').map(createCourtCard).join('');
}

document.addEventListener('DOMContentLoaded', renderCourts);