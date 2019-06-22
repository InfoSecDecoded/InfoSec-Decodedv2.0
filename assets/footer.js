const footer = document.querySelector('.page-footer');
const footerDiv = document.createElement('div');

footerDiv.innerHTML = `
  <div class="container">
  <div class="row">
    <div class="col l6 s12">
      <h5 class="white-text">Contact Us</h5>
      <p class="grey-text text-lighten-4">
      Richard Wu<br/>Director of CCSF Cyber Center<br/>
      <a href="https://maps.google.com/?q=50+Phelan+Ave,+Room+S107+San+Francisco,+CA+94112&entry=gmail&source=g" class="grey-text text-lighten-4" target="blank">50 Phelan Ave, Room S107, San Francisco, CA</a><br/>
      TEL: (415) 239-3594<br/>
      <a href="mailto:rwu@ccsf.edu" class="grey-text text-lighten-4">rwu@ccsf.edu</p></a>
    </div>
    <!-- social media -->
    <div class="col l4 offset-l2 s12">
      <h5 class="white-text">Connect</h5>
      <div class="row">
        <a class="social-media" href="http://www.twitter.com/#!/cnitccsf" target="blank"><i class="fab fa-twitter-square fa-2x" aria-hidden="true"></i><span class="sr-only">Twitter</span></a>
        <a class="social-media" href="http://www.facebook.com/cnit.ccsf" target="blank"><i class="fab fa-facebook-square fa-2x" aria-hidden="true"></i><span class="sr-only">Facebook</span></a>
        <a class="social-media" href="https://www.linkedin.com/groups/13556246" target="blank"><i class="fab fa-linkedin fa-2x" aria-hidden="true"></i><span class="sr-only">LinkedIn</span></a>
        <a class="social-media" href="http://www.youtube.com/user/CNITCCSF"><i class="fab fa-youtube-square fa-2x"></i></a>
      </div>
    </div>
  </div>
  </div>
  <div class="section red darken-4 center copyright">
  <div class="container">
      &copy; 2018 Cyber Center, City College of San Francisco  | Designed by Aeimskei & Co. 
  </div>
  </div>
`;

footer.appendChild(footerDiv);