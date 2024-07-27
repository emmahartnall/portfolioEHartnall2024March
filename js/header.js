// header.js
class MyHeader extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <header>
          <h1>Hartnall Digital Solutions</h1>
          <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <!--<li><a href="about.html">About</a></li>-->
                <li><a href="people.html">People</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="websites.html">Websites</a></li>
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
  