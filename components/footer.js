const footerTemplate = `
  <footer id="contact" class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-4 footer-contact">
          <h4>Contact Details</h4>
          <p>
            <i class="fas fa-building"></i> <strong>Offices:</strong><br>
            <span class="ms-4">30 N Gould St Ste R<br>
              <span class="ms-4">Sheridan, WY 82801</span>
          </p>
          <br>
          <p>
            <i class="fas fa-envelope"></i> <strong>Email:</strong><br>
            <span class="ms-4"><a href="mailto:contact@scarabite.com">contact@scarabite.com</a></span>
          </p>
        </div>
        <div class="col-md-4 footer-contact">
          <h4>Quick Links</h4>
          <p></i> <a href="about.html">About us</a></p>
          <p></i> <a href="contact.html">Contact us</a></p>
        </div>
        <div class="col-md-4 footer-contact">
          <h4>Follow Us</h4>
          <p><i class="fas fa-globe"></i> Stay up to date with our latest news and updates.</p>
          <ul class="social-links">
            <li><a href="https://www.linkedin.com/company/scarabite" target="_blank" title="LinkedIn" rel="noopener">
                <i class="fab fa-linkedin-in"></i>
              </a></li>
            <li><a href="https://github.com/scarabite" target="_blank" title="GitHub" rel="noopener">
                <i class="fab fa-github"></i>
              </a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
`;

class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = footerTemplate;
    }
}

customElements.define('site-footer', Footer); 