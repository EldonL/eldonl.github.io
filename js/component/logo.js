const logoTemplate = document.createElement('template');

logoTemplate.innerHTML = `
  <style>
  .logo{
    text-decoration: none;
    font-family: 'Courier New', Courier, monospace;
    color: var(--primary-color);
    font-size: 2em;
    cursor: pointer;
}
  </style>
  <a class="logo" onclick="OnLogoClick()">/*ELDON_LIN*/</a>
`;



class Logo extends HTMLElement {
    constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: 'open' });
  
      shadowRoot.appendChild(logoTemplate.content);
      
    }
  

  }
  
customElements.define('logo-component', Logo);


