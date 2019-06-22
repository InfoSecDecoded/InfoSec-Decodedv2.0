// ===============================================================
// SECTION for Students
// ===============================================================

const students = document.querySelector('#students');
const studentsDiv = document.createElement('div');

students.innerHTML = `
  <div class="container">
    <div class="row">
      <h3 class="title-header text-light-grey center-align">Students</h3>
      <div class="col s12 m4">
        <a href="https://cybersecurityclub.github.io/cyber-security-club/" target="blank">
          <div class="card hoverable">
            <div class="card-image">
              <img src="img/cyberclub.jpg" alt="">
            </div>
            <div class="card-content text-light-grey">
              <p class="card-title text-light-grey">Cyber Security Club</p>
              The Cyber Security Club is a student-run organization at City College of San Francisco.
            </div>
          </div>
        </a>
      </div>
      <div class="col s12 m4">
        <a href="https://samsclass.info/140/140_S18.shtml" target="blank">
          <div class="card hoverable">
            <div class="card-image">
              <img src="img/competition.jpg" alt="">
            </div>
            <div class="card-content text-light-grey">
              <p class="card-title text-light-grey">Competition Team</p>
              Train students for competitions, CTF and the Collegiate Cyberdefense Competition (CCDC).
            </div>
          </div>
        </a>
      </div>
      <div class="col s12 m4">
        <a href="https://cybersecurityclub.github.io/cyber-security-club/cybercamp.html" target="blank">
          <div class="card hoverable">
            <div class="card-image">
              <img src="img/cybercamp.jpg" alt="">
            </div>
            <div class="card-content text-light-grey">
              <p class="card-title text-light-grey">Cyber Camp</p>
              Trains high school students on cybersecurity. A week of training in cybersecurity.
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
`;