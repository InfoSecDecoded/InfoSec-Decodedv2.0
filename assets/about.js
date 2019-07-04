// ===============================================================
// SECTION for ABOUT
// ===============================================================

const about = document.querySelector('#about');
const aboutDiv = document.createElement('div');

aboutDiv.innerHTML = `
  <div class="container">
    <h3 class="title-header text-light-grey center-align">About</h3>
    <p class="flow-text text-light-grey center-align about-paragraph">InfoSec Decoded brings together a range of expertise to educate, understand and address real-world challenges in cybersecurity and to equip the next generation of cybersecurity experts.</p>
  </div>
`;

about.appendChild(aboutDiv);