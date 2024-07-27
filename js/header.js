// header.js
class MyHeader extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <header>
          <img src="./images/businessLogoInverted.png"alt="Company Icon" class="icon">
          <h1 class="heading"> Hartnall Digital Solutions</h1>
          <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <!--<li><a href="about.html">About</a></li>-->
                <li><a href="people.html">People</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="websites.html">Projects</a></li>
                <!--<li><a href="databases.html">DataBases</a></li>
                <li><a href="dataAnalysis.html">Data Analysis</a></li>
                <li><a href="dataModels.html">Data Models</a></li>--->
                <li><a href="contact.html">Contact</a></li>
                <!--<li><a href="testimonials.html">Testimonials</a></li>--->
            </ul>
        </nav>
        </header>
      `;
    }
  }
  
  customElements.define('my-header', MyHeader);
  