const footer = document.querySelector('.page-footer');
const footerDiv = document.createElement('div');

/* <div class="col l4 offset-l2 s12">
      <h5 class="white-text">Connect</h5>
      <div class="row">
        <a class="social-media" href="#" target="blank"><i class="fab fa-twitter-square fa-2x" aria-hidden="true"></i><span class="sr-only">Twitter</span></a>
        <a class="social-media" href="#" target="blank"><i class="fab fa-facebook-square fa-2x" aria-hidden="true"></i><span class="sr-only">Facebook</span></a>
        <a class="social-media" href="#" target="blank"><i class="fab fa-linkedin fa-2x" aria-hidden="true"></i><span class="sr-only">LinkedIn</span></a>
        <a class="social-media" href="#"><i class="fab fa-youtube-square fa-2x"></i></a>
      </div>
    </div>*/


footerDiv.innerHTML = `
  <div class="container">
  <div class="row">
    <div class="col l6 s12">
      <h5 class="white-text">Contact Us</h5>
      <p class="grey-text text-lighten-4">
      InfoSec Decoded<br/>1819 Polk Street #358<br/>
      <a class="grey-text text-lighten-4" target="blank">San Francisco, CA 94109</a><br/>
      TEL: (415) 562-6837<br/>
      <a href="mailto:info@infosecdecoded.com" class="grey-text text-lighten-4">info@infosecdecoded.com</p></a>
    </div>
    <!-- social media -->
    
  </div>
  </div>
  <div class="section black darken-4 center copyright">
  <div class="container">
      &copy; 2019 InfoSec Decoded 
  </div>
  </div>
`;

footer.appendChild(footerDiv);