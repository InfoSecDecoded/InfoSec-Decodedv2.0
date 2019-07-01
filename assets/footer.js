const footer = document.querySelector('.page-footer');
const footerDiv = document.createElement('div');

footerDiv.innerHTML = `
  <div class="container">
  <div class="row">
    <div class="col l6 s12">
      <h5 class="white-text">Contact Us</h5>
      <p class="grey-text text-lighten-4">
      Sam Bowne<br/>Consultant<br/>
      <a href="https://maps.google.com/?q=50+Phelan+Ave,+Room+S107+San+Francisco,+CA+94112&entry=gmail&source=g" class="grey-text text-lighten-4" target="blank"> 1728 Ocean Ave #178, San Francisco CA 94112</a><br/>
      TEL: (415) 200-7656<br/>
      <a href="mailto:sam@infosecdecoded.com" class="grey-text text-lighten-4">sam@infosecdecoded.com</p></a>
    </div>
    <!-- social media -->
    <div class="col l4 offset-l2 s12">
      <h5 class="white-text">Connect</h5>
      <div class="row">
        <a class="social-media" href="#" target="blank"><i class="fab fa-twitter-square fa-2x" aria-hidden="true"></i><span class="sr-only">Twitter</span></a>
        <a class="social-media" href="#" target="blank"><i class="fab fa-facebook-square fa-2x" aria-hidden="true"></i><span class="sr-only">Facebook</span></a>
        <a class="social-media" href="#" target="blank"><i class="fab fa-linkedin fa-2x" aria-hidden="true"></i><span class="sr-only">LinkedIn</span></a>
        <a class="social-media" href="#"><i class="fab fa-youtube-square fa-2x"></i></a>
      </div>
    </div>
  </div>
  </div>
  <div class="section red darken-4 center copyright">
  <div class="container">
      &copy; 2019 InfoSec Decoded 
  </div>
  </div>
`;

footer.appendChild(footerDiv);