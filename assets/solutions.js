// ===============================================================
// SECTION for BUSINESS SOLUTIONS
// ===============================================================

const solutions = document.querySelector('#products');
const progDiv = document.createElement('div');

progDiv.innerHTML = `
  <div class="container">
    <div class="row">
      <div class="col s12 l4">
        <img src="img/ccsf.png" alt="" class="responsive-img hide-on-med-and-down program-img-style">
      </div>
      <div class="col s12 l6 offset-l1">
        <h3 class="title-header text-light-grey">Programs</h3>
        <p class="text-light-grey">A.S. Degree Programs, Cybersecurity Certificate Programs and offering a range of courses in Cisco Academy, Network Infrastructure and Administration, Cybersecurity, Tech Support for Windows and Mac and Information Security Analyst Apprenticeship Program</p>
        <a data-target="program" class="red darken-4 hoverable btn modal-trigger" target="blank">Learn More</a>
      </div>
      </div>
      <div class="row">
      <div class="col s12 l4 offset-l1 push-l7">
        <img src="img/partnership.jpg" alt="" class="responsive-img hide-on-med-and-down program-img-style">
      </div>
      <div class="col s12 l6 offset-l1 pull-l5 right-align">
        <h3 class="title-header text-light-grey">Cybersecurity Path</h3>
        <p class="text-light-grey">We provide academic counseling services to assure our students success in their pursuit to become cybersecurity experts</p>
        <a href="https://www.ccsf.edu/Departments/Computer_Networking_and_Information_Technology/about.html#couns3" class="red darken-4 hoverable btn" target="blank">Learn More</a>
      </div>
      </div>
      <div class="row grid-bottom-padding">
      <div class="col s12 l4">
        <img src="img/resources.jpg" alt="" class="responsive-img hide-on-med-and-down program-img-style">
      </div>
      <div class="col s12 l6 offset-l1">
        <h3 class="title-header text-light-grey">Resources</h3>
        <p class="text-light-grey">Empower our students to learn beyond the classroom doors by providing resources to activate and engage in conferences, research, lab experience, workshops and competitions.</p>
        <a data-target="resources" class="red darken-4 hoverable btn modal-trigger" target="blank">Learn More</a>
      </div>
    </div>
  </div>
`;

solutions.appendChild(progDiv);