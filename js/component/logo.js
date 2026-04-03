const logoTemplate = document.createElement('template');

logoTemplate.innerHTML = `
  <style>
  .logo{


}

.logo .text{
    text-decoration: none;
    font-family: 'Courier New', Courier, monospace;
    color: var(--primary-color);
    font-size: 20px;

}

.logo img{
  width: 40px;
  height: 40px;       /* MUST match width for perfect circle */
  border-radius: 50%;
  object-fit: cover;  
  vertical-align:middle;
}
  
  </style>
  <a class="logo" onclick="OnLogoClick()">
     <img src="images_videos/selfie.PNG" alt="logo"/>
    <span class="text">/*ELDON_LIN*/</span>
  </a>
  
`;



class Logo extends HTMLElement {
    constructor() {
      super();

      const shadowRoot = this.attachShadow({ mode: 'open' });
      var node = logoTemplate;
      var clone = node.cloneNode(true);

      shadowRoot.appendChild(clone.content);
      

    }
  

  }
  



  customElements.define('logo-component', Logo);