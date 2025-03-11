const headerTemplate = `
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
    <div class="container">
      <a class="navbar-brand d-flex align-items-center" href="index.html">
        <img src="resources/img/reduced/logo.svg" alt="Logo" class="logo img-fluid" width="300">
        <span class="brand-text">Scarabite</span>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link" href="./index.html">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="./about.html">About us</a></li>
          <li class="nav-item"><a class="nav-link" href="./services.html">Services</a></li>
          <li class="nav-item"><a class="nav-link" href="./contact.html">Contact us</a></li>
        </ul>
      </div>
    </div>
  </nav>
`;

class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = headerTemplate;
        
        // Get current page filename
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        // Find and set active link
        const links = this.querySelectorAll('.nav-link');
        links.forEach(link => {
            if (link.getAttribute('href').includes(currentPage)) {
                link.classList.add('active');
                link.setAttribute('aria-current', 'page');
            }
        });
    }
}

customElements.define('site-header', Header); 