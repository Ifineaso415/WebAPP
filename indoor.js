document.addEventListener('DOMContentLoaded', function() {
  const courts = [
    {
      name: 'Eureka Valley Rec Center',
      address: '100 Collingwood Street',
      zip: '94114',
      map: 'https://maps.google.com/?q=Eureka+Valley+Rec+Center+100+Collingwood+Street+San+Francisco+CA+94114',
      courts: 3,
      availability: 'open play',
      image: 'images/Eureka Valley Rec Center.jpeg'
    },
    {
      name: 'Glen Park Rec Center',
      address: "Bosworth & O'Shaughnessy 70 elk st.",
      zip: '94131',
      map: 'https://maps.google.com/?q=Glen+Park+Rec+Center+70+Elk+St+San+Francisco+CA+94131',
      courts: 3,
      availability: 'open play',
      image: 'images/Glen Park Rec Center.jpg'
    },
    {
      name: 'Hamilton Rec Center',
      address: '1900 Geary Boulevard',
      zip: '94115',
      map: 'https://maps.google.com/?q=Hamilton+Rec+Center+1900+Geary+Boulevard+San+Francisco+CA+94115',
      courts: 3,
      availability: 'open play',
      image: 'images/Hamilton Rec Center.jpeg'
    },
    {
      name: 'Minnie & Lovie Ward Rec Center',
      address: '650 Capitol Avenue',
      zip: '94112',
      map: 'https://maps.google.com/?q=Minnie+%26+Lovie+Ward+Rec+Center+650+Capitol+Ave+San+Francisco+CA+94112',
      courts: 3,
      availability: 'open play',
      image: 'images/Minnie & Lovie Ward Rec Center.jpeg'
    },
    {
      name: 'Richmond Rec Center',
      address: '251 18th Avenue',
      zip: '94121',
      map: 'https://maps.google.com/?q=Richmond+Rec+Center+251+18th+Ave+San+Francisco+CA+94121',
      courts: 4,
      availability: 'open play',
      image: 'images/Richmond Rec Center.jpeg'
    },
    {
      name: 'Upper Noe Rec Center',
      address: 'Day and Sanchez Street 295 Day Street',
      zip: '94131',
      map: 'https://maps.google.com/?q=Upper+Noe+Rec+Center+295+Day+St+San+Francisco+CA+94131',
      courts: 4,
      availability: 'open play',
      image: 'images/Upper Noe Rec Center.jpeg'
    }
  ];
  const container = document.getElementById('carousel-inner');
  function renderList() {
    let html = '<div class="row g-4 justify-content-center">';
    courts.forEach((court, idx) => {
      html += `
        <div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
          <div class="card court-card fade-in mb-3" style="max-width: 360px; min-width: 300px; min-height: 420px; height: 420px;">
            <img src="${court.image}" class="card-img-top court-image card-hover" alt="${court.name}" style="cursor:pointer;" onclick="showCourtDetail(${idx})" />
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
      <div class="modal-overlay d-flex justify-content-center align-items-center" id="modal-overlay">
        <div class="card court-card animate-modal" id="detail-card" style="max-width: 400px; min-width: 300px; min-height: 420px; height: 420px; position:relative;">
          <button class="btn-close position-absolute top-0 end-0 m-2" aria-label="Close" onclick="closeModal()"></button>
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
  window.closeModal = function() {
    renderList();
  };
  function outsideDetailClick(e) {
    const card = document.getElementById('detail-card');
    const overlay = document.getElementById('modal-overlay');
    if (!card || !overlay) return;
    if (card.contains(e.target)) {
      if (e.target.tagName === 'A' || e.target.classList.contains('btn-close')) return;
      return;
    }
    renderList();
  }
  renderList();
});