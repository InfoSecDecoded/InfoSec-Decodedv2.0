// ===============================================================
// SECTION for NEWS & EVENTS
// ===============================================================

const newsEvents = document.querySelector('#news-events');
const newsEventsDiv = document.createElement('div');


newsEventsDiv.innerHTML = `
  <h3 class="text-light-grey title-resources center-align">Upcoming Events</h3>
  <div class="container">

    <div class="row news-events-row-styling">
      <div class="col s12 m6">
        <a href="https://www.blackhat.com/asia-20/training/schedule/#introduction-to-exploit-development-17684" target="blank">
          <div class="card-panel hoverable">
            <i class="material-icons large blue-text text-darken-4">
              event
            </i>
            <div class="news-text-styling">
            <h5 class="text-light-grey">Black Hat Asia</h5>
            <p class="text-light-grey ">Exploit Development For Beginners
            <br class="text-light-grey">Sam Bowne | March 31 - April 3, 2020
            <br class="text-light-grey">Singapore</br>
            </p>
          </div>
        </a>
      </div>
    </div>

    <div class="row news-events-row-styling">
      <div class="col s12 m6">
        <a href="https://www.blackhat.com/asia-20/training/schedule/#introduction-to-exploit-development-17684" target="blank">
          <div class="card-panel hoverable">
            <i class="material-icons large blue-text text-darken-4">
              event
            </i>
            <div class="news-text-styling">
            <h5 class="text-light-grey">Dev Con China</h5>
            <p class="text-light-grey ">Exploit Development For Beginners
            <br class="text-light-grey">Sam Bowne | April 16 - April 19, 2020
            <br class="text-light-grey">Beijing</br>
            </p>
          </div>
        </a>
      </div>
    </div>

 </div>
`;

newsEvents.appendChild(newsEventsDiv);

var links = [
	"https://drive.google.com/file/d/1i4TptTmUKjiPUR176HbX00-TwiVWf9ed/preview",	//October Updates
	"https://drive.google.com/file/d/1KfMr7aoxUxucXnvd2v5U2lD3tKSDFJTZ/preview",	//October Newsletter
	"https://drive.google.com/file/d/1jm64EPzpQdkwitiCINEnKWqFPJUq7ACL/preview",	//September Updates
	"https://drive.google.com/file/d/1EQJayJKtE58ZWCSTcDg8Y8r_K3HLqtGE/preview",	//September Newsletter
	"https://drive.google.com/file/d/1OuXDLI7Sa8njgCGa17ysTbADcg1H9PaD/preview",	//August Updates
	"https://drive.google.com/file/d/1x-KlpLQPuqUz7gVJfvptZ4DtXlaBVCTI/preview"		//August Newsletter
];

function setiFrame(sel) {
	document.getElementById('internalNewsPreview').src = links[sel.value];
}