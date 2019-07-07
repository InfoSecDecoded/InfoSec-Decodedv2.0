// ===============================================================
// SECTION for NEWS & EVENTS
// ===============================================================

const newsEvents = document.querySelector('#news-events');
const newsEventsDiv = document.createElement('div');


/* <div class="col s12 m6">
    <a class="modal-trigger" href="#newsModal">
          <div class="card-panel hoverable">
            <i class="material-icons large red-text text-darken-4">
              insert_comment
            </i>
            <h5 class="text-light-grey">News</h5>
            <p class="text-light-grey">On industry insights in cyber security and defense</p>
          </div>
        </a>
      </div> */

newsEventsDiv.innerHTML = `
  <h3 class="text-light-grey title-resources center-align">News & Events</h3>
  <div class="container">
    <div class="row news-events-row-styling">



      <div class="col s12 m6">
        <a href="https://www.blackhat.com/us-19/training/schedule/index.html#exploit-development-for-beginners-14278" target="blank">
          <div class="card-panel hoverable">
            <i class="material-icons large blue-text text-darken-4">
              event
            </i>
            <h5 class="text-light-grey"> Black Hat USA 2019</h5>
            <p class="text-light-grey">Black Hat USA is the world's leading information security event, providing attendees with the very latest in research, development and trends.</p>
          </div>
        </a>
      </div>
    </div>
  </div>
 
  <!-- News Modal -->
  <div id="newsModal" class="modal news-modal-size">
  <div class="modal-content">
    <div class="row">
      <div class="col s12">
        <ul class="tabs">
          <li class="tab col s6">
            <a id="firstTab" class="active" href="#newsTab1">Internal News</a>
          </li>
          <li class="tab col s6">
            <a href="#newsTab2">External News</a>
          </li>
        </ul>
      </div>
      <div id="newsTab1" class="col s12">
		<!-- Desktop View -->
	     <div class="input-field col s12 hide-on-med-and-down">
			<select id="newsSelection" onchange="setiFrame(this);">
				<option value="0" selected> Cyber Security Club - October Updates 2018</option>
				<option value="1">Cyber Security Club - October Newsletter 2018</option>
				<option value="2">Cyber Security Club - September Updates 2018</option>
				<option value="3">Cyber Security Club - September Newsletter 2018</option>
				<option value="4">Cyber Security Club - August Updates 2018</option>
				<option value="5">Cyber Security Club - August Newsletter 2018</option>
			</select>
		</div>
		<iframe id="internalNewsPreview" class="hide-on-med-and-down" src="https://drive.google.com/file/d/1i4TptTmUKjiPUR176HbX00-TwiVWf9ed/preview" width="100%" height="700px"></iframe>
		<!-- Mobile View -->
		<div class="collection hide-on-large-only">
			<a href="https://drive.google.com/file/d/1i4TptTmUKjiPUR176HbX00-TwiVWf9ed/preview" class="collection-item">Cyber Security Club - October Updates 2018</a>
			<a href="https://drive.google.com/file/d/1KfMr7aoxUxucXnvd2v5U2lD3tKSDFJTZ/preview" class="collection-item">Cyber Security Club - October Newsletter 2018</a>
			<a href="https://drive.google.com/file/d/1jm64EPzpQdkwitiCINEnKWqFPJUq7ACL/preview" class="collection-item">Cyber Security Club - September Updates 2018</a>
			<a href="https://drive.google.com/file/d/1EQJayJKtE58ZWCSTcDg8Y8r_K3HLqtGE/preview" class="collection-item">Cyber Security Club - September Newsletter 2018</a>
			<a href="https://drive.google.com/file/d/1OuXDLI7Sa8njgCGa17ysTbADcg1H9PaD/preview" class="collection-item">Cyber Security Club - August Updates 2018</a>
			<a href="https://drive.google.com/file/d/1x-KlpLQPuqUz7gVJfvptZ4DtXlaBVCTI/preview" class="collection-item">Cyber Security Club - August Newsletter 2018</a>
		</div>
	 </div>
      <div id="newsTab2" class="col s12">
		<!-- Desktop View -->
        <iframe src="https://samsclass.info/newsr.shtml" class="hide-on-med-and-down" height="100%" style="width:100%; height:800px;"></iframe><!--TBD: Will fix -->
		<!-- Mobile View -->
		<div class="collection hide-on-large-only">
			<a href="https://samsclass.info/newsr.shtml" class="collection-item">External Security News</a>
		</div>
      </div>
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