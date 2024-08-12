// header.js
class MyHeader extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <header>
          <img src="./images/businessLogoInverted.png"alt="Company Icon" class="icon">
          <h1 class="heading">Hartnall Digital Solutions</h1>
          <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="people.html">People</a></li>
                <li><a href="quote.html">Price Estimate</a></li>
                <li><a href="websites.html">Projects</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
        </header>
      `;
    }
  }
  
  customElements.define('my-header', MyHeader);

  class MyFooter extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <footer>
        <p>&copy; 2024 Hartnall Digital Solutions. All rights reserved. 
        <a href="https://www.linkedin.com/company/hartnall-digital-solutions/">
            <img src="images/LI-Logo.png" alt="LinkedIn" style="height: 1em; vertical-align: middle;"></a>
        </footer>
      `;
    }
  }
  
  customElements.define('my-footer', MyFooter);
  