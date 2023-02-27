const personalProjectIntroTemplate = document.createElement('template');

personalProjectIntroTemplate.innerHTML = `

  <h1><slot name="title"></slot></h1>
  <slot name="videoNoWork"></slot>
  <slot name="websiteButton"></slot>
  <slot name="webpageImage"></slot>
  <slot name="webpageVideo"></slot>
  <h2>Description</h2>
  <p><slot name="description"></slot></p>
  <h4>Platform</h4>
  <p><slot name="platform"></slot></p>
  <h4>Language</h4>
  <p><slot name="languages"></slot></p>
  <h4>Tools</h4>
  <p><slot name="tools"></slot></p>
  <h4>TimeLine</h4>
  <p><slot name="timeline"></slot></p>
`;



class PersonalProjectIntro extends HTMLElement {
    constructor() {
      super();

      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.appendChild(personalProjectIntroTemplate.content);
      

    }
  

  }
  



  customElements.define('personalprojectintro-component', PersonalProjectIntro);