const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
  <style>
  .footer-section{
    padding-bottom: 2em;
    padding-top: 2em;

}

.footer-section .container{
    text-align: center;
    line-height: 4em;
} 

.footer-section .container .contact-links{
    font-size: 3em;
    display:flex;
    justify-content: center;
    gap:1em;
}

.footer-section .container .lastModified{
    display:flex;
    justify-content: center;
}
@media screen and (min-width: 1440px){
  
  .footer-section{
    padding-left: 1em;
}

.footer-section .container{
    display:flex;
    justify-content: space-between;
    align-items: center;
} 
}
  </style>
  <section class="footer-section bg-js-controlled" id="contact">
        <div class="container">
            <logo-component></logo-component>
            <div class="contact-links">
                <a onclick="OnLinkClick('https://www.linkedin.com/in/eldon-lin-38a181b0')"><i class="bi bi-linkedin"></i></a>
                <a onclick="OnLinkClick('https://www.youtube.com/channel/UC-igukaTIJFHYS8TNkcJ4lA')"><i class="bi bi-youtube"></i></a>

            </div>
            <div class="lastModified">              
                    <p>last modified:</p>
                    <p id="last-modified"></p>
            </div>

        </div>
    </section>
`;



class Footer extends HTMLElement {
    constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: 'open' });
  
      shadowRoot.appendChild(footerTemplate.content);
      let lastModifiedText = document.lastModified;
      this.shadowRoot.getElementById("last-modified").innerHTML = lastModifiedText;
    }

  }
  
customElements.define('footer-component', Footer);


