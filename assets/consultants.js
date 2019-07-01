// ===============================================================
// SECTION for Consultants
// ===============================================================

const consultants = document.querySelector('#consultants');
const consultantsDiv = document.createElement('div');

consultantsDiv.innerHTML = `
  <h3 class="title-header text-light-grey center-align">Consultants</h3>
  <div class="container">
    <div class="row">
      <div class="col s12 m6">
        <a href="http://www.richardsclass.info/" target="blank">
          <div class="card horizontal hoverable">
            <div class="card-image">
              <img src="img/elizabeth.png">
            </div>
            <div class="card-stacked">
              <div class="card-content">
                <h5 class="text-red-accent">Elizabeth Biddlecome</h5>
                <h6 class="text-light-grey">Cybersecurity Instructor</h6>
                <p class="text-light-grey">ebiddlecome@ccsf.edu</p>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="col s12 m6">
        <a href="https://samsclass.info/" target="blank">
          <div class="card horizontal hoverable">
            <div class="card-image">
              <img src="img/sam.png">
            </div>
            <div class="card-stacked">
              <div class="card-content">
                <h5 class="text-red-accent">Sam Bowne</h5>
                <h6 class="text-light-grey">Cybersecurity Instructor</h6>
                <p class="text-light-grey">sbowne@ccsf.edu</p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
    <div class="row center-align">
    <a class="grey darken-2 hoverable btn modal-trigger" href="https://www.ccsf.edu/Departments/Computer_Networking_and_Information_Technology/AdvisoryBoardMeeting.pdf" target="blank">External Board of Advisors</a>
    </div>
  </div>
`;

consultants.appendChild(consultantsDiv);