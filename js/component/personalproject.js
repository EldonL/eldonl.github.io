const personalProjectTemplate = document.createElement('template');

personalProjectTemplate.innerHTML = `

  <h1><slot name="title"></slot></h1>
  <h2>Description</h2>
  <h2>Description</h2>
  <h2>Description</h2>
  <h2>Description</h2>
  <h2>hihi</h2>

`;



class PersonalProject extends HTMLElement {
    constructor() {
      super();

      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.appendChild(personalProjectTemplate.content);
      

    }
  

  }
  



  customElements.define('personalproject-component', PersonalProject);