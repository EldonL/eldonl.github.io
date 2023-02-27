const personalProjectIntroTemplate = document.createElement('template');

personalProjectIntroTemplate.innerHTML = `

  <h1><slot name="title"></slot></h1>

`;



class PersonalProjectIntro extends HTMLElement {
    constructor() {
      super();

      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.appendChild(personalProjectIntroTemplate.content);
      

    }
  

  }
  



  customElements.define('personalprojectintro-component', PersonalProjectIntro);