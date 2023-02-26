const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
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
                <i class="bi bi-envelope"></i>
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
  
    // connectedCallback() {

    //   // var oldLink= this.shadowRoot.getElementById('oldLink');
    //   // console.log(oldLink);
    //   // var newLink= this.getAttribute('href');
    //   // console.log(newLink);
    //  // oldLink.href = newLink;
    //   // console.log(this.getAttributeNode);

    //   var class2= this.getElementsByClassName("aclass2");
    //   var class3= this.getElementsByClassName("aclass3");
    //   var oldLink2= this.shadowRoot.getElementById('oldLink2');
    //   var oldLink3= this.shadowRoot.getElementById('oldLink3');
    //   // console.log("class2:" + class2);
    //   // console.log("class3: " + class3);
    //   // console.log("oldLink2: " + oldLink2);
    //   // console.log("oldLink3: " + oldLink3);
    //   console.log("class2.href:" + class2[0].href);
    //   console.log("class3.href:" + class3[0].href);
    //   oldLink2.href=class2[0].href;
    //   oldLink3.href=class3[0].href;
    //   console.log(oldLink2.href);
    //   console.log(oldLink3.href);
      
    // }

    // static get observedAttributes() { 
    //   return ['href']; 
    // }

    // attributeChangedCallback(name, oldValue, newValue) {
    //   console.log("name:" + name + " oldValue: " +oldValue + " newValue: " + newValue);
    //   var oldLink= this.shadowRoot.getElementById('oldLink');
    //   oldLink.href = newValue;
    // }
  }
  
customElements.define('footer-component', Footer);


